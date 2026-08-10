import { motion, AnimatePresence, useWillChange } from "framer-motion";
import { useTransition } from "./TransitionContext";

export default function CircleTransition() {
  const { isAnimating, clickX, clickY, transitionColor } = useTransition();
  const willChange = useWillChange();

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={{ scale: Math.max(window.innerWidth, window.innerHeight) / 50 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            top: clickY,
            left: clickX,
            width: 100,
            height: 100,
            background: transitionColor,
            transform: "translate(-50%, -50%)",
            zIndex: 999,
            willChange: willChange,
            backfaceVisibility: "hidden",
            pointerEvents: "none"
          }}
        />
      )}
    </AnimatePresence>
  );
}
