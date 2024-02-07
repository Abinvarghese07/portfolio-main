import React from 'react';
import {FaLongArrowAltRight} from 'react-icons/fa';


const Home = () => {
    return (
        <div name='home' className=' h-full w-full bg-white font-montserrat flex justify-center mt-[60px]'>
            <div className='px-[60px] md:px-[120px]  md:py-[50px] lg:py-[100px] text-slate-300 max-w-[1000px] max-h-[600px] flex flex-col items-center shadow-lg shadow-indigo-900 rounded-lg' >
                <h1 className='text-2xl md:text-4xl font-semibold p-2 underline underline-offset-8 text-zinc-700 '>Hello</h1>
                <h2 className='text-[25px] md:text-5xl font-semibold p-2 text-cyan-700'>I'm Abin Varghese</h2>
                <p className='text-normal md:text-2xl text-slate-700 max-w-[700px]'>Im a passionate Full-Stack Developer.Proven track record in delivering seamless user experiences and building robust back-end systems. Committed to continuous learning and staying ahead of industry trends. Let's collaborate to bring innovative ideas to life!</p>
                <div className='p-4  '>
                    <button className='px-5 py-2 flex gap-3 group items-center bg-cyan-700 text-white rounded-2xl hover:bg-slate-700'>Get in Touch
                    <span className=' group-hover:rotate-90 duration-300 '> <FaLongArrowAltRight size={20} className='group-hover:text-red-700'/> </span>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Home;