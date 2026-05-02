import { motion } from 'framer-motion'

const SHIP_IMAGE =
  'https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?auto=format&fit=crop&fm=jpg&q=80&w=1800'

export default function OceanScene() {
  return (
    <div className="relative h-[540px] overflow-hidden rounded-[30px] bg-[#071c3d]">
      <motion.div
        className="absolute inset-[-3%] bg-cover bg-center"
        style={{ backgroundImage: `url(${SHIP_IMAGE})` }}
        animate={{ scale: [1.03, 1.07, 1.03], x: [0, -8, 0], y: [0, -6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,28,61,0.08)_0%,rgba(8,28,55,0.16)_28%,rgba(9,29,61,0.34)_58%,rgba(6,22,44,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(102,168,226,0.22),transparent_22%)]" />

      <motion.div
        className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]"
        animate={{ opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[16%] left-0 right-0 h-10 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] blur-md"
        animate={{ x: ['-18%', '18%', '-18%'], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-x-[-5%] bottom-0 h-28 bg-[linear-gradient(180deg,rgba(21,72,136,0.05),rgba(8,30,61,0.65))]"
        animate={{ y: [0, 8, 0], scaleX: [1, 1.02, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(180deg,transparent,rgba(6,21,43,0.88))]" />
    </div>
  )
}
