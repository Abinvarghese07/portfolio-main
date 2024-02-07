import React from 'react';
import {FaJava} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {SiSpringboot} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {FaVuejs} from 'react-icons/fa';


const Skills = () => {
    return (
        <div name='about' className='flex justify-center md:px-[320px] mb-[60px]'>
            <div className='font-montserrat pt-[140px]'>
                <h1 className='text-4xl  tracking-tight font-bold text-zinc-700 underline underline-offset-8 decoration-cyan-700'>Tech Stack</h1>
                <div className='flex flex-col gap-9 md:grid md:grid-cols-3 md:gap-[60px] mt-[100px]  '>
                    <div className='flex flex-col items-center'>
                        <FaReact className='text-cyan-500 text-6xl md:text-[120px] '/>
                        <h1 className='text-2xl font-medium'>React</h1>
                    </div>
                      <div className='flex flex-col items-center'>
                        <FaNodeJs  className='text-green-500 text-6xl md:text-[120px] '/>
                        <h1 className='text-2xl font-medium'>NodeJS</h1>
                    </div>
                      <div className='flex flex-col items-center'>
                        <FaJava className='text-blue-200 text-6xl md:text-[120px]'/>
                        <h1 className='text-2xl font-medium'>Java</h1>
                    </div>
                      <div className='flex flex-col items-center'>
                        <SiTailwindcss  className='text-cyan-500 text-6xl md:text-[120px] '/>
                        <h1 className='text-2xl font-medium '>Tailwind</h1>
                    </div>
                      <div className='flex flex-col items-center'>
                        <FaVuejs  className='text-green-800 text-6xl md:text-[120px]'/>
                        <h1 className='text-2xl font-medium'>VueJS</h1>
                    </div>
                      <div className='flex flex-col items-center'>
                        <SiSpringboot className='text-green-600 text-6xl md:text-[120px]'/>
                        <h1 className='text-2xl font-medium'>SpringBoot</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;