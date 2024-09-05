import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

function MainSection() {

    return (
        <motion.div id='home'
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='lg:h-[100vh] h-screen lg:py-0 py-7 relative z-10 text-white flex justify-center lg:pl-0 pl-8 items-center pt-16 lg:pt-0'>
            <div className=''>
                <h1 className='text-[#EBECF3] font-extrabold text-5xl lg:text-8xl' >Hi, I'm Rehan<span className='text-[#0AE448]'>.</span></h1>
                <h2 className='lg:text-4xl text-xl mt-5'> I'm  a <span className='text-[#0AE448] font-bold lg:text-5xl text-2xl'> <TypeAnimation sequence={['Frontend Developer', 2000, ' Backend Developer', 2000, 'Full stack Developer', 2000]} repeat={Infinity} speed={50} /></span></h2>
                <div className='w-[80vw] lg:w-[45vw]'>
                    <p className='mt-5 text-[#EBECF3] text-sm lg:text-lg font-normal' >
                        <p className='mt-5 text-[#EBECF3] text-base lg:text-lg font-normal'>
                            As a passionate full-stack developer, I've dedicated the last year to building and scaling applications for both personal and freelancing projects. I've had the opportunity to work with amazing clients and delivering high-quality, scalable solutions. Whether it's frontend, backend, or full-stack development, I enjoy creating applications. Let's connect and collaborate!
                        </p>
                    </p>
                </div>
                <div>
                </div>
            </div>

        </motion.div>
    )
}

export default MainSection