import { InfiniteMovingCards } from '@/components/atoms/InfiniteMovingCards'
import React from 'react'
import MainLogo from '@/assets/growthGenAiWhiteLogo.svg'
import adversionXLogo from '@/assets/clientsLogos/adversionXLogo.jpg'
import askjiffyLogo from '@/assets/clientsLogos/askjiffyLogo.PNG'
import babycareLogo from '@/assets/clientsLogos/babycareLogo.jpg'
import chasisDepotLLCLogo from '@/assets/clientsLogos/chasisDepotLLCLogo.png'
import golflandsLogo from '@/assets/clientsLogos/golflandsLogo.jpg'
import OnetapfolioLogo from '@/assets/clientsLogos/OnetapfolioLogo.jpg'
import socialImpactLabBracuLogo from '@/assets/clientsLogos/socialImpactLabBracuLogo.jpg'
import zubayerPPCLogo from '@/assets/clientsLogos/zubayerPPCLogo.jpg'
import Image from "next/image";





const testimonialsData = [
    {
        quote: "We chose GrowthGen Ai to revolutionize our online chassis and container business. Their AI-driven solutions doubled our revenue in just two months, showcasing the power of their tailored automation systems.",
        company: "Chassis Depot Llc",
        person: "Tom Jon",
        designation: "CEO",
        logo: chasisDepotLLCLogo
    },
    {
        quote: "At Golflands Dental, we've always focused on patient smiles. GrowthGen AI helped us grow our online presence, leading to more smiles and a thriving practice. Highly recommended!",
        company: "Golflands Dental NZ ",
        person: "Dr. Hamza",
        designation: "Founder & Chief Dentist",
        logo: golflandsLogo
    },
    {
        quote: "Thanks to GrowthGen Ai, adversionX's witnessed a 2x surge in ad agency business within months. Their AI automations revolutionized our efficiency, boosting revenue effortlessly. More than satisfied..",
        company: "AdversionX",
        person: "Touhid",
        designation: "CEO",
        logo: adversionXLogo
    },
    {
        quote: "Their custom landing page and blogging platform, coupled with lead collection and CMS solutions, were exactly what we needed.GrowthGen AI brought everything together, streamlining content management and lead collection.Great job done..",
        company: "Social Impact Lab, BRACU",
        person: "S. Banik",
        designation: "Co-founder",
        logo: socialImpactLabBracuLogo
    },
    {
        quote: "GrowthGen AI's solutions not only enhanced our platform but also attracted a wider audience, leading to significant user and revenue growth. Adding a custom domain was not even a feature for the first mvp, it was planned for a later integration, but they surprised us on the first mvp with this feature. Proactiveness at best, thanks to the dedicated Project Managers as well.",
        company: "Onetapfolio",
        person: "Ikram",
        designation: "Co-founder",
        logo: OnetapfolioLogo,
    },
    {
        quote: "GrowthGen AI's strategic landing page design significantly improved visitor engagement and lead capture, propelling us towards our dream outcome. With a more effective landing page, we saw a tangible rise in conversions and revenue, allowing us to reach more users and unlock their data's full potential",
        company: "AskJiffy",
        person: "Anand M.",
        designation: "COO",
        logo: askjiffyLogo
    },
    {
        quote: "Our Ad agency's growth skyrocketed in just 3 months! Their AI-powered systems streamlined our operations, saving time and money in day to day workforce costs",
        company: "Zubayer PPC",
        person: "Z. Islam",
        designation: "CEO",
        logo: zubayerPPCLogo
    },
    {
        quote: "GrowthGen AI completely revamped our app's design, making it user-friendly, visually appealing, and easy to navigate. With time,  a more intuitive and engaging app led to higher user engagement, improved product discoverability, and ultimately, increased sales. More than satisfied with Growth Gen AI.",
        company: "Babycare",
        person: "k. Rown",
        designation: "Founder",
        logo: babycareLogo
    },
]
/* const testimonialsData = [
    {
        quote: "We chose GrowthGen Ai to revolutionize our online chassis and container business. Their AI-driven solutions doubled our revenue in just two months, showcasing the power of their tailored automation systems.",
        company: "Chassis Depot Llc",
        person: "Tom Jon",
        designation: "CEO",
        logo: "https://i.ibb.co/QYC192c/chasis-Depot-LLCLogo.jpg"
    },
    {
        quote: "Thanks to GrowthGen Ai, adversionX's witnessed a 2x surge in ad agency business within months. Their AI automations revolutionized our efficiency, boosting revenue effortlessly. More than satisfied..",
        company: "AdversionX",
        person: "Touhid",
        designation: "CEO",
        logo: "https://i.ibb.co/5vYVG65/adversion-XLogo.jpg"

        // logo: adversionXLogo,
    },
    {
        quote: "Our Ad agency's growth skyrocketed in just 3 months! Their AI-powered systems streamlined our operations, saving time and money in day to day workforce costs",
        company: "Zubayer PPC",
        person: "Z. Islam",
        designation: "CEO",
        logo: "https://i.ibb.co/44WQ2yZ/zubayer-PPCLogo.jpg"


        // logo: zubayerPPCLogo,
    },
    {
        quote: "Their custom landing page and blogging platform, coupled with lead collection and CMS solutions, were exactly what we needed.GrowthGen AI brought everything together, streamlining content management and lead collection.Great job done..",
        company: "Social Impact Lab",
        person: "S. Banik",
        designation: "Co-founder",
        logo: "https://i.ibb.co/KqBgs8M/social-Impact-Lab-Bracu-Logo.jpg"

        // logo: socialImpactLabBracuLogo,

    },
    {
        quote: "GrowthGen AI's solutions not only enhanced our platform but also attracted a wider audience, leading to significant user and revenue growth. Adding a custom domain was not even a feature for the first mvp, it was planned for a later integration, but they surprised us on the first mvp with this feature. Proactiveness at best, thanks to the dedicated Project Managers as well.",
        company: "Onetapfolio",
        person: "Ikram",
        logo: "https://i.ibb.co/y4fDgbS/golflands-Logo.jpg",

        designation: "Co-founder",
        logo: "https://i.ibb.co/6wv5VS9/Onetapfolio-Logo.jpg"


        // logo: OnetapfolioLogo,

    },
    {
        quote: "At Golflands Dental, we've always focused on patient smiles. GrowthGen AI helped us grow our online presence, leading to more smiles and a thriving practice. Highly recommended!",
        company: "Golflands Dental NZ ",
        person: "Dr. Hamza",
        designation: "Founder & Chief Dentist",
        logo: "https://i.ibb.co/y4fDgbS/golflands-Logo.jpg",


    },
    {
        quote: "GrowthGen AI's strategic landing page design significantly improved visitor engagement and lead capture, propelling us towards our dream outcome. With a more effective landing page, we saw a tangible rise in conversions and revenue, allowing us to reach more users and unlock their data's full potential",
        company: "AskJiffy",
        person: "Anant M.",
        designation: "COO",
        logo: "https://i.ibb.co/WPTFyCF/askjiffy-Logo.png",


        // logo: askjiffyLogo,

    },
    {
        quote: "GrowthGen AI completely revamped our app's design, making it user-friendly, visually appealing, and easy to navigate. With time,  a more intuitive and engaging app led to higher user engagement, improved product discoverability, and ultimately, increased sales. More than satisfied with Growth Gen AI.",
        company: "Babycare",
        person: "k. Rown",
        designation: "Founder",
        logo: "https://i.ibb.co/b3WCg97/babycare-Logo.jpg"

        // logo: babycareLogo
    },
] */




const TestimonialsSection = () => {
    return (
        <div className='text-white pt-[100px] pb-[100px] bg-main-dark-bg'>

            <div className='container mx-auto flex flex-col items-center'>
                <h1
                    /* initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }} */
                    className="text-2xl md:text-5xl max-w-[600px] md:text-center text-center px-[10px] md:px-[0]"
                >
                    Results? Yes we have those
                </h1>
                <p
                    /* initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -2 }}
                    transition={{ duration: 1 }} */
                    className="text-[1.1rem] my-[0.4rem] md:text-center text-center md:max-w-[350px] hidden"
                >
                    Our network of satistfied customers are working in various industries with ease and comfort
                </p>



                <div className='pt-[40px] pb-[120px]'>
                    <InfiniteMovingCards
                        items={testimonialsData}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection