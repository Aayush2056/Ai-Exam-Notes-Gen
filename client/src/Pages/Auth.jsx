import React from "react";
import {motion, scale, spring} from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
function Auth(){

   const handleGoogleAuth = async ()=>{
    try {
      const response = await signInWithPopup(auth, provider)
     const User = response.user;
     const name = User.displayName;
     const email = User.email;
    } catch (error) {
      
    }
   }
    return (
      <div className="min-h-screen overflow-hidden bg-white text-black px-8">
        <motion.header
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="max-w-5xl mx-auto mt-5
           rounded-2xl
           bg-black/80 backdrop:blur-xl
           border border-white/10
           px-5 py-6
           shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
        >
          <h1
            className="text-2xl font-bold 
            bg-linear-to-t from-white via-gray-300 to-white
            bg-clip-text text-transparent"
          >
            Ai Notes
          </h1>
          <p className="text-sm text-gray-300 mt-1">Learn with ai</p>
        </motion.header>
        <main className="max-w-7xl mx-auto py-10 grid  grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/*Left content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1
              className="text-3xl lg:text-4xl font-extrabold leading-tight bg-linear-to-br
                      from black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
            >
              Get Ai Notes
            </h1>

            <motion.button
             onClick= {handleGoogleAuth}
              whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: spring, stiffness: 200, damping: 30 }}
              className="mt-10 px-10 py-3 rounded-xl
                   flex items-center gap-3
                  bg-gradient-to-br from-black/90 via-black/80 to-black/90
                 border border-white/10
                text-white font-semibold text-lg
               shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
            >
              <FcGoogle size={22} /> Connect with google
            </motion.button>

            <p className="mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent">
              You get <span className="font-semibold">50 FREE credits</span> to
              create exam notes, project notes, charts, graphs and download
              clean PDFs — instantly using AI.
            </p>

            <p className="">
              Start with 50 free credits • Upgrade anytime for more credits •
              Instant access
            </p>
          </motion.div>
          {/*Right content */}
       {/* RIGHT CONTENT */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <Feature 
    icon="🎁" 
    title="50 Free Credits" 
    desc="Start with 50 credits to generate notes without paying." 
  />
  <Feature 
    icon="🧾" 
    title="Exam Notes" 
    desc="High-yield, revision-ready exam-oriented notes." 
  />
  <Feature 
    icon="📁" 
    title="Project Notes" 
    desc="Well-structured documentation for assignments & projects." 
  />
  <Feature 
    icon="📊" 
    title="Charts & Graphs" 
    desc="Auto-generated diagrams, charts and flow graphs." 
  />
  <Feature 
    icon="📄" 
    title="Free PDF Download" 
    desc="Download clean, printable PDFs instantly." 
  />
</div>

        </main>
      </div>
    );
}
function Feature({icon , title , des}) {
  return (
    <motion.div
      whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative rounded-2xl p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
      </div>
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{des}</p>
      </div>
    </motion.div>
  )
}

export default Auth;
