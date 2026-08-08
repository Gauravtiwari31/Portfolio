import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { isTouch } from "../../lib/gsap";
import { usePointerNDC } from "./usePointerNDC";

/* ---------------------------------------------------------------------------
   A grid of points displaced by layered sine waves, with a ripple that
   follows the pointer. Molten near the crests, near-black in the troughs.
   ------------------------------------------------------------------------- */

const VERT = /* glsl */ `
  uniform float uTime;
  uniform vec2  uPointer;
  uniform float uPixelRatio;
  varying float vH;

  void main() {
    vec3 p = position;
    float d = length(p.xz);

    float w =
        sin(p.x * 0.42 + uTime * 0.75) * 0.55
      + sin(p.z * 0.62 - uTime * 0.55) * 0.38
      + sin(d * 0.85  - uTime * 1.05) * 0.42;

    // pointer ripple
    float pd = distance(p.xz, uPointer);
    w += exp(-pd * 0.42) * 1.7;

    p.y += w;
    vH = w;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (13.0 * uPixelRatio) / max(-mv.z, 0.001);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uCold;
  uniform vec3 uHot;
  varying float vH;

  void main() {
    float dd = distance(gl_PointCoord, vec2(0.5));
    if (dd > 0.5) discard;
    float alpha = smoothstep(0.5, 0.05, dd);
    float heat = clamp(vH * 0.42 + 0.34, 0.0, 1.0);
    vec3 c = mix(uCold, uHot, heat * heat);
    gl_FragColor = vec4(c, alpha * (0.22 + heat * 0.78));
  }
`;

function Field({ dense }: { dense: boolean }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const pointer = usePointerNDC();
  const target = useRef(new THREE.Vector2(999, 999));

  const cols = dense ? 150 : 84;
  const rows = dense ? 84 : 48;
  const spanX = 34;
  const spanZ = 20;

  const positions = useMemo(() => {
    const arr = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        arr[i++] = (x / (cols - 1) - 0.5) * spanX;
        arr[i++] = 0;
        arr[i++] = (z / (rows - 1) - 0.5) * spanZ;
      }
    }
    return arr;
  }, [cols, rows]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(999, 999) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uCold: { value: new THREE.Color("#2a2130") },
      uHot: { value: new THREE.Color("#ff5a1f") },
    }),
    []
  );

  useFrame((_, dt) => {
    if (!mat.current) return;
    const d = Math.min(dt, 0.1);
    mat.current.uniforms.uTime.value += d;

    // project the normalised pointer onto the plane's footprint
    target.current.set(
      pointer.current.x * (spanX * 0.45),
      -pointer.current.y * (spanZ * 0.65)
    );
    (mat.current.uniforms.uPointer.value as THREE.Vector2).lerp(
      target.current,
      d * 3.2
    );
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={VERT}
        fragmentShader={FRAG}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const WaveField = () => {
  const dense = useMemo(
    () =>
      !isTouch() &&
      typeof navigator !== "undefined" &&
      (navigator.hardwareConcurrency ?? 8) > 4,
    []
  );

  return (
    <Canvas
      className="wave-canvas"
      dpr={[1, dense ? 1.75 : 1.25]}
      camera={{ position: [0, 5.2, 12], fov: 42 }}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      onCreated={({ camera }) => camera.lookAt(0, 0, -1)}
    >
      <Field dense={dense} />
    </Canvas>
  );
};

export default WaveField;
