"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Déclenche plus tôt au scroll — élément encore un peu plus haut dans la page */
const scrollViewport = { once: true, margin: "0px 0px 18% 0px" as const };

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: easeOut }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Titre hero — fondu + léger défloutage */
export function FadeInBlur({ children, className, delay = 0.15, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.95, delay, ease: easeOut }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ScrollFadeInProps = FadeInProps & {
  staggerIndex?: number;
};

export function ScrollFadeIn({
  children,
  className,
  delay = 0,
  staggerIndex = 0,
  ...props
}: ScrollFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{
        duration: 0.65,
        delay: delay + staggerIndex * 0.1,
        ease: easeOut,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
