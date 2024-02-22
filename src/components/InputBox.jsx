"use client";
import React from 'react'

const InputBox = () => {
    return (
        <div className="mt-[0.5rem] flex md:flex-row flex-col gap-[1rem]">
            <input
                placeholder='Your Email'
                className="h-[45px] text-white px-[1.4rem] bg-transparent border-[2px] border-slate-700 rounded-[40px] focus:border-slate-500 focus:outline-none" />
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#E50914_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    </span>
                </span>
                <div className="relative px-[1.5rem] py-[0.6rem] flex space-x-2 items-center z-10 rounded-full bg-main-red-cta hover:bg-main-red-cta/70 ring-1 ring-white/10 transition-opacity duration-500">
                    <span className="text-[1rem] tracking-wide">Book Next Slot</span>

                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-main-red-cta to-red-500/0 transition-opacity duration-500 group-hover:opacity-40">
                </span>
            </button>
        </div>
    )
}

export default InputBox