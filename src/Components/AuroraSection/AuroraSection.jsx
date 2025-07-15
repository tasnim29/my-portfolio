// src/Components/Shared/AuroraSection.jsx
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraSection = ({ children }) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
  `;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white"
    >
      {/* Star Field */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={60} count={3000} factor={4} fade speed={2} />
        </Canvas>
      </div>

      {/* Content with animated color */}
      <div className="relative z-10">
        {typeof children === "function" ? children({ color }) : children}
      </div>
    </motion.div>
  );
};

export default AuroraSection;
