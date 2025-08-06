// components/TiltCard.tsx
import { Easing, motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const { ref, tilt, handleMouseMove, resetTilt } = useTilt(15);


  // easeOutCubic type definition
const easeOutCubic: Easing = [0.25, 0.1, 0.25, 1];
const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease:easeOutCubic },
  },
};
  return (
    <motion.div  variants={scaleVariants}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="rounded-full  bg-white dark:bg-neutral-900 shadow-lg will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
