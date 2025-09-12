"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const HeroLamp = React.forwardRef(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030303]",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Lamp light source at top */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[15rem] bg-green-400"
            />
            
            {/* Animated expanding line */}
            <motion.div
              initial={{ width: "15rem" }}
              animate={{ width: "30rem" }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
            />

            {/* Left light ray */}
            <motion.div
              initial={{ opacity: 0.5, width: "8rem" }}
              animate={{ opacity: 1, width: "20rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-1/2 h-screen origin-top"
              style={{
                background: `linear-gradient(117deg, transparent, rgba(34, 197, 94, 0.1) 20%, rgba(34, 197, 94, 0.2) 40%, transparent 50%)`,
                transform: 'perspective(1000px) rotateY(15deg)',
                clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
              }}
            />

            {/* Right light ray */}
            <motion.div
              initial={{ opacity: 0.5, width: "8rem" }}
              animate={{ opacity: 1, width: "20rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/2 h-screen origin-top"
              style={{
                background: `linear-gradient(243deg, transparent, rgba(34, 197, 94, 0.1) 20%, rgba(34, 197, 94, 0.2) 40%, transparent 50%)`,
                transform: 'perspective(1000px) rotateY(-15deg)',
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
              }}
            />

            {/* Center bright cone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[150%] w-[1px]"
              style={{
                background: 'linear-gradient(to bottom, rgb(34, 197, 94), transparent)',
                filter: 'blur(2px)',
                boxShadow: '0 0 80px 20px rgba(34, 197, 94, 0.5)'
              }}
            />

            {/* Ambient glow on floor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[60rem] bg-gradient-to-t from-green-500/10 via-transparent to-transparent blur-3xl" />

            {/* Bottom fade gradient */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
          </div>
        )}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-white/60 mt-6",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex gap-4 mt-8", actionsClassName)}>
                {actions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (action.href) {
                        const element = document.querySelector(action.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={cn(
                      "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                      action.variant === "outline" 
                        ? "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
                        : "bg-white text-black hover:bg-white/90"
                    )}
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    )
  },
)
HeroLamp.displayName = "HeroLamp"

export { HeroLamp }