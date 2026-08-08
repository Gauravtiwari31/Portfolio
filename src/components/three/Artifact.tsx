import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  Sparkles,
  Preload,
} from "@react-three/drei";
import { isTouch } from "../../lib/gsap";
import { usePointerNDC } from "./usePointerNDC";

/* ---------------------------------------------------------------------------
   The hero centrepiece: a blown-glass knot wrapped around a molten core,
   caged by two counter-rotating chrome rings. Replaces the old avatar.
   ------------------------------------------------------------------------- */

function Rings() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    const d = Math.min(dt, 0.1);
    if (a.current) a.current.rotation.z += d * 0.22;
    if (b.current) b.current.rotation.z -= d * 0.15;
  });

  return (
    <>
      <mesh ref={a} rotation={[Math.PI / 2.6, 0.4, 0]}>
        <torusGeometry args={[1.92, 0.0075, 6, 220]} />
        <meshStandardMaterial
          color="#7c7c8a"
          metalness={1}
          roughness={0.22}
          envMapIntensity={2.2}
        />
      </mesh>
      <mesh ref={b} scale={1.18} rotation={[-Math.PI / 3.4, -0.55, 0.3]}>
        <torusGeometry args={[1.92, 0.0075, 6, 220]} />
        <meshStandardMaterial
          color="#ff4d19"
          metalness={0.9}
          roughness={0.3}
          emissive="#ff4d19"
          emissiveIntensity={0.55}
        />
      </mesh>
    </>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.x = t * 0.32;
    ref.current.rotation.y = t * 0.24;
    // slow breathing pulse so the glass catches a shifting glow
    ref.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.055);
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.62, 1]} />
      <meshStandardMaterial
        color="#1a0700"
        emissive="#ff5a1f"
        emissiveIntensity={3.4}
        roughness={0.35}
        metalness={0.2}
        flatShading
      />
    </mesh>
  );
}

function Knot({ lite }: { lite: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const pointer = usePointerNDC();

  useFrame((_, dt) => {
    if (!ref.current) return;
    const d = Math.min(dt, 0.1);
    ref.current.rotation.y += d * 0.18;
    ref.current.rotation.z += d * 0.05;

    const { x, y } = pointer.current;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -y * 0.32,
      0.045
    );
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      x * 0.22,
      0.045
    );
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.33, 240, 40, 2, 3]} />
      {lite ? (
        <meshPhysicalMaterial
          color="#c9ccd6"
          metalness={0.92}
          roughness={0.14}
          iridescence={1}
          iridescenceIOR={1.6}
          envMapIntensity={2.4}
        />
      ) : (
        <MeshTransmissionMaterial
          samples={6}
          resolution={256}
          transmission={1}
          thickness={0.85}
          roughness={0.07}
          ior={1.52}
          chromaticAberration={0.42}
          anisotropicBlur={0.35}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.12}
          color="#ffffff"
          attenuationColor="#ffb489"
          attenuationDistance={2.4}
        />
      )}
    </mesh>
  );
}

function Rig() {
  const pointer = usePointerNDC();

  useFrame((state, dt) => {
    const d = Math.min(dt, 0.1);
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      pointer.current.x * 0.9,
      d * 2.2
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      pointer.current.y * 0.55,
      d * 2.2
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

const Artifact = () => {
  // Transmission renders the scene to an offscreen buffer every frame — too
  // costly on phones and low-core laptops, so those get a metal/iridescent
  // knot that reads similarly for one pass.
  const lite = useMemo(
    () =>
      isTouch() ||
      (typeof navigator !== "undefined" &&
        (navigator.hardwareConcurrency ?? 8) <= 4),
    []
  );

  return (
    <Canvas
      className="artifact-canvas"
      dpr={[1, lite ? 1.4 : 1.8]}
      camera={{ position: [0, 0, 6.4], fov: 34 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.15;
      }}
    >
      <ambientLight intensity={0.35} />
      <pointLight
        position={[0, 0, 0]}
        intensity={6}
        distance={5}
        color="#ff6a2a"
      />

      <Float speed={1.1} rotationIntensity={0.28} floatIntensity={0.55}>
        <Knot lite={lite} />
        <Core />
        <Rings />
      </Float>

      {!lite && (
        <Sparkles
          count={70}
          scale={[9, 6, 6]}
          size={1.6}
          speed={0.28}
          opacity={0.5}
          color="#ffcaa8"
        />
      )}

      <Environment resolution={256}>
        {/* key light overhead */}
        <Lightformer
          intensity={2.4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -8]}
          scale={[12, 12, 1]}
          color="#ffffff"
        />
        {/* molten rim, screen-left */}
        <Lightformer
          intensity={5}
          rotation-y={Math.PI / 2}
          position={[-5, 0.5, -1]}
          scale={[22, 0.7, 1]}
          color="#ff4d19"
        />
        <Lightformer
          intensity={3.4}
          rotation-y={Math.PI / 2}
          position={[-4, -1.5, 0]}
          scale={[18, 0.4, 1]}
          color="#ffa02e"
        />
        {/* cool counter-rim, screen-right — keeps the glass from going muddy */}
        <Lightformer
          intensity={2.2}
          rotation-y={-Math.PI / 2}
          position={[5, 1, 1]}
          scale={[18, 0.9, 1]}
          color="#9ec2ff"
        />
      </Environment>

      <Rig />
      <Preload all />
    </Canvas>
  );
};

export default Artifact;
