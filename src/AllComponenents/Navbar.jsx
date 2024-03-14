import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';
import { VscThreeBars, VscClose } from "react-icons/vsc";

function Navbar() {
  const textRef = useRef(null);
  const textRefr = useRef(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const Gsap = gsap.timeline();
    Gsap.fromTo(textRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2, ease: 'power1.inOut' });
  }, []);

  useEffect(() => {
    const Gsap = gsap.timeline();
    Gsap.fromTo(textRefr.current, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2, ease: 'power1.inOut', stagger: 0.5 });
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className=''>
      <div className='bg-black opacity-80 z-50 w-full fixed h-[85px] flex items-center lg:px-0 px-6 justify-between lg:justify-around '>
        <div to='home' ref={textRef}>
               <svg width="120" height="50" viewBox="0 0 176 72" xmlns="http://www.w3.org/2000/svg"><g class="logo_svg__ola"><path fill="#ccf381" d="M35.671 35.516l.001.206c.004 9.6-8.028 17.638-17.633 17.638C8.3 53.36.4 45.463.4 35.722c0-8.933 7.228-16.845 16.153-17.563 4.786-.385 9.686 1.239 13.264 4.45 3.617 3.248 5.793 8.046 5.854 12.907zm-17.632 8.71c4.504 0 8.172-3.667 8.172-8.172 0-4.51-3.668-8.172-8.172-8.172a8.176 8.176 0 00-8.172 8.172c0 4.505 3.662 8.172 8.172 8.172z" class="logo_svg__o"></path><path fill="#ccf381" d="M38.626-.001h10.975v52.445H38.626z" class="logo_svg__l1"></path><path fill="#0AE448" d="M88.015 18.996v33.448H77.301v-4.508c-1.894 3.463-5.814 5.423-10.322 5.423-8.558 0-14.764-7.252-14.764-17.639s6.206-17.639 14.764-17.639c4.508 0 8.428 1.96 10.322 5.422v-4.507zM62.196 36.201c0 5.149 2.892 8.464 7.618 8.464 4.726 0 7.618-3.315 7.618-8.464 0-5.149-2.892-8.464-7.618-8.464-4.726 0-7.618 3.315-7.618 8.464z" class="logo_svg__a"></path></g><path fill="#ccf381" d="M107.492 18.127c10.512-.738 19.271 7.572 19.271 17.927 0 6.772-3.744 12.667-9.276 15.73-.612.339-1.27.58-1.928.82a5.572 5.572 0 00-.991.474 5.835 5.835 0 00-2.847 5.017c0 1.385.482 2.655 1.287 3.657.138.175.289.343.45.503a5.954 5.954 0 011.323 3.753 5.994 5.994 0 01-6.653 5.955c-2.685-.288-4.893-2.416-5.268-5.091a5.978 5.978 0 011.262-4.617c.161-.16.312-.328.45-.503a5.816 5.816 0 001.287-3.657 5.836 5.836 0 00-3.839-5.491c-.647-.235-1.295-.472-1.898-.804-5.861-3.232-9.724-9.64-9.268-16.906.559-8.903 7.739-16.142 16.638-16.767zm1.298 26.1c4.505 0 8.173-3.668 8.173-8.173 0-4.51-3.668-8.174-8.173-8.174-4.508 0-8.173 3.665-8.173 8.174 0 4.505 3.665 8.173 8.173 8.173z" class="logo_svg__sauce__drip"></path><g class="logo_svg__lu"><path fill="#ccf381" d="M129.566-.001h10.975v52.445h-10.975z" class="logo_svg__l2"></path><path fill="#0AE448" d="M144.33 18.996h10.976v18.88c0 3.789 1.633 5.683 4.835 5.683 3.2 0 4.834-1.894 4.834-5.683v-18.88h10.975v20.448c0 8.689-5.814 13.915-15.81 13.915-9.995 0-15.81-5.226-15.81-13.915z" class="logo_svg__u"></path></g></svg>
        </div>
        <div className='hidden lg:flex'>
          <ul className='flex text-gray-400 space-x-16'>
            <Link to='home' spy={true} offset={0} duration={2000} smooth={true}>
              <li className='relative group'>
                <span className='group-hover:border-b-2 border-[#0AE448] cursor-pointer underline-offset-[6px] group-hover:mt-1'>Home</span>
              </li>
            </Link>
            <Link to='about' spy={true} offset={0} duration={2000} smooth={true}>
              <li className='relative group'>
                <span className='group-hover:border-b-2 border-[#0AE448] cursor-pointer underline-offset-[6px] group-hover:mt-1'>About</span>
              </li>
            </Link>
            <Link to='projects' spy={true} offset={0} duration={2000} smooth={true}>
              <li className='relative group'>
                <span className='group-hover:border-b-2 border-[#0AE448] cursor-pointer underline-offset-[6px] group-hover:mt-1'>Project</span>
              </li>
            </Link>
            <Link to='contact' smooth={true} spy={true} offset={0} duration={2000} >
              <li className='relative group'>
                <span className='group-hover:border-b-2 border-[#0AE448] cursor-pointer underline-offset-[6px] group-hover:mt-1'>Contact</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className='lg:hidden flex'>
          <span onClick={toggleSidebar}><VscThreeBars className='text-white text-3xl' /></span>
        </div>
        {sidebarVisible && (
          <div className='lg:hidden absolute top-0 left-0 w-full h-screen transition-transform duration-300 transform bg-black z-50 flex flex-col'>
           <div className='w-full flex h-[85px] items-center  justify-between px-6'>
           <div to='home' ref={textRef}>
          <svg width="120" height="50" viewBox="0 0 176 72" xmlns="http://www.w3.org/2000/svg"><g class="logo_svg__ola"><path fill="#4831d4" d="M35.671 35.516l.001.206c.004 9.6-8.028 17.638-17.633 17.638C8.3 53.36.4 45.463.4 35.722c0-8.933 7.228-16.845 16.153-17.563 4.786-.385 9.686 1.239 13.264 4.45 3.617 3.248 5.793 8.046 5.854 12.907zm-17.632 8.71c4.504 0 8.172-3.667 8.172-8.172 0-4.51-3.668-8.172-8.172-8.172a8.176 8.176 0 00-8.172 8.172c0 4.505 3.662 8.172 8.172 8.172z" class="logo_svg__o"></path><path fill="#4831d4" d="M38.626-.001h10.975v52.445H38.626z" class="logo_svg__l1"></path><path fill="#4831d4" d="M88.015 18.996v33.448H77.301v-4.508c-1.894 3.463-5.814 5.423-10.322 5.423-8.558 0-14.764-7.252-14.764-17.639s6.206-17.639 14.764-17.639c4.508 0 8.428 1.96 10.322 5.422v-4.507zM62.196 36.201c0 5.149 2.892 8.464 7.618 8.464 4.726 0 7.618-3.315 7.618-8.464 0-5.149-2.892-8.464-7.618-8.464-4.726 0-7.618 3.315-7.618 8.464z" class="logo_svg__a"></path></g><path fill="#4831d4" d="M107.492 18.127c10.512-.738 19.271 7.572 19.271 17.927 0 6.772-3.744 12.667-9.276 15.73-.612.339-1.27.58-1.928.82a5.572 5.572 0 00-.991.474 5.835 5.835 0 00-2.847 5.017c0 1.385.482 2.655 1.287 3.657.138.175.289.343.45.503a5.954 5.954 0 011.323 3.753 5.994 5.994 0 01-6.653 5.955c-2.685-.288-4.893-2.416-5.268-5.091a5.978 5.978 0 011.262-4.617c.161-.16.312-.328.45-.503a5.816 5.816 0 001.287-3.657 5.836 5.836 0 00-3.839-5.491c-.647-.235-1.295-.472-1.898-.804-5.861-3.232-9.724-9.64-9.268-16.906.559-8.903 7.739-16.142 16.638-16.767zm1.298 26.1c4.505 0 8.173-3.668 8.173-8.173 0-4.51-3.668-8.174-8.173-8.174-4.508 0-8.173 3.665-8.173 8.174 0 4.505 3.665 8.173 8.173 8.173z" class="logo_svg__sauce__drip"></path><g class="logo_svg__lu"><path fill="#4831d4" d="M129.566-.001h10.975v52.445h-10.975z" class="logo_svg__l2"></path><path fill="#4831d4" d="M144.33 18.996h10.976v18.88c0 3.789 1.633 5.683 4.835 5.683 3.2 0 4.834-1.894 4.834-5.683v-18.88h10.975v20.448c0 8.689-5.814 13.915-15.81 13.915-9.995 0-15.81-5.226-15.81-13.915z" class="logo_svg__u"></path></g></svg>
        </div>
        <div className="text-white text-4xl">
              <span onClick={closeSidebar}  className="cursor-pointer "><VscClose className='text-[#4831d4] rotate-12'/></span>
            </div>
           </div>
            <ul className='text-white px-12 text-xl absolute top-40 space-y-8'>
              <li><Link to='home' spy={true} offset={0} duration={2000} smooth={true}>Home</Link></li>
              <li><Link to='about' spy={true} offset={0} duration={2000} smooth={true}>About</Link></li>
              <li><Link to='projects' spy={true} offset={0} duration={2000} smooth={true}>Projects</Link></li>
              <li><Link to='contact' spy={true} offset={0} duration={2000} smooth={true}>Contact</Link></li>
            </ul>
            <div className='text-white px-12 flex flex-col justify-center gap-5 absolute bottom-56'>
                <h1 className='tracking-widest font-medium opacity-90 text-2xl'>SAY HELLO</h1>
                <h2 className='text-lg'>rehanalire52@gmail.com</h2>
                <h2 className='text-lg'>@aadeel_rehan</h2>
            </div>
            <div className='space-x-6 flex px-12 absolute bottom-16 text-2xl' ref={textRefr}>
          <span>
          <a href="https://www.linkedin.com/in/md-rehan-89030b289/">
              <svg className='text-gray-400 hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
            </a>
          </span>
          <span>
          <a href="https://github.com/rehan-adi">
              <svg className='text-gray-400 hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
            </a>
          </span>
          <span>
          <a href="">
              <svg className='text-gray-400 hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path></svg>
            </a>
          </span>
          <span>
          <a href="">
              <svg stroke="currentColor" fill="currentColor" className='text-gray-400 hover:text-[#0AE448] ' stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z"></path></svg>
            </a>
          </span>
        </div>
          </div>
        )}
        <div className='lg:flex space-x-4 hidden text-sm' ref={textRefr}>
          <span>
          <a href="https://www.linkedin.com/in/md-rehan-89030b289/">
              <svg className='text-gray-400 hover:text-[#0AE448] ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
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
          <span>
          <a href="">
              <svg stroke="currentColor" fill="currentColor" className='text-gray-400 hover:text-[#0AE448] ' stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="1.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z"></path></svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
