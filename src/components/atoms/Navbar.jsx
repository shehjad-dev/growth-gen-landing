import React from 'react'
import Image from "next/image";
//import MainLogo from '@/assets/growth-gen-ai-main-logo.svg'
import MainLogo from '@/assets/growthGenAiWhiteLogo.svg'
import Link from 'next/link';

const Navbar = ({ setDisplayBookingPopup }) => {
    return (
        <div className='bg-main-dark-bg sticky top-0 z-[100]'>
            <div className='container mx-auto md:h-fit h-[70px] md:px-0 px-[1rem]  flex items-center justify-between text-white py-[0.1rem] md:py-[1.5rem]'>
                <Link href={"/"} className='md:inline-flex hidden'>
                    <Image
                        src={MainLogo}
                        alt="Growth Gen Ai Logo"
                        className=""
                        width={230}
                        height={50}
                        priority
                    />
                </Link>
                <Link href={"/"} className='md:hidden inline-flex'>
                    <Image
                        src={MainLogo}
                        alt="Growth Gen Ai Logo"
                        className=""
                        width={150}
                        height={35}
                        priority
                    />
                </Link>

                <ul className='flex items-center gap-[2.5rem]'>
                    <li>
                        <Link href={"/#pricing"} className=' tracking-wide hidden md:inline-flex'>Pricing</Link>
                    </li>
                    {/* <li>
                        <Link href="/testimonials" className=' tracking-wide'>Testimonials</Link>
                    </li> */}
                    <li>
                        {/* <Link
                            href="/get-started"
                            className='bg-main-red-cta tracking-wide text-white rounded-sm py-[0.6rem] px-[1.5rem]'>
                            Get Started
                        </Link> */}

                        {/* <button class="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                            <span class="absolute inset-0 overflow-hidden rounded-full">
                                <span class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                </span>
                            </span>
                            <div class="relative px-[1.5rem] py-[0.6rem]  flex space-x-2 items-center z-10 rounded-full bg-zinc-950  ring-1 ring-white/10 ">
                                <span className='text-[1rem]'>Get Started</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 8.75L14.25 12L10.75 15.25"></path></svg>
                            </div>
                            <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-main-red-cta to-red-500/0 transition-opacity duration-500 group-hover:opacity-40">
                            </span>
                        </button> */}
                        <button
                            onClick={() => setDisplayBookingPopup(true)}
                            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#E50914_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                </span>
                            </span>
                            <div className="relative px-[1.5rem] py-[0.6rem] flex space-x-2 items-center z-10 rounded-full bg-main-dark-bg hover:bg-slate-800 ring-1 ring-white/10">
                                <span className="text-sm md:text-[1rem] tracking-wide">Get Started</span>

                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-main-red-cta to-red-500/0 transition-opacity duration-500 group-hover:opacity-40">
                            </span>
                        </button>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar