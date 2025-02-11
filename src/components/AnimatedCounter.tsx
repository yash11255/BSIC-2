import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)), // Ensure it's rounded
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return (
    <motion.span ref={ref} className="text-4xl font-bold text-[#AC7E4F]">
      {count}
      {suffix}
    </motion.span>
  );
}