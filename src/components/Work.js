import React from 'react';
import DashboardImg from '../assets/dashboard.png'
import stormImg from '../assets/storm.png'
import elixirImg from '../assets/elixir.png'
import creativeImg from '../assets/craetive.png'
import healhImg from '../assets/health.png'
import todoImg from '../assets/Todo.png'

const Work = () => {
    return (
        <div name='projects' className='flex justify-center'>
            <div className='flex justify-center  md:px-[320px] flex-col '>
            <div className='font-monterrat flex flex-col items-start p-4 '>
                <h1 className='text-4xl tracking-tight font-bold py-5 text-zinc-700 underline underline-offset-8 decoration-cyan-700'>Work</h1>
                <p className='text-2xl text-zinc-700'>Check out some of my Projects.</p>
            </div>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-[100px] '>
                <div className='h-full w-[400px] md:w-full rounded-md group shadow-lg shadow-slate-700'>
                    <img src={DashboardImg} alt='/' className='  object-contain h-[250px]   group-hover:opacity-40 : '></img>
                    <div className=' opacity-70 '>
                    <a href='https://instasell-dashboard.netlify.app/'>
                        <button className=' absolute opacity-0  group-hover:opacity-100 mt-[-120px] ml-[-50px] bg-slate-400 px-5 py-2 rounded-lg text-white'>View</button>

                    </a>
                    </div>
                    
                </div>
               <div className='h-full w-[400px] md:w-full rounded-md group shadow-lg shadow-slate-700'>
                    <img src={stormImg} alt='/' className='  object-contain h-[250px]   group-hover:opacity-40 : '></img>
                    <div className=' opacity-70 '>
                    <a href='https://abinvarghese.netlify.app/'>
                        <button className=' absolute opacity-0  group-hover:opacity-100 mt-[-120px] ml-[-50px] bg-slate-400 px-5 py-2 rounded-lg text-white'>View</button>

                    </a>
                    </div>
                    
                </div>
                <div className='h-full w-[400px] md:w-full rounded-md group shadow-lg shadow-slate-700'>
                    <img src={healhImg} alt='/' className='  object-contain h-[250px]   group-hover:opacity-40 : '></img>
                    <div className=' opacity-70 '>
                    <a href='https://health-system1.netlify.app/'>
                        <button className=' absolute opacity-0  group-hover:opacity-100 mt-[-120px] ml-[-50px] bg-slate-400 px-5 py-2 rounded-lg text-white'>View</button>

                    </a>
                    </div>
                    
                </div>
                <div className='h-full w-[400px] md:w-full rounded-md group shadow-lg shadow-slate-700'>
                    <img src={elixirImg} alt='/' className='  object-contain h-[250px]   group-hover:opacity-40 : '></img>
                    <div className=' opacity-70 '>
                    <a href='https://65283054dbaa8e5212cd2aad--profound-centaur-2d581e.netlify.app/'>
                        <button className=' absolute opacity-0  group-hover:opacity-100 mt-[-120px] ml-[-50px] bg-slate-400 px-5 py-2 rounded-lg text-white'>View</button>

                    </a>
                    </div>
                    
                </div>
               <div className='h-full w-[400px] md:w-full rounded-md group shadow-lg shadow-slate-700'>
                    <img src={todoImg} alt='/' className='  object-contain h-[250px]   group-hover:opacity-40 : '></img>
                    <div className=' opacity-70 '>
                    <a href='https://todolist-steel-xi.vercel.app/'>
                        <button className=' absolute opacity-0  group-hover:opacity-100 mt-[-120px] ml-[-50px] bg-slate-400 px-5 py-2 rounded-lg text-white'>View</button>

                    </a>
                    </div>
                    
                </div>
                <div className='h-full w-[400px] md:w-full rounded-md group shadow-lg shadow-slate-700'>
                    <img src={creativeImg} alt='/' className='  object-contain h-[250px]   group-hover:opacity-40 : '></img>
                    <div className=' opacity-70 '>
                    <a href='https://creatvise.netlify.app/'>
                        <button className=' absolute opacity-0  group-hover:opacity-100 mt-[-120px] ml-[-50px] bg-slate-400 px-5 py-2 rounded-lg text-white'>View</button>

                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Work;