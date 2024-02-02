import { motion } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function MainSection() {


    return (
        <motion.div id='home'
         initial={{opacity: 0, y:75}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.5, delay: 0.25}}
          className='h-[100vh] relative z-10 text-white flex justify-center lg:pl-0 pl-8 items-center '>
            <div  className=''>
                <h1 className='text-[#EBECF3] font-extrabold text-4xl lg:text-8xl' >Hi, I'm Rehan<span className='text-[#0AE448]'>.</span></h1>
                <h2  className='lg:text-4xl text-xl mt-5'> I'm  a <span className='text-[#0AE448] font-bold lg:text-5xl text-2xl'> <TypeAnimation sequence={['Frontend Developer', 2000, ' UI/UX Designer', 2000, 'Entrepreneur', 2000]} repeat={Infinity} speed={50} /></span></h2>
               <div className='w-[80vw] lg:w-[45vw]'>
               <p className='mt-5 text-[#EBECF3] text-sm lg:text-lg font-normal' >I've spent the last 1 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</p>
               </div>
                <div >
                    <button  className='py-3 text-sm lg:text-lg font-normal mt-5 px-3 lg:px-6 bg-[#0AE448] text-[#080808] rounded-md'>Contact Me</button>
                </div>
                <div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default MainSection