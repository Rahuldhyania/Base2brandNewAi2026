// Framer Motion presets: fade + translate only, engineering-focused
export const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -22 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (gap = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
});

export const viewportOnce = { once: true, margin: "-80px" };
