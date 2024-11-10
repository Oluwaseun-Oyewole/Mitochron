// src/components/Hamburger.tsx
import { motion } from "framer-motion"
import { useGlobalStoreHook } from "../../../hooks"

const lineVariants = {
  top: {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  },
  middle: {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  },
  bottom: {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  },
}

const Hamburger = () => {
  const { isOpen, toggle } = useGlobalStoreHook()

  return (
    <button onClick={toggle}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Line */}
        <motion.line
          x1="5"
          y1="9"
          x2="25"
          y2="9"
          stroke="black"
          strokeWidth="3"
          variants={lineVariants.top}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        {/* Middle Line */}
        <motion.line
          x1="5"
          y1="15"
          x2="25"
          y2="15"
          stroke="black"
          strokeWidth="3"
          variants={lineVariants.middle}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        {/* Bottom Line */}
        <motion.line
          x1="5"
          y1="21"
          x2="25"
          y2="21"
          stroke="black"
          strokeWidth="3"
          variants={lineVariants.bottom}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  )
}

export default Hamburger
