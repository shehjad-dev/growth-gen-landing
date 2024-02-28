"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import axios from 'axios';




const InputBox = () => {
    const [emailInput, setEmailInput] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [notyf, setNotyf] = useState(null);
    const inputRef = useRef(null);


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const whichInputField = 'Top-Hero';

    useEffect(() => {
        import('notyf').then((module) => {
            const Notyf = module.Notyf;
            setNotyf(new Notyf());
        });
    }, []);


    const handleEmailInputChange = (e) => {
        console.log(e.target.value);
        setEmailInput(e.target.value.trim());
        setIsEmailValid(true);
    }



    const handleEmailSubmission = async () => {
        if (emailInput === "" || !emailRegex.test(emailInput)) {
            setIsEmailValid(false);

            if (emailInput === "") {
                notyf.error({
                    message: 'Please type an email!',
                    dismissible: true
                });
                return;
            } else if (!emailRegex.test(emailInput)) {
                notyf.error({
                    message: 'Please type a valid email!',
                    dismissible: true
                });
                return;
            }
            return;
        }

        setIsLoading(true);

        try {
            const now = new Date();
            const time = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const apiInput = {
                email: emailInput,
                date: new Date().toLocaleDateString(),
                time: time,
                whichInputField: "Top-Hero"
            }
            await axios.post('https://sheetdb.io/api/v1/jbtbxj3hm3o92',
                apiInput
            );
            setIsLoading(false);

            notyf.success({
                message: 'Great job. Welcome to your ultimate growth',
                dismissible: true
            });
        } catch (error) {
            setIsLoading(false);

            notyf.error({
                message: 'Please try again!',
                dismissible: true
            });
            console.error('Axios request failed: ', error);
        }

        console.log('Email Input: ', emailInput);

        //return;

    }

    return (
        <div className="mt-[0.5rem] flex md:flex-row flex-col gap-[1rem]">
            <input
                ref={inputRef}
                value={emailInput}
                onChange={handleEmailInputChange}
                placeholder='Your Email'
                className={`h-[45px] text-white px-[1.4rem] bg-transparent border-[2px] ${!isEmailValid ? "border-red-500" : "border-slate-700"} rounded-[40px] focus:border-slate-500 focus:outline-none`}
            />
            <button onClick={handleEmailSubmission} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#E50914_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    </span>
                </span>
                <div className="relative px-[1.5rem] py-[0.6rem] flex space-x-2 items-center justify-center z-10 rounded-full bg-main-red-cta hover:bg-main-red-cta/70 ring-1 ring-white/10 transition-opacity duration-500">
                    <span className="text-[1rem] tracking-wide text-center flex items-center justify-center gap-[1rem] w-[150px]">
                        {isLoading ? (
                            <>
                                <span>
                                    Booking
                                </span>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </>
                        ) : "Book Next Slot"
                        }
                    </span>

                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-500/0 via-main-red-cta to-red-500/0 transition-opacity duration-500 group-hover:opacity-40">
                </span>
            </button>
        </div>
    )
}

export default InputBox