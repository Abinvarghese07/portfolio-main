import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {AiOutlineRedEnvelope} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseCircleOutline} from 'react-icons/io5';
import { useState } from 'react';
import {Link} from 'react-scroll';




const Navbar = () => {
     const [isOpen, setIsOpen] = useState (false);

    const toggleNav = () => {
    setIsOpen (!isOpen);
    };
    return (
        <div className=' p-4  w-full  bg-slate-700 border-b border-slate-200'>
            <nav className='font-montserrat flex justify-around items-center'>
                <h1 className='  text-2xl font-medium text-slate-200'>Abin Varghese</h1>
                <ul className='hidden md:flex gap-7 text-slate-300'>
                   

                     <li className='text-xl font hover:text-white hover:underline hover:underline-offset-4 hover:decoration-slate-200'><Link  to="home"  smooth={true} offset={50} duration={500} > Home</Link></li>
                    <li className='text-xl font hover:text-white hover:underline hover:underline-offset-4 hover:decoration-slate-200'><Link to="projects" smooth={true} offset={50} duration={500}>Projects</Link></li>
                    <li className='text-xl font hover:text-white hover:underline hover:underline-offset-4 hover:decoration-slate-200'><Link  to="about"  smooth={true} offset={50} duration={500} >About</Link></li>
                    <li className='text-xl font hover:text-white hover:underline hover:underline-offset-4 hover:decoration-slate-200'><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>

                    
                </ul>
                <div className='md:hidden text-white text-2xl flex items-center' onClick={toggleNav}>
                {!isOpen ? <GiHamburgerMenu/> : <IoCloseCircleOutline/> }
                </div>
            </nav>
             <ul className={!isOpen ? 'hidden' : ' bg-neutral-300 w-full p-8 font-body text-center rounded-md mt-[30px]'}>
                
                    <li className='text-xl text-white hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link  to="features"  smooth={true} offset={50} duration={500} > Home</Link></li>
                    <li className='text-xl text-white hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link to="benefits" smooth={true} offset={50} duration={500}>Projects</Link></li>
                    <li className='text-xl text-white hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link  to="demo"  smooth={true} offset={50} duration={500} >About</Link></li>
                    <li className='text-xl text-white hover:underline hover:underline-offset-4 border-b border-slate-700 p-1 hover:decoration-red-500'><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>

            </ul>

            <div className='hidden fixed top-[35%] left-0 lg:flex'>
                <ul className='flex flex-col gap-4 '>
                    <li className='bg-slate-400 px-3 py-2 rounded-md ml-[-100px] hover:ml-[-5px] duration-300 w-[170px]'>
                        <a  className='flex items-center  justify-between text-2xl text-white' href='https://www.linkedin.com/in/abin-varghese-7aa708210/'>LinkedIn <FaLinkedin className='text-blue-600' size={30}/> </a>
                    </li>
                    <li className='bg-slate-400 px-3 py-2 rounded-md ml-[-100px] hover:ml-[-5px] duration-300 w-[170px]'>
                        <a className='flex items-center justify-between  text-2xl text-white' href='https://github.com/Abinvarghese07'>Github <FaGithub className='text-slate-800' size={30}/> </a>
                    </li>
                    <li className='bg-slate-400 px-3 py-2 rounded-md ml-[-100px] hover:ml-[-5px] duration-300 w-[170px]'>
                        <a className='flex items-center justify-between text-2xl text-white' href='mailto:abinsvarghese18@gmail.com'>Gmail <SiGmail className='text-red-600' size={30}/> </a>
                    </li>
                    <li className='bg-slate-400 px-3 py-2 rounded-md ml-[-100px] hover:ml-[-5px] duration-300 w-[170px]'>
                        <a className='flex items-center justify-between text-2xl text-white' href='https://drive.google.com/file/d/13V3kXXlJI-orVIAReM_ectPlrwrVi-MS/view?usp=sharing'>Resume <AiOutlineRedEnvelope className='text-slate-600' size={30}/> </a>
                    </li>
                    
                </ul>

            </div>
            
        </div>
    );
};

export default Navbar;