import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Proojects() {

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
    <div id='projects'
      className='max-h-fit lg:py-16 py-20 bg-[#111] text-white'>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={controls1}
        ref={ref}
      >
        <div
          className='flex justify-center mb-14 px-6 lg:px-0 items-center '>
          <div className='border-t  border-[#EBECF3] opacity-40 inline-block w-[65vw] lg:w-[767px]'></div>
          <h1 className='ml-7 text-2xl lg:text-[56px] font-extrabold  text-[#EBECF3]'>Projects<span className='text-[#0AE448]'>.</span></h1>
        </div>
        <div className='flex lg:space-x-20 lg:space-y-0 space-y-16 flex-col lg:flex-row mt-5 px-5 lg:px-0 items-center mb-10 justify-center'>
          <div>
            <div className='bg-[#232323] h-[30vh] flex justify-center overflow-hidden pt-14 w-[85vw] lg:w-[31vw] lg:h-[35vh]'>
              <img src="public\Images\Fullstack.png" className='hover:scale-105 duration-500' width={360} alt="Fullstack.png" />
            </div>
            <div className='flex  items-center'>
              <div>
                <h1 className='font-extrabold mt-5 text-base lg:text-[22px]'>Full stack messaging App</h1>
              </div>
              <div className='mt-2'>
                <div className='border-t ml-3 mr-3 border-[#EBECF3] opacity-40 inline-block w-[33vw] lg:w-[140px]'></div>
              </div>
              <div className='mt-3'>
                <span>
                  <a href="https://github.com/rehan-adi/Next-Fullstack-App">
                    <svg className='text-gray-400 hover:text-white ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                  </a>
                </span>
              </div>
            </div>
            <div className='mt-3'>
              <p className='text-[#0AE448] text-sm'>Next Js - Tailwind CSS - ShadCN - Typescript - zod - prisma</p>
            </div>
            <div className='flex mt-3 items-center'>
              <p className='text-lg text-[#EBECF3] opacity-80'>
                This is a messaging app that includes authentication
                <br className='lg:flex hidden' />
                It is built with modern technologies and optimized  <br /> for user experience.
              </p>

            </div>
          </div>
          <div className='flex justify-center items-start  flex-col'>
            <div className='bg-[#232323] flex justify-center overflow-hidden pt-14 w-[85vw] lg:w-[31vw] lg:h-[35vh] h-[30vh]'>
              <img src="	https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg" className='hover:scale-105 duration-500' width={350} alt="" />
            </div>
            <div className='flex items-center'>
              <div>
                <div className='flex items-center'>
                  <div>
                    <h1 className='font-extrabold mt-5 text-base lg:text-[22px]'>My Future Project</h1>
                  </div>
                  <div className='mt-2'>
                    <div className='border-t ml-3 mr-3 border-[#EBECF3] opacity-40 inline-block w-[36vw] lg:w-[230px]'>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <span>
                      <a href="">
                        <svg className='text-gray-400 hover:text-white ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                      </a>
                    </span>
                  </div>
                </div>
                <div className='mt-3'>
                  <h1 className='text-[#0AE448] text-base'>HTML - Tailwind CSS  - Framer Motion - React</h1>
                </div>
                <div className='flex mt-3 items-center'>
                  <p className='text-lg text-[#EBECF3] opacity-80  '>A real-time coaching app for students learning to <br className='lg:flex hidden' /> paint. This app is my baby, designed and built on <br className='lg:flex hidden' /> my own 🌈</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:space-x-20 lg:space-y-0 space-y-16 px-6 lg:px-0 mt-14 flex-col lg:flex-row justify-center'>
          <div>
            <div className='bg-[#232323] flex justify-center overflow-hidden pt-14 w-[85vw] lg:w-[31vw] lg:h-[35vh] h-[30vh]'>
              <img src="	src\AllComponenents\Images\2023-12-14 (2).png" className='hover:scale-105 duration-500' width={350} alt="" />
            </div>
            <div className=''>
              <div className='flex items-center '>
                <div>
                  <h1 className='font-extrabold mt-5 text-base lg:text-[22px]'>Job Portal</h1>
                </div>
                <div className='mt-3'>
                  <div className='border-t ml-3 mr-3  border-[#EBECF3] opacity-40 inline-block w-[40vw] lg:w-[310px]' />
                </div>
                <div className='mt-3'>
                  <span>
                    <a href="https://github.com/rehan-adi/Job-Portal-Frontend">
                      <svg className='text-gray-400 hover:text-white ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-[#0AE448] text-sm'>React - Tailwind - Typescript - ShadCN - React-hook-form - zod</h1>
              </div>
              <div className='flex mt-3 items-center'>
                <p className='text-lg text-[#EBECF3] opacity-80  '>This is a Job Portal application. Job Seeker can look <br className='lg:flex hidden' /> for job and employer can post Job Listings. With<br className='lg:flex hidden' /> production grade code.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='bg-[#232323] flex justify-center overflow-hidden pt-14 w-[85vw] lg:w-[31vw] lg"h-[35vh] h-[33vh]'>
              <img src="	src\AllComponenents\Images\2023-12-14 (1).png" className='hover:scale-105 duration-500' width={350} alt="" />
            </div>
            <div >
              <div className='flex items-center'>
                <div>
                  <h1 className='font-extrabold mt-5 text-base lg:text-[22px]'>Blog Application</h1>
                </div>
                <div className='mt-3'>
                  <div className='border-t ml-3 mr-3  border-[#EBECF3] opacity-40 inline-block w-[23vw] lg:w-[240px]'></div>
                </div>
                <div className='mt-3'>
                  <span>
                    <a href="https://github.com/rehan-adi/Blog-Frontend">
                      <svg className='text-gray-400 hover:text-white ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-[#0AE448] text-sm'>React - Tailwind - Javascript - react-router-dom</h1>
              </div>
              <div className='flex mt-3 items-center'>
                <p className='text-lg text-[#EBECF3] opacity-80  '>This is a Blog Application, The UI is similler to X. This<br className='lg:flex hidden' />app have role based authentication and many<br className='lg:flex hidden' /> things.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Proojects