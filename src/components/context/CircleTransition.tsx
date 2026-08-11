import { motion, AnimatePresence, useWillChange } from "framer-motion";
import { useTransition } from "./TransitionContext";
import { useState, useEffect, useRef } from "react";

export default function CircleTransition() {
  const { isAnimating, clickX, clickY, transitionColor } = useTransition();
  const willChange = useWillChange();
  
  const [isAnimatingState, setIsAnimatingState] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const prevClickRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isAnimating) {
      if (clickX !== prevClickRef.current.x || clickY !== prevClickRef.current.y) {
        prevClickRef.current = { x: clickX, y: clickY };
        setAnimationKey(prev => prev + 1);
        setIsAnimatingState(true);
      }
    } else {
      setIsAnimatingState(false);
    }
  }, [isAnimating, clickX, clickY])

  return (
    <AnimatePresence mode="wait">
      {isAnimatingState && (
        <motion.div
          key={animationKey}
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
