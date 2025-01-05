'use client';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function DBG() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gradientX = useTransform(mouseX, (x) => x - 150); // Offset by half of gradient width
  const gradientY = useTransform(mouseY, (y) => y - 150); // Offset by half of gradient height

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        translateX: gradientX,
        translateY: gradientY,
      }}
    >
      <div className="relative w-[300px] h-[300px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-50">
        {/* Outer glow */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 rounded-full blur-4xl opacity-40" />
        {/* Inner glow */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-pink-600 to-purple-700 rounded-full blur-xl opacity-50" />
      </div>
    </motion.div>
  );
}