import React, {useEffect} from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
   
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
        <div id='about'>
            <div 
            className='lg:h-screen max-h-fit py-10 bg-[#111]  flex justify-center items-center z-90 text-white'>
                <motion.div
                ref={ref}
                initial={{opacity: 0, y: 75}}
                animate={controls1}
                >
                    <div
                     className='flex justify-center items-center lg:mr-20 '>
                        <h1 className='lg:text-[56px] text-2xl text-[#EBECF3] font-extrabold lg:ml-14 '>About<span className='text-[#0AE448] '>.</span></h1>
                        <div className='border-t border-[#EBECF3] lg:mx-0 mx-4 lg:ml-7 opacity-40 w-[65vw] inline-block lg:w-[760px]'></div>
                    </div>
                    <div className='flex justify-center lg:px-0 px-10 flex-col lg:flex-row mt-10 '>
                        <div>
                            <p className='lg:text-lg text-sm opacity-80'> <span className='py-2 px-3 text-[#0AE448]  font-bold lg:text-2xl text-lg bg-[#232323]'>H</span> <span className='text-[#EBECF3]'> ey! I'm Rehan, if you haven't already gathered that by now. I'm a <br className='lg:flex hidden'/> Developer turned software engineer from Kolkata, India. I specialize  in <br  className='lg:flex hidden'/>the Frontend, primarily React and Tailwind, but love by building with <br  className='lg:flex hidden'/> whatever tools are right for the job. </span></p>

                            <p className='lg:text-lg text-sm text-[#EBECF3] opacity-80 mt-6'>I currently work for Google on Google Pay. I also toss in my ¢2 with the  <br  className='lg:flex hidden'/> design systems teams from time to time (once an artist, always an <br  className='lg:flex hidden'/> artist, amirite?).</p>

                            <p className='lg:text-lg text-sm text-[#EBECF3] opacity-80 mr-10 mt-6'>Outside of work, I still love to paint. Any given Sunday you'll find me <br  className='lg:flex hidden'/> scribbling some happy clouds with my son ☁️ I even teach courses <br  className='lg:flex hidden'/> online if you're looking to learn!</p>

                            <p className='lg:text-lg text-sm23 text-[#EBECF3] opacity-80 mt-6'>I'm passively looking for new positions where I can merge my love for <br  className='lg:flex hidden'/> code with my love for the canvas. If you think you've got an opening <br  className='lg:flex hidden'/> that I might like, let's connect 🔗</p>
                            <div className='flex mt-6'>
                                <h1 className='text-lg text-[#0AE448] mt-1'>My LInks <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" className='inline-block' viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg></span> </h1>
                                <div className='flex ml-3 space-x-3'>
                                    <span>
                                        <a href="https://www.linkedin.com/in/md-rehan-89030b289/">
                                            <svg className='text-gray-400 inline-block hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
                                        </a>
                                    </span>
                                    <span>
                                        <a href="https://github.com/">
                                            <svg className='text-gray-400 hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                                        </a>
                                    </span>

                                    <span>
                                        <a href="">
                                            <svg className='text-gray-400 hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path></svg>
                                        </a>
                                    </span>

                                    <svg stroke="currentColor" fill="currentColor" className='text-gray-400 hover:text-[#0AE448] ' stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className='lg:ml-2 lg:mt-0 mt-12'>
                            <h1 className='text-[22px] lg:ml-6 font-extrabold'> <span><BsPersonWorkspace className='inline-block mb-1 mr-3 text-[#0AE448]' /></span> Use At Work</h1>
                            <div className='mt-5 hover:scale-105 duration-700 lg:ml-2'>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-2 py-1 rounded-full '>
                                    JavaScript
                                </span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>CSS</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>AWS</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>PYthon</span>
                            </div>
                            <div className='mt-5 lg:ml-2 hover:scale-105 duration-700 '>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-2 py-1 rounded-full '>
                                    Next.Js
                                </span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Express</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Figma</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>HTML</span>
                            </div>
                            <div className='mt-5 lg:ml-2 hover:scale-105 duration-700 '>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-2 py-1 rounded-full '>
                                    Tailwind
                                </span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GitHub</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Redux</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>GSAP</span>
                            </div>
                            <div className='mt-5 lg:ml-2 hover:scale-105 duration-700 '>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-3 py-1 rounded-full '>
                                    C++
                                </span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Node</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>React</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>MongoDB</span>
                            </div>
                            <div className='lg:ml-2'>
                                <h1 className='text-[22px] lg:ml-6 font-extrabold mt-10'> <FaRegSmileBeam className='inline-block mb-1 mr-3 text-[#0AE448] ' />Future Learning</h1>
                                <div>
                                <div className='mt-5 lg:ml-2 hover:scale-105 lg:w-auto w-[90vw] duration-700 '>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-2 py-1 rounded-full '>
                                    Docker
                                </span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>BlockChain</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>ML</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>AI</span>
                            </div>
                            <div className='mt-5 lg:ml-2 hover:scale-105 lg:w-auto w-[90vw]  duration-700 '>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-2 py-1 rounded-full '>
                                    Django                               </span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Solidity</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>AWS</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>NLP</span>
                            </div>
                            <div className='mt-5 lg:ml-2 hover:scale-105 lg:w-auto w-[90vw] duration-700'>
                                <span className='bg-[#232323] h-2 w-2 lg:ml-3 px-2 py-1 rounded-full'>DevOps</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'>Tablue</span>
                                <span className='bg-[#232323] h-2 w-2 ml-3 px-2 py-1 rounded-full'> Data Analytics</span>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About