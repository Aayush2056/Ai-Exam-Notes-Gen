import {motion, scale, spring} from "motion/react"
import React from "react"
import { useSelector } from "react-redux"
import logo  from "../assets/logo.png"
function Navbar() {
const { userData } = useSelector((state) => state.user);
const credits = userData.credits;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-20 mx-6 mt-6 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.75)] flex items-center justify-between px-8 py-4"
    >
  <div className='flex items-center gap-3'>
  <img src={logo} alt="examnotes" className='w-9 h-9' />
  <span className='text-lg hidden md:block font-semibold text-white'>
    ExamNotes <span className='text-gray-400'>AI</span>
  </span>
</div>  

    <div className='flex items-center gap-6 relative'>
  <div className='relative'>
   <motion.div
  whileHover={{ scale: 1.07 }}
  whileTap={{ scale: 0.97 }}
  className="flex items-center justify-center gap-0
    px-4 py-2 rounded-full
    bg-white/10
    border border-white/20
    text-white text-sm
    shadow-md
    cursor-pointer"
>
  <span className="text-xl">💎</span>
  <span>{credits}</span>
  <motion.span
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
    className="ml-2 h-5 w-5 flex items-center justify-center
      rounded-full   text-xs font-bold"
  >
    +
  </motion.span>
</motion.div>

  </div>
</div>

    </motion.div>
  )
}

export default Navbar
