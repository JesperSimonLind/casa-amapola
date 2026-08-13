import * as React from "react";
import { motion, type Variants } from "motion/react";

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
};

type MotionStaggerProps = {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
};

const revealViewport = { once: true, amount: 0.2 };

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = (
  delayChildren = 0,
  staggerChildren = 0.12,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

function MotionReveal({
  children,
  delay = 0,
  distance = 28,
  duration = 0.7,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionStagger({
  children,
  delayChildren = 0,
  staggerChildren = 0.12,
}: MotionStaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(delayChildren, staggerChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={revealItem}>{children}</motion.div>;
}

export default MotionReveal;
