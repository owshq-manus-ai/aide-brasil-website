"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function InfiniteHero({
  title = "AI Data Engineer Brasil",
  subtitle = "A primeira comunidade brasileira dedicada à convergência entre Engenharia de Dados e Inteligência Artificial Generativa (GenAI).",
  ctaText = "Sobre a Comunidade",
  onCtaClick = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  }
}) {
  const tagRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateElement = (element, delay) => {
      if (!element) return;
      
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.filter = 'blur(10px)';
      element.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.filter = 'blur(0px)';
      }, delay);
    };

    animateElement(tagRef.current, 200);
    animateElement(h1Ref.current, 400);
    animateElement(pRef.current, 600);
    animateElement(ctaRef.current, 800);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white">
      {/* Elegant Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Elegant Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        <ElegantShape
          delay={0.8}
          width={180}
          height={50}
          rotate={15}
          gradient="from-green-500/[0.15]"
          className="right-[30%] md:right-[35%] bottom-[15%] md:bottom-[20%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Elegant Tag */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-red-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Data Analytics, Engenharia de Dados e GenAI
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-8 tracking-tight leading-[0.8]">
              <div className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                AI Data Engineer
              </div>
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 mt-4 block"
                style={{ 
                  fontFamily: 'Oswald, sans-serif',
                  backgroundSize: '200% 200%',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(156, 163, 175, 0.3), 0 0 90px rgba(209, 213, 219, 0.2)',
                  filter: 'drop-shadow(0 0 15px rgba(156, 163, 175, 0.6)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.3))'
                }}
              >
                Brasil
              </motion.div>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/50 mb-8 leading-relaxed font-light tracking-wide max-w-4xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-row items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={onCtaClick}
              className="group relative overflow-hidden border border-white/30 bg-gradient-to-r from-white/20 to-white/10 px-6 py-3 text-sm rounded-lg font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-500 hover:border-white/50 hover:bg-white/20 hover:scale-105 cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              <span className="relative z-10">{ctaText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

