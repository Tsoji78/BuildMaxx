// app/components/AnimatedSection.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight';
}

const variants = {
  fadeIn: { opacity: 0, y: 0 },
  fadeInUp: { opacity: 0, y: 40 },
  slideInLeft: { opacity: 0, x: -60 },
  slideInRight: { opacity: 0, x: 60 },
};

const finalState = { opacity: 1, x: 0, y: 0 };

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={variants[animation]}
      whileInView={finalState}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}