import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Experience() {

    const controls1 = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 60px',
      });

      useEffect(() => {
        if (inView) {
          controls1.start({ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } });
        }
      }, [inView, controls1]);


    return (
        <div className='h-[100vh] bg-[#111] text-white'>
            <motion.div
             initial={{opacity: 0, y: 75}}
             animate={controls1}
             ref={ref}
            >
            <div className='flex justify-center items-center'>
                <h1 className='text-[56px] text-[#EBECF3] font-extrabold '>Experience<span className='text-[#0AE448] '>.</span></h1>
                <div className='border-t  border-[#EBECF3] ml-7 opacity-40 inline-block w-[680px]'></div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-[22px] font-extrabold mt-3 '>Google</h1>
                    <h1 className='text-[18px] text-[#0AE448] mt-3 font-semibold '>Frontend Developer</h1>
                    <p className='text-lg text-[#EBECF3] opacity-80 mt-3'>I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated <br /> backend service from Java to Go. Also helped make it look prettier.</p>
                </div>
                <div className=''>
                    <h2 className='text-lg font-medium mt-3 opacity-90 '>2023 - Present </h2>
                    <h2 className='text-lg font-medium mt-3 opacity-90 '>Silicon Valley</h2>
                </div>
            </div>
            <div className='mt-5 flex justify-start ml-60'>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                    <span className='bg-[#232323] h-2 w-2 ml-1 px-2 py-1 rounded-full '>
                    Angular
                </span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Python</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GCP</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Git</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GitHub</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Java</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Golang</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>K8s</span>
                </div>
            </div>
            <div className='flex justify-center'>
            <div className='border-t  border-[#EBECF3] mt-6 opacity-20 inline-block w-[1020px]'></div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-[22px] font-extrabold mt-6 '>Facebook</h1>
                    <h1 className='text-[18px] text-[#0AE448] mt-3 font-semibold '>Frontend Developer</h1>
                    <p className='text-lg text-[#EBECF3] opacity-80 mt-3'>I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated <br /> backend service from Java to Go. Also helped make it look prettier.</p>
                </div>
                <div className=''>
                    <h2 className='text-lg font-medium mt-3 opacity-90 '>2022 -  2023 </h2>
                    <h2 className='text-lg font-medium mt-3 opacity-90 '>San Francisco</h2>
                </div>
            </div>
            <div className='mt-5 flex justify-start ml-60'>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                    <span className='bg-[#232323] h-2 w-2 ml-1 px-2 py-1 rounded-full '>
                    React
                </span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Python</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GCP</span>
                </div>
                <div className='hover:scale-110 cursor-pointer  duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Git</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GitHub</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Java</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Golang</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>K8s</span>
                </div>
            </div>
            <div className='flex justify-center'>
            <div className='border-t  border-[#EBECF3] mt-6 opacity-20 inline-block w-[1020px]'></div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-[22px] font-extrabold mt-6 '>Freelanching</h1>
                    <h1 className='text-[18px] text-[#0AE448] mt-3 font-semibold '>Frontend Developer</h1>
                    <p className='text-lg text-[#EBECF3] opacity-80 mt-3'>I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated <br /> backend service from Java to Go. Also helped make it look prettier.</p>
                </div>
                <div className=''>
                    <h2 className='text-lg font-medium mt-3 opacity-90 '> Present </h2>
                    <h2 className='text-lg font-medium mt-3 opacity-90 '>Upwork, Fiver</h2>
                </div>
            </div>
            <div className='mt-5 flex justify-start ml-60'>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                    <span className='bg-[#232323] h-2 w-2 ml-1 px-2 py-1 rounded-full '>
                    React
                </span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Python</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GCP</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Git</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GitHub</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Java</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700 '>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Golang</span>
                </div>
                <div className='hover:scale-110 cursor-pointer duration-700'>
                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>K8s</span>
                </div>
            </div>
            <div className='flex justify-center'>
            <div className='border-t  border-[#EBECF3] mt-6 opacity-20 inline-block w-[1020px]'></div>
            </div>
            </motion.div>
        </div>
    )
}

export default Experience