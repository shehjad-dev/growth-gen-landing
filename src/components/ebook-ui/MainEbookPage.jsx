"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import ebookCoverHeroImg from '@/assets/ebookCoverHeroImg.png';
import GrowthGenEbookCover from '@/assets/GrowthGenEbookCover.png';
import EbookPersonImg from '@/assets/EbookPersonImg.png';
import { HiOutlineCloudDownload } from "react-icons/hi";
import Book3D from './Book3D';
import Navbar from '../atoms/Navbar';
import { motion } from 'framer-motion';



const MainEbookPage = () => {
    const downloadEbookRef = useRef(null);
    let autoDownloadLimitReached = false;
    useEffect(() => {
        if (!autoDownloadLimitReached) {
            if (downloadEbookRef.current) {
                downloadEbookRef.current.click();
            }
            return;
        }
        autoDownloadLimitReached = true

    }, [])


    return (
        <div className='bg-main-dark-bg'>
            <Navbar />
            <div className='bg-main-dark-bg text-white h-[90vh] flex md:flex-row flex-col-reverse  items-center justify-center gap-[4rem]'>
                <div className='flex flex-col gap-[2rem] md:items-start items-center'>
                    <div>

                        <h1 className="text-2xl md:text-6xl max-w-[fit-content] md:max-w-[600px] md:text-left text-center px-[5px] md:px-[0px]">Get 20% more clients
                            in the next quarter</h1>

                        <p className="text-[1.1rem] my-[0.4rem] md:text-left text-center">(3 months)</p>
                    </div>

                    <Link target='_blank' href='assets/Growthgenai-Ebook-v1.pdf' download ref={downloadEbookRef}>
                        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#E50914_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                </span>
                            </span>
                            <div className="relative px-[1.5rem] py-[0.6rem] flex space-x-2 items-center justify-center z-10 rounded-full bg-main-red-cta hover:bg-main-red-cta/70 ring-1 ring-white/10 transition-opacity duration-500">
                                <span className="text-[1rem] tracking-wide text-center flex items-center justify-center gap-[1rem] w-[250px]">
                                    <span>Download Ebook</span>
                                    <HiOutlineCloudDownload size={25} className='animate-bounce' />
                                </span>

                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-main-red-cta to-red-500/0 transition-opacity duration-500 group-hover:opacity-40">
                            </span>
                        </button>
                    </Link>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className=' w-[91vw] md:w-[420px] relative h-[47vh] md:h-[520px]'>
                    <div className='bg-[#263137] rounded-md w-[40px] h-[30px] rotate-45 absolute top-[7px] md:top-[9px] left-[2px] md:left-[6px] border-2 border-slate-800'></div>
                    <div className='bg-[#263137] rounded-md w-[40px] h-[30px] rotate-45 absolute bottom-[7px] md:bottom-[8px] right-[2px] md:right-[8px] border-2 border-slate-800'></div>
                    <div className='flex flex-col justify-between absolute bottom-0 left-0 p-[2rem] w-[88vw] md:w-[400px] h-[46vh] md:h-[500px] bg-[#263137] border-2 border-slate-800 border-t-transparent border-r-transparent rounded-md'></div>
                    <div className='absolute top-0 right-0 p-[2rem] w-[88vw] md:w-[400px] h-[46vh] md:h-[500px] bg-main-dark-bg border-2 border-slate-800 rounded-md'>
                        <div className='relative h-[100%] flex flex-col justify-between '>
                            <Image
                                src={EbookPersonImg}
                                alt="HeroUsersSubImage"

                                priority
                                id="hero-ebook-cover-img"
                                className='absolute bottom-0 right-[-120px]'

                            />
                            <p className='text-2xl'><span className='text-main-red-cta'>2X</span> Growth</p>

                            <div className='flex flex-col gap-[0.6rem]'>
                                <h4 className='text-2xl'><span className='text-main-red-cta'>Fitness <br /> Influencers</span> <br />Guideline.</h4>
                                <div className='bg-main-red-cta rounded-md h-[4px] w-[70%]' />
                                <p className='text-lg'>Automation, Website <br /> & Lead Gen</p>
                            </div>
                        </div>


                    </div>
                </motion.div>



            </div>


        </div >

    )
}

export default MainEbookPage