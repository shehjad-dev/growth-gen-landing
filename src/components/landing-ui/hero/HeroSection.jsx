import React from 'react'
import InputBox from './InputBox'
import HeroImg from './HeroImg'
import MobileHeroImg from './MobileHeroImg'

const HeroSection = () => {
    return (
        <div className="text-white h-[80vh] md:h-[600px] flex items-center">
            <div className="container mx-auto flex md:flex-row flex-col-reverse items-center gap-[2rem] md:justify-between md:px-0 px-[20px]">
                <div>
                    <div>
                        <h1 className="text-2xl md:text-6xl max-w-[600px] md:text-left text-center">Get 20% more clients
                            in the next quarter</h1>

                        <p className="text-[1.1rem] my-[0.4rem] md:text-left text-center">(3 months)</p>
                    </div>


                    <div className="py-[1.4rem]">
                        <div className="flex items-center md:justify-start justify-center gap-[1rem]">
                            <span className="flex h-4 w-4 top-0 right-0 -mr-1 relative items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main-red-cta opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-main-red-cta"></span>
                            </span>
                            <p>Only <span className="text-main-red-cta">3</span> Spots left</p>
                        </div>

                        <InputBox />

                    </div>
                </div>

                <div className="md:inline-flex hidden">
                    <HeroImg />
                </div>
                <div className="md:hidden inline-flex">
                    <MobileHeroImg />
                </div>
            </div>
        </div>
    )
}

export default HeroSection