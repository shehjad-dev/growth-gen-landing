import { InfiniteMovingCards } from '@/components/atoms/InfiniteMovingCards'
import React from 'react'

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];


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
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection