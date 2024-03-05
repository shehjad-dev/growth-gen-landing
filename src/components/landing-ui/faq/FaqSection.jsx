import React from 'react'
import Accordion from './Accordion'

/* const questionsList = [
    {
        "question": "I feel overwhelmed by the technical aspects of running an online business. Do you offer any support?",
        "answer": "All our packages include access to a project manager who can guide you through the setup and answer your questions. Moreover, you will get dedicated meetings with our developers for any customization."
    },
    {
        "question": "I spend too much time on administrative tasks like scheduling and communication. Can you automate them?",
        "answer": "Absolutely! Our custom automations can handle repetitive tasks like appointment scheduling and client reminders, freeing you to focus on training. Custom Automation based on your business, because every business is different."
    },
    {
        "question": "How does your landing page benefit my business?",
        "answer": "Our landing page offers customization according to your brand and SEO optimized. It's designed to attract and convert website visitors into paying clients, boosting conversions and revenue."
    },
    {
        "question": "I want to create high-quality content to engage my audience and attract new clients. Can you help?",
        "answer": "Definitely, with our 10X Powerhouse you will connect your dedicated managers who can help strategize and plan your content approach, attract new clients through effective ad boosting."
    },
    {
        "question": "What's included in the monthly fees after the initial package cost?",
        "answer": "Monthly recurring fees are designed to cover the hosting, ongoing maintenance, support, and access to your project manager as per the packages."
    },
    {
        "question": "How do I choose the right package for my business?",
        "answer": "The best package for your business depends on your specific needs and niche of business. When you book a meeting with us, our project manager will sit with you to identify and strategize a plan for you, and accordingly we will cater the right package for you."
    }
] */

const questionsList = [
    {
        "question": "Feeling overwhelmed by the technical aspects of running online business, Any Support?",
        "answer": "Our packages include project manager support and developer meetings for customization."
    },
    {
        "question": "Administrative tasks like scheduling and communication feels tiring. Can you automate?",
        "answer": "Our custom automations handle scheduling, reminders and many more according to your use case, freeing up more time for you to focus on other things."
    },
    {
        "question": "How does your landing pages benefit my business?",
        "answer": "Our Landing pages are customizable, SEO-optimized, designed to convert visitors into paying clients. The landing creation process that growthgen ai follows , is bound to bring you better results."
    },
    {
        "question": "Help creating high-quality content to attract clients?",
        "answer": `The "10X Powerhouse" connects you with dedicated managers to strategize content and attract clients through ad boosting & many more.`
    },
    {
        "question": "What's included in monthly fees?",
        "answer": "Monthly fees cover hosting, maintenance, support, and project manager access."
    },
    {
        "question": "How to choose the right package?",
        "answer": "Book a meeting with us, our project manager will help you choose the right package for your business needs."
    }
]


const FaqSection = () => {
    return (
        <div className='bg-main-dark-bg text-white'>
            <div className='container mx-auto flex flex-col items-center'>
                <h1 className="text-2xl md:text-5xl max-w-[600px] md:text-center text-center">Got Questions?</h1>
                <div className="accordion flex flex-col gap-[1rem] mt-[3.5rem]">
                    {
                        questionsList.map((item, index) => (
                            <Accordion title={item?.question} key={index + 1}>
                                <p>{item?.answer}</p>
                            </Accordion>
                        ))
                    }

                    {/* Add more accordion items here */}
                </div>
            </div>
        </div>
    )
}

export default FaqSection