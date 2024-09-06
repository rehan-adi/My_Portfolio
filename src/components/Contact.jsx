import React from 'react'
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div id='contact' className='min-h-screen w-full bg-[#111] flex text-white justify-center items-center '>
            <div className='ml-6 lg:ml-0'>
                <div className='flex justify-center items-center'>
                    <h1 className='lg:text-[100px] text-6xl tracking-wider font-extrabold'>Contact<span className='text-[#0AE448]'>.</span></h1>
                </div>
                <div className='flex justify-center mt-10'>
                    <p className='text-center text-[#EBECF3] mb-6 mt-1 opacity-80 font-normal text-lg '>Send me a email if you want to connect! You can also find me on <span className='text-[#0AE448]'> <a href="https://www.linkedin.com/in/md-rehan-89030b289/">Linkedin</a></span> or <br className='lg:flex hidden'/> <span className='text-[#0AE448]'> <a href="https://github.com/rehan-adi">GitHub</a></span> for watching my more projects.</p>
                </div>
                <div className='flex  justify-center'>
                    <p className='lg:text-[22px] text-lg hover:text-[#0AE448]'> <span><MdEmail className='inline-block lg:text-2xl text-xl mr-2 ' /></span>  rehanalire52@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact