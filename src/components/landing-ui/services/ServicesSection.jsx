import React, { useState, useEffect, useRef } from 'react'
import { HiOutlineChip, HiOutlineCollection, HiOutlineBeaker, HiOutlineShare, HiOutlineViewGridAdd, HiOutlineFingerPrint } from 'react-icons/hi';
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/atoms/Spotlight';


const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

const ServicesSection = () => {
    const myServicesData = [
        {
            title: "Chatbots",
            description: "24/7 Conversational Marketing Magic - Engage leads, answer questions, and qualify prospects around the clock.",
            icon: <HiOutlineChip size={40} />
        },
        {
            title: "Landing Pages",
            description: "High-Converting Conversion Funnels - Design stunning, targeted landing pages to capture leads and boost conversions.",
            icon: <HiOutlineBeaker size={40} />

        },
        {
            title: "Custom Automations",
            description: "Streamline Workflows & Save Time - Automate repetitive tasks and free up your team for what matters most.",
            icon: <HiOutlineShare size={40} />

        },
        {
            title: "Custom Solutions",
            description: "Tailor-Made Solutions for Your Needs - Web apps, Mobile apps(android & ios), Custom CRMs, Dashboards and many more.",
            icon: <HiOutlineFingerPrint size={40} />

        },
        {
            title: "SMMA",
            description: "Grow Your Brand & Reach - Expertly manage your social media presence and generate leads through targeted advertising campaigns.",
            icon: <HiOutlineViewGridAdd size={40} />

        },
    ]

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // default is the viewport
                threshold: 0.1, // percentage of target's visibility the observer's callback should be executed
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionRef]);


    return (
        <div className='text-white pt-[200px] pb-[100px]'>
            <Spotlight
                className="top-40 left-0 md:left-60 md:top-[50vh]"
                fill="white"
            />
            <div className='container mx-auto flex flex-col items-center'>
                <motion.h1
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl md:text-5xl max-w-[600px] md:text-center text-center"
                >
                    Solutions that scale your business
                </motion.h1>

                <motion.div
                    ref={sectionRef}
                    variants={gridContainerVariants}
                    initial="hidden"
                    /* animate="show" */
                    animate={isVisible ? "show" : "hidden"}
                    className='flex flex-wrap gap-[60px]  items-center justify-center mt-[3rem]'>
                    {myServicesData.map((item, index) => (
                        <motion.div
                            key={index + 1}
                            variants={gridSquareVariants}
                            /* variants={gridChildVariants} */
                            className='flex flex-col items-center'>
                            <div className='w-[150px] h-[150px] shadow-redShadow z-[10] bg-main-red-cta/10 border-b-2 border-main-red-cta/75 backdrop-blur-sm flex items-center justify-center rounded-xl'>
                                {item?.icon}
                            </div>
                            <h3 className='text-xl font-medium mt-[1rem] mb-[0.3rem] z-[20]'>{item?.title}</h3>
                            <p className='max-w-[300px] text-center text-[0.95rem] text-white/75'>{item?.description}</p>
                        </motion.div>
                    ))}



                </motion.div>


            </div>

        </div>
    )
}

export default ServicesSection