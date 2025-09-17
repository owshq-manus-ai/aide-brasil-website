import React from 'react'
import { motion } from 'framer-motion'

const WebinarAnimations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {/* Animated SVG Network */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
        </defs>

        {/* Network Lines */}
        {[
          { d: "M 100 200 L 300 400", delay: 0 },
          { d: "M 700 300 L 900 500", delay: 1 },
          { d: "M 400 700 L 600 900", delay: 2 },
          { d: "M 200 600 Q 350 400 500 450", delay: 1.5 },
          { d: "M 800 200 Q 650 350 500 300", delay: 2.5 },
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            stroke="url(#purple-grad)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: 4,
              delay: path.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Pulsing Nodes */}
        {[
          { cx: 100, cy: 200, delay: 0 },
          { cx: 300, cy: 400, delay: 0.3 },
          { cx: 900, cy: 500, delay: 0.5 },
          { cx: 700, cy: 300, delay: 0.7 },
          { cx: 600, cy: 900, delay: 1 },
          { cx: 400, cy: 700, delay: 1.2 },
          { cx: 500, cy: 450, delay: 1.5 },
          { cx: 500, cy: 300, delay: 1.7 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="#9333EA"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{
              y: '-10vh',
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Rotating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Diamond */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,50 50,90 10,50"
              fill="none"
              stroke="rgba(147, 51, 234, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Square */}
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect
              x="20" y="20" width="60" height="60"
              fill="none"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Octagon */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30"
              fill="none"
              stroke="rgba(196, 181, 253, 0.25)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>

        {/* Triangle */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-28 h-28"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,20 80,80 20,80"
              fill="none"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Star */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,15 61,35 82,35 66,51 73,72 50,57 27,72 34,51 18,35 39,35"
              fill="none"
              stroke="rgba(147, 51, 234, 0.35)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default WebinarAnimations