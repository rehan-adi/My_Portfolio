import React from 'react'
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div id='contact' className=' h-[100vh]  lg:h-[110vh] bg-[#111] flex text-white justify-center items-center '>
            <div>
                <div className='flex justify-center items-center'>
                    <h1 className='lg:text-[100px] text-7xl tracking-wider font-extrabold'>Contact<span className='text-[#0AE448]'>.</span></h1>
                </div>
                <div className='flex justify-center mt-10'>
                    <p className='text-center text-[#EBECF3] mb-6 mt-1 lg:px-0 px-4 opacity-80 font-normal text-lg '>Send me a email if you want to connect! You can also find me on <span className='text-[#0AE448]'> <a href="https://www.linkedin.com/in/md-rehan-89030b289/">Linkedin</a></span> or <br className='lg:flex hidden'/> <span className='text-[#0AE448]'> <a href="https://github.com/">GitHub</a></span> for watching my more projects.</p>
                </div>
                <div className='flex  justify-center'>
                    <p className='text-[22px] hover:text-[#0AE448]'> <span><MdEmail className='inline-block text-2xl mr-2 ' /></span>  rehanalire52@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact