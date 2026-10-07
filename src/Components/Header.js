import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
function Header() {
    function myFunction() {
        const element = document.getElementById("Portfolio");
        element.scrollIntoView({ behavior: "smooth" });
        Setopen(false)
    }  
    function myFunction1() {
        const element = document.getElementById("Results");
        element.scrollIntoView({ behavior: "smooth" });
        Setopen(false)
    }
    function myFunction2() {
        const element = document.getElementById("Process");
        element.scrollIntoView({ behavior: "smooth"});
        Setopen(false)
    }
    function myFunction3() {
        const element = document.getElementById("Plan");
        element.scrollIntoView({ behavior: "smooth" });
        Setopen(false)
    }
    function myFunction4() {
        const element = document.getElementById("GetinTouch");
        element.scrollIntoView({ behavior: "smooth",top:100 });
    }

    const [open, Setopen] = useState(false)

    // useEffect(() => {
    //     window.addEventListener("click", (e) => {
    //         if (e.target.id != "hide") {
    //             Setopen(false)
    //         }
    //     })
    // }, [])

    return (
        <>
            <div className='flex flex-col h-full items-center bg-[#fcc028] border-b border-black p-5 sticky top-0 z-50'>
                <div className='flex flex-row max-w-[950px] w-full items-center justify-between'>
                    <h1 className='text-black font-semibold  text-2xl'>Content Buck</h1>
                    <div className='hidden md:flex flex-row gap-x-10'>
                        <a onClick={() => myFunction()} className='text-black  text-md border-b border-[#fcc028] hover:border-black cursor-pointer'>Portfolio</a>
                        <a onClick={() => myFunction1()} className='text-black  text-md border-b border-[#fcc028] hover:border-black cursor-pointer'>Results</a>
                        <a onClick={() => myFunction2()} className='text-black  text-md border-b border-[#fcc028] hover:border-black cursor-pointer'>Process</a>
                        <a onClick={() => myFunction3()} className='text-black  text-md border-b border-[#fcc028] hover:border-black cursor-pointer'>Plan</a>
                    </div>
                    <button onClick={() => myFunction4()} className='hidden md:flex flex-row items-center justify-center bg-[#fcc028] text-black  text-md border-2 border-black group hover:bg-black  duration-300 rounded-3xl p-2 px-5 gap-x-3'>
                        <h1 className='group-hover:text-white duration-300'>Get in Touch</h1>
                        <FaArrowRight className='group-hover:text-gray-600 duration-300' />
                    </button>
                    {open ==false?<TiThMenu onClick={() => Setopen(true)} className='sm:flex md:hidden text-2xl' />:<MdCancel onClick={() => Setopen(false)} className='sm:flex md:hidden text-2xl'/>}
                </div>
            </div>


            {open == true ? <div className='sm:flex md:hidden flex-col w-full h-full items-center'>
                <div className='flex flex-col w-full h-full items-end justify-start z-50 fixed'>
                    <div className='flex flex-col h-full w-[50%] bg-[#fcc028] items-start gap-y-5 py-5'>
                        <a onClick={() => myFunction()} className='text-black  text-md  w-full border-b border-gray-600 hover:border-black px-3 cursor-pointer'>Portfolio</a>
                        <a onClick={() => myFunction1()} className='text-black  text-md w-full border-b border-gray-600 hover:border-black px-3 cursor-pointer'>Results</a>
                        <a onClick={() => myFunction2()} className='text-black  text-md w-full border-b border-gray-600 hover:border-black px-3 cursor-pointer'>Process</a>
                        <a onClick={() => myFunction3()} className='text-black  text-md w-full border-b border-gray-600 hover:border-black px-3 cursor-pointer'>Plan</a>
                    </div>                    
                </div>

            </div> : null}

        </>

    )
}

export default Header
