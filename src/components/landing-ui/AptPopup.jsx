"use client"

import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/atoms/Calendar';
import TimeSetter from '@/components/atoms/TimeSetter';
import InputBox from '@/components/landing-ui/hero/InputBox';
import PopupInputBox from '@/components/landing-ui/hero/PopupInputBox';
import { HiOutlineX } from "react-icons/hi";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import axios from 'axios';

const AptPopup = ({ displayBookingPopup, setDisplayBookingPopup, getStartedClickedPosition }) => {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState("12:00 PM");
    const [customTimeSlot, setCustomTimeSlot] = useState("");
    const [emailInput, setEmailInput] = useState('');
    const [timeFormat, setTimeFormat] = useState("PM");
    const [displayCustomInput, setDisplayCustomInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [notyf, setNotyf] = useState(null);

    useEffect(() => {
        import('notyf').then((module) => {
            const Notyf = module.Notyf;
            setNotyf(new Notyf({
                duration: 4000,
                position: {
                    x: 'right',
                    y: 'bottom',
                },
                className: 'highZIndexNotyf', // Custom class
            }));
        });
    }, []);


    function getFormattedDateAndTimezone(now) {
        // const now = new Date();

        // Extract the date part
        const datePart = now.toDateString(); // Returns the date part in the format "Wed Mar 13 2024"

        // Extract the timezone part
        const timezoneOffset = now.getTimezoneOffset();
        const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
        const offsetMinutes = Math.abs(timezoneOffset % 60);
        const timezoneSign = timezoneOffset > 0 ? "-" : "+";
        const timezonePart = `GMT${timezoneSign}${offsetHours.toString().padStart(2, '0')}${offsetMinutes.toString().padStart(2, '0')} ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;

        return { datePart, timezonePart };
    }




    const handlePopupSubmission = async () => {
        console.log("Selected Data: ", date)
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const { datePart, timezonePart } = getFormattedDateAndTimezone(date);


        const entryDate = new Date();

        const entryTime = entryDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });


        const apiInputData = {
            // date: date,
            /* date: datePart, */
            userEmail: emailInput,
            apointmentDate: date.toLocaleDateString(),
            apointmentTime: displayCustomInput ? `${customTimeSlot} ${timeFormat}` : timeSlot,
            timezone: timezonePart,
            basicTimeZone: timeZone,
            leadEntryAt: `${entryDate.toLocaleDateString()} , ${entryTime}`,
            leadCollectedFrom: getStartedClickedPosition,
        }


        console.log("ApiData: ", apiInputData)

        setIsLoading(true);

        try {
            // const apiInput = {
            //     email: emailInput,
            //     date: new Date().toLocaleDateString(),
            //     time: time,
            //     whichInputField: "Top-Hero"
            // }
            const token = process.env.NEXT_PUBLIC_POPUP_SHEETS_BEARER_TOKEN;
            await axios.post('https://sheetdb.io/api/v1/xuft3o9ux05sl',
                apiInputData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
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
    }

    const resetPopupStates = () => {
        setDisplayBookingPopup(false);
        setTimeSlot("12:00 PM");
        setCustomTimeSlot("");
        setEmailInput('');
        setTimeFormat("PM");
        setDisplayCustomInput(false);
        setDate(new Date());
    }
    return (
        <div className='bg-main-dark-bg/20 backdrop-blur-md fixed top-0 right-0 bottom-0 left-0 z-[10000000] text-white flex flex-col items-center justify-center'>
            <div className='bg-main-dark-bg px-[16px] flex flex-col items-center md:overflow-hidden overflow-y-scroll relative pt-[40px] pb-[50px] rounded-xl w-[100vw] md:w-[600px] min-h-[60vh] max-h-[100vh]  md:min-h-[450px] shadow-lg border-[1px] border-white/10'>
                <button
                    onClick={() => {
                        setDisplayBookingPopup(false);
                        resetPopupStates();
                    }}
                    className='absolute top-[20px] right-[20px] text-white hover:bg-slate-700 bg-slate-800 md:bg-slate-800 border-[1px] md:border-transparent border-slate-600 p-2 rounded-md'>
                    < HiOutlineX size={20} />
                </button>
                <div className='flex md:flex-row flex-col justify-center gap-[1rem] md:gap-[2rem] md:h-[400px]'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                    <TimeSetter
                        timeSlot={timeSlot}
                        setTimeSlot={setTimeSlot}
                        customTimeSlot={customTimeSlot}
                        setCustomTimeSlot={setCustomTimeSlot}
                        timeFormat={timeFormat}
                        setTimeFormat={setTimeFormat}
                        displayCustomInput={displayCustomInput}
                        setDisplayCustomInput={setDisplayCustomInput}
                    />

                </div>

                <PopupInputBox
                    emailInput={emailInput}
                    setEmailInput={setEmailInput}
                    handlePopupSubmission={handlePopupSubmission}
                    date={date}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />


            </div>
        </div>
    )
}

export default AptPopup