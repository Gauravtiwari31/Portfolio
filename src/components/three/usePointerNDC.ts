import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

/**
 * Normalised pointer (-1..1) measured against the canvas rect.
 *
 * Both scenes sit under `pointer-events: none` wrappers so they never steal
 * clicks or text selection from the page — which also means R3F's own pointer
 * never updates. Tracking it on `window` instead keeps the parallax alive.
 */
export function usePointerNDC() {
  const gl = useThree((s) => s.gl);
  const pointer = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const r = gl.domElement.getBoundingClientRect();
      if (!r.width || !r.height) return;
      pointer.current.set(
        ((e.clientX - r.left) / r.width) * 2 - 1,
        -((e.clientY - r.top) / r.height) * 2 + 1
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [gl]);

  return pointer;
}
