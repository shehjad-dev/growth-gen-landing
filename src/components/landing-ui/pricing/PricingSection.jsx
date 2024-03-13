import React, { useState, useEffect, useRef } from 'react'
import { useInView } from "framer-motion"
import { motion } from 'framer-motion'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { Spotlight } from '@/components/atoms/Spotlight'



const pricingData = [
    {
        title: 'Launch Pad',
        setupFee: '1500',
        monthlyFee: '150',
        highestPriority: false,
        sellingPoints: [
            {
                title: "Chatbots(QnA)",
                details: "",
            },
            {
                title: "Chatbots Integrations (whatsapp, website and more)",
                details: "",
            },
            {
                title: "Landing Page (SEO + Convertible)",
                details: "",
            },
            {
                title: "2 monthly meetings with Project Manager",
                details: "",
            },
            {
                title: "Priority Support (Whatsapp)",
                details: "",
            },

        ]
    },
    {
        title: 'Growth Engine',
        setupFee: '2500',
        monthlyFee: '300',
        highestPriority: false,
        previousPrice: '3200',

        sellingPoints: [
            {
                title: "Basic Chatbots (QnA + Support)",
                details: "",
            },
            {
                title: "Appointment Setter Chatbot",
                details: "",
            },

            {
                title: "Custom Automations (3 Custom Automations and Integrations)",
                details: "",
            },
            {
                title: "Landing Page (SEO + Convertible)",
                details: "",
            },
            {
                title: "Branding (Logo, Brand, Moto)",
                details: "",
            },
            {
                title: "4 monthly meetings with Project Manager",
                details: "",
            },
            {
                title: "Priority Support (Whatsapp)",
                details: "",
            },
        ]
    },
    {
        title: '10X Powerhouse',
        setupFee: '5000',
        monthlyFee: '1000',
        highestPriority: true,

        sellingPoints: [
            {
                title: "Basic Chatbots (QnA + Support)",
                details: "",
            },
            {
                title: "Appointment Setter Chatbot",
                details: "",
            },

            {
                title: "Custom Automations (10 Custom Automations and Integrations)",
                details: "",
            },
            {
                title: "Landing Page (SEO + Convertible)",
                details: "",
            },
            {
                title: "Branding (Logo, Brand, Moto)",
                details: "",
            },
            {
                title: "Full Funnel Build",
                details: "",
            },
            {
                title: "Dedicated Funnel Manager",
                details: "",
            },
            {
                title: "Dedicated Product Manager",
                details: "",
            },
            {
                title: "3 months content plan",
                details: "",
            },
            {
                title: "Priority Support (Whatsapp)",
                details: "",
            },
        ]
    },
]

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

const PricingSection = ({ setDisplayBookingPopup, setGetStartedClickedPosition }) => {
    /* const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); */
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
        <div className='text-white pt-[100px] pb-[100px] relative' id='pricing'>
            {/* <Spotlight
                className="top-40 left-0 md:left-60 md:-top-[50vh]"
                fill="white"
            /> */}
            <div ref={sectionRef} className='container mx-auto flex flex-col items-center '>
                <motion.h1

                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -2 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl md:text-5xl max-w-[600px] md:text-center text-center mb-[1.2rem]"
                >
                    Unleash Your <span className='px-[0.7rem] text-white py-[0.35rem] rounded-md bg-main-red-cta/50 border-main-red-cta/30 border-[1px] w-fit '>Growth</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -2 }}
                    transition={{ duration: 1 }}
                    className="text-[1.1rem] my-[0.4rem] md:text-center text-center max-w-[350px]"
                >
                    with Tailored Packages that you can shuffle and use at ease
                </motion.p>

                <motion.div

                    variants={gridContainerVariants}
                    initial="hidden"
                    /* animate="show" */
                    animate={isVisible ? "show" : "hidden"}
                    className='flex items-center md:items-start md:flex-row flex-col gap-[2rem] justify-center w-[100%] mt-[2rem]'>
                    {
                        pricingData.map((item, index) => (
                            <motion.div
                                variants={gridSquareVariants}
                                key={index + 1}
                                className={`${item?.highestPriority ? "border-b-main-red-cta shadow-redShadow " : "border-slate-700/30 "} border-slate-700/30 border-2  px-[1rem] bg-slate-700/10  rounded-3xl flex flex-col items-center py-[1.6rem] gap-[1.5rem] w-[95vw] md:w-[400px]`}
                            >
                                <h1 className='text-xl font-bold bg-main-dark-bg border-main-red-cta/30 border-[1px] py-[8px] px-[1rem] w-fit rounded-full'>{item?.title}</h1>
                                <div className='relative w-fit'>
                                    <h4 className={`text-5xl font-bold mt-[1rem] ${item?.previousPrice ? "line-through mb-0 opacity-40" : "mb-[1rem]"}`}>{item?.previousPrice ? item?.previousPrice : item?.setupFee}$</h4>
                                    {item?.previousPrice &&
                                        <h4 className={`text-5xl font-bold text-white -rotate-12 absolute top-[2rem] left-0 bottom-0 right-0`}>
                                            {item?.setupFee}$</h4>}
                                </div>

                                <div className='flex flex-col items-center'>
                                    {/* <p>Continues at</p>
                                    <p><span className='text-xl text-main-red-cta'>{item?.monthlyFee}$</span> per month</p> */}
                                </div>

                                <div className='mt-[1rem] mb-[2rem] flex flex-col items-center gap-[0.6rem]'>
                                    {item.sellingPoints.map((sellingPoint, sellingIndex) => (
                                        <div className='flex flex-row items-start gap-[0.5rem] w-[80%]' key={sellingIndex + 1}>
                                            <HiOutlineShieldCheck size={22} className='text-slate-200' />
                                            <p className='w-[fit-content]'>{sellingPoint?.title}</p>


                                        </div>
                                    ))}
                                    {/* <div className='flex flex-row gap-[0.45rem]' >
                                        <HiOutlineShieldCheck size={22} className='text-slate-200' />
                                        <div className='flex flex-col gap-[0.25rem] text-slate-200'>
                                            <p>
                                                Chatbots (QnA)
                                            </p>
                                        </div>

                                    </div> */}




                                </div>

                                <p className='text-center text-sm font-medium text-slate-300 leading-[22px] mb-[0.5rem] px-[0.7rem]'>
                                    All prices are EXCLUDING Monthly Charge, which is projected to be
                                    {" "}<span className='px-[0.7rem] text-nowrap text-white py-[0.2rem] rounded-md bg-main-red-cta/50 border-main-red-cta/30 border-[1px] w-fit '>
                                        {item?.monthlyFee}$ /month
                                    </span>{" "}. Our team will work with you to ensure you receive a custom solution for your business which includes all development work, consulting and integration
                                </p>

                                <button
                                    onClick={() => {
                                        setDisplayBookingPopup(true)
                                        setGetStartedClickedPosition(`Pricing Package - ${item.title}`)
                                    }}

                                    className="bg-slate-800 mb-[1rem] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block hover:scale-[1.1] transition-all duration-75 ease-in-out">
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#E50914_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        </span>
                                    </span>
                                    <div className="relative px-[1.5rem] py-[0.6rem] flex space-x-2 items-center justify-center z-10 rounded-full bg-main-red-cta hover:bg-main-red-cta/70  ring-1 ring-white/10 transition-opacity duration-500">
                                        <span className="text-[1rem] tracking-wide text-center flex items-center justify-center gap-[1rem] w-[150px]">
                                            Get Started
                                        </span>

                                    </div>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-main-red-cta to-red-500/0 transition-opacity duration-500 group-hover:opacity-40">
                                    </span>
                                </button>

                            </motion.div>
                        ))
                    }

                </motion.div>
            </div>
        </div>
    )
}

export default PricingSection