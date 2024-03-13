"use client"

import React, { useEffect, useState, useRef } from 'react'
import Image from "next/image";
import HeroGrowthGenSubImage from '@/assets/heroGrowthGenSubImage2.svg';
import HeroMoneySubImage from '@/assets/heroMoneySubImage.svg';
import HeroUsersSubImage from '@/assets/heroUsersSubImage.svg';
import { useAnimate, motion, useAnimation } from "framer-motion";
import { AnimatedGradientBorder } from './AnimatedGradientBorder';

const MobileHeroImg = () => {
    const heroGrowthGenSubImageRef = useRef(null);
    const [showAnimatedBorder, setShowAnimatedBorder] = useState(false);
    const [scope, animate] = useAnimate();
    const handleAnimation = async () => {
        //await animate(scope.current, { opacity: 1 })
        await animate("#hero-user-sub-image", { opacity: 1, scale: 1.1 });




        setShowAnimatedBorder(true);
        await animate("#hero-growth-gen-sub-image", { opacity: 1, scale: 1.1 });

        console.log("setShowAnimatedBorder: true");

        setTimeout(() => {
            setShowAnimatedBorder(false);

            console.log("setShowAnimatedBorder: false");




            animate("#hero-money-sub-image", { opacity: 1, y: -100 });
        }, 2000);
    }




    useEffect(() => {


        handleAnimation();
    }, [])
    return (
        <div ref={scope} className="md:mb-0 mb-[1rem] md:pt-0 pt-[0px] flex flex-col items-center justify-center gap-[0.34rem] md:gap-[1rem] border-2 border-main-red-cta border-opacity-30 w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] rounded-full bg-[#FF000D]/10">

            <Image
                src={HeroUsersSubImage}
                alt="HeroUsersSubImage"
                className="md:hidden flex"

                width={100}
                height={28.5}
                priority
                id="hero-user-sub-image"
                style={{ opacity: "0" }}

            />


            <div ref={heroGrowthGenSubImageRef} id="hero-growth-gen-sub-image" style={{ opacity: "0" }}
                className='mt-[0.5rem]'
            >
                <AnimatedGradientBorder showAnimatedBorder={showAnimatedBorder}>
                    <Image
                        src={HeroGrowthGenSubImage}
                        alt="HeroGrowthGenSubImage"
                        className=""
                        width={120}
                        height={38.5}
                        priority
                    />
                </AnimatedGradientBorder>
            </div>

            <div
                id="hero-money-sub-image"
                style={{ opacity: "0" }}
                className="rounded-xl w-[300px]  bg-main-dark-bg flex align-center justify-center"
            >
                <Image
                    src={HeroMoneySubImage}
                    alt="HeroMoneySubImage"
                    /* className="rounded-xl" */
                    width={172}
                    height={172}
                    /* sizes="(max-width: 768px) 152px, 123px" */
                    priority
                /* id="hero-money-sub-image"
                style={{ opacity: "0" }} */

                />
            </div>
        </div>

    )
}

export default MobileHeroImg