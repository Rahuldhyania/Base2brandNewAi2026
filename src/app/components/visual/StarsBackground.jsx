'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

function generateStars(count, starColor) {
  const shadows = [];

  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }

  return shadows.join(', ');
}

const StarLayer = React.memo(function StarLayer({
  count,
  size,
  transition,
  starColor,
  className,
}) {
  const boxShadow = React.useMemo(
    () => generateStars(count, starColor),
    [count, starColor]
  );

  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={cn(
        'absolute inset-0 h-[2000px] pointer-events-none',
        className
      )}
      style={{
        willChange: 'transform',
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          boxShadow,
          background: 'transparent',
        }}
      />

      <div
        className="absolute rounded-full top-[2000px]"
        style={{
          width: size,
          height: size,
          boxShadow,
          background: 'transparent',
        }}
      />
    </motion.div>
  );
});

export function StarsBackground({
  children,
  className,
  factor = 0.02,
  speed = 90,
  transition = {
    stiffness: 40,
    damping: 25,
  },
  starColor = '#ffffff',
  ...props
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const frameRef = React.useRef(null);

  const handleMouseMove = React.useCallback(
    (e) => {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        offsetX.set(-(e.clientX - centerX) * factor);
        offsetY.set(-(e.clientY - centerY) * factor);

        frameRef.current = null;
      });
    },
    [factor, offsetX, offsetY]
  );

  React.useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      data-testid="stars-background"
      className={cn(
        'relative w-full h-full overflow-hidden',
        'bg-[radial-gradient(ellipse_at_bottom,_#0a0e2a_0%,_#02030a_70%,_#000000_100%)]',
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          willChange: 'transform',
        }}
      >
        {/* Far Stars */}
        <StarLayer
          count={500}
          size={1}
          starColor={starColor}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: 'linear',
          }}
        />

        {/* Mid Stars */}
        <StarLayer
          count={300}
          size={1.5}
          starColor={starColor}
          transition={{
            repeat: Infinity,
            duration: speed * 1.5,
            ease: 'linear',
          }}
        />

        {/* Near Stars */}
        <StarLayer
          count={100}
          size={2}
          starColor="#ffd9b3"
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: 'linear',
          }}
        />
      </motion.div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}