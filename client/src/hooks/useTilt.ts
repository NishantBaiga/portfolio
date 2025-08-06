// hooks/useTilt.ts
import { useState, useCallback, useRef } from "react";

export function useTilt(max = 15) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width - 0.5) * 2;
    const percentY = (y / rect.height - 0.5) * 2;

    const rotateX = -percentY * max;
    const rotateY = percentX * max;

    setTilt({ rotateX, rotateY });
  }, [max]);

  const resetTilt = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return { ref, tilt, handleMouseMove, resetTilt };
}
