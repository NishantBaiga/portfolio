import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.3) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
