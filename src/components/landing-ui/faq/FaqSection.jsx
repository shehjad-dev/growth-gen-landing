import React from 'react'
import { Example } from './Example'
import Accordion from './Accordion'

const questionsList = [
    {
        question: "Question 1",
        answer: "Answer 1 : This is the content of the accordion which is shown when you click on the title."
    },
    {
        question: "Question 2",
        answer: "Answer 2 : This is the content of the accordion which is shown when you click on the title."
    },
    {
        question: "Question 3",
        answer: "Answer 3 : This is the content of the accordion which is shown when you click on the title."
    },
    {
        question: "Question 4",
        answer: "Answer 4 : This is the content of the accordion which is shown when you click on the title."
    },
    {
        question: "Question 5",
        answer: "Answer 5 : This is the content of the accordion which is shown when you click on the title."
    },
    {
        question: "Question 6",
        answer: "Answer 6 : This is the content of the accordion which is shown when you click on the title."
    },
    {
        question: "Question 7",
        answer: "Answer 7 : This is the content of the accordion which is shown when you click on the title."
    },
]

const FaqSection = () => {
    return (
        <div className='bg-main-dark-bg text-white'>
            <div className='container mx-auto flex flex-col items-center'>
                <h1 className="text-2xl md:text-5xl max-w-[600px] md:text-center text-center">Got Questions?</h1>
                <div className="accordion flex flex-col gap-[1rem] mt-[3.5rem]">
                    {
                        questionsList.map((item, index) => (
                            <Accordion title={item?.question}>
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