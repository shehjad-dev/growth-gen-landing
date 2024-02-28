"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import HeroGrowthGenSubImage from '@/assets/heroGrowthGenSubImage.svg';
import HeroMoneySubImage from '@/assets/heroMoneySubImage.svg';
import HeroUsersSubImage from '@/assets/heroUsersSubImage.svg';
import { useAnimate, motion, useAnimation } from "framer-motion";
import { AnimatedGradientBorder } from './AnimatedGradientBorder';

const HeroImg = () => {
    const [showAnimatedBorder, setShowAnimatedBorder] = useState(false);
    const [scope, animate] = useAnimate();
    const handleAnimation = async () => {
        //await animate(scope.current, { opacity: 1 })
        await animate("#hero-user-sub-image", { opacity: 1, scale: 1.1 });
        if (window.innerWidth < 768) {
            await animate("#hero-user-sub-image-mobile", { opacity: 1, scale: 1.1 });


        }
        //await animate("#hero-user-sub-image-mobile", { opacity: 1, scale: 1.1 });
        // await animate("#growth-gen-sub-image", { opacity: 1, scale: 1.1 });
        //await animate("#hero-money-sub-image", { opacity: 1, delay: 1000, });


        setShowAnimatedBorder(true);
        await animate("#hero-growth-gen-sub-image", { opacity: 1, scale: 1.1 });

        if (window.innerWidth < 768) {
            await animate("#hero-user-sub-image-mobile", { opacity: 0, scale: 1 }, { delay: 1 });

        }
        console.log("setShowAnimatedBorder: true");

        // Wait for 2 seconds with the animated border
        setTimeout(() => {
            // After 2 seconds, hide the animated border
            setShowAnimatedBorder(false);

            console.log("setShowAnimatedBorder: false");




            // Start the animation for the third image to become fully opaque
            // This is placed inside the timeout to ensure it starts after the animated border animation completes
            animate("#hero-money-sub-image", { opacity: 1 });
        }, 2000);
    }




    useEffect(() => {


        handleAnimation();
    }, [])
    return (
        <div ref={scope} className="flex flex-col items-center gap-[0.34rem] md:gap-[1rem] border-2 border-main-red-cta border-opacity-30 w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] rounded-full bg-[#FF000D]/10">

            <Image
                src={HeroUsersSubImage}
                alt="HeroUsersSubImage"
                className="md:inline-flex hidden"

                sizes="(max-width: 768px) 130px, 48.5px"
                /* sizes="(max-width: 768px) 130px, 48.5px, (min-width: 769px) 260px, 97px" */
                priority
                id="hero-user-sub-image"
                style={{ opacity: "0" }}

            />
            <Image
                src={HeroUsersSubImage}
                alt="HeroUsersSubImage"
                className="md:hidden flex"

                width={100}
                height={28.5}
                /* sizes="(max-width: 768px) 130px, 48.5px, (min-width: 769px) 260px, 97px" */
                priority
                id="hero-user-sub-image-mobile"
                style={{ opacity: "0" }}

            />


            <div id="hero-growth-gen-sub-image" style={{ opacity: "0" }} className='mt-[0.5rem]'>
                <AnimatedGradientBorder showAnimatedBorder={showAnimatedBorder}>
                    <Image
                        src={HeroGrowthGenSubImage}
                        alt="HeroGrowthGenSubImage"
                        className=""

                        sizes="(max-width: 768px) 130px, 48.5px"
                        /* sizes="(max-width: 768px) 130px, 48.5px, (min-width: 769px) 260px, 97px" */
                        priority


                    />
                </AnimatedGradientBorder>
            </div>



            <Image
                src={HeroMoneySubImage}
                alt="HeroMoneySubImage"
                className=""

                sizes="(max-width: 768px) 192px, 123px"
                /* sizes="(max-width: 768px) 192px, 123px, (min-width: 769px) 384px, 246px" */
                priority
                id="hero-money-sub-image"
                style={{ opacity: "0" }}

            />
        </div>

    )
}

export default HeroImg