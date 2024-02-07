import React from 'react';

const Contact = () => {
    return (
        <div  name='contact' className='md:px-[320px]  mt-[80px] flex-col '>
                <h1 className='text-center md:text-start text-4xl tracking-tight font-bold mt-5 text-zinc-700 underline underline-offset-8 decoration-cyan-700'>Get in Touch</h1>

            <div className='flex justify-center font-montserrat'>
                <form  action="https://getform.io/f/5e4f9740-dc38-4aed-804a-e3e88adf2656"  method='POST' className='bg-gray-400 mt-[90px]  flex flex-col gap-7 p-8  w-[380px] h-[440px] text-slate-600  mb-10 shadow-lg shadow-slate-700 rounded-2xl '>
                <input placeholder='Name' className='px-6 py-2 rounded-lg' type='text' name='name'></input>
                <input placeholder='Email Address' className='px-6 py-2 rounded-lg' type='email' name='email'></input>
                <textarea rows={5} cols={4} className='rounded-xl px-6 py-2' placeholder='Message' name='message'></textarea>
                <div>
                    <button className='py-2 px-6 bg-slate-600 text-white  rounded-2xl text-[16px] font-medium hover:bg-orange-100 hover:text-slate-900' >Let's get in touch</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;