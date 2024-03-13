import React, { useState, useRef, useEffect } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';


const availableSlots = ["12:00 PM", "12:30 PM", "3:00 PM", "3:30 PM"]

const TimeSetter = ({ timeSlot, setTimeSlot, customTimeSlot, setCustomTimeSlot, timeFormat, setTimeFormat, displayCustomInput, setDisplayCustomInput }) => {
    // const [timeSlot, setTimeSlot] = useState("12:00 PM");
    // const [customTimeSlot, setCustomTimeSlot] = useState("");
    // const [timeFormat, setTimeFormat] = useState("PM");
    /*  const [timeFormat, setTimeFormat] = useState("AM/PM"); */
    // const [displayCustomInput, setDisplayCustomInput] = useState(false);
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const inputRef = useRef(null)

    const resetCustomInputStates = () => {
        setCustomTimeSlot("");
        setDisplayCustomInput(false);
        setTimeFormat("PM");
    }

    const handleSlotClick = (slot) => {
        console.log(slot);
        setTimeSlot(slot);
        resetCustomInputStates();
    }



    const handleCustomBtnClick = () => {
        setDisplayCustomInput(true);
        setTimeSlot("");
    }

    useEffect(() => {
        if (displayCustomInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [displayCustomInput]);

    const handleDropDownHover = () => {
        setDisplayDropdown(true);
    }
    const handleDropDownHoverLeave = () => {
        setDisplayDropdown(false);
    }

    // const handleCustomTimeInputChange = (e) => {
    //     console.log(e.target.value);
    //     setCustomTimeSlot(e.target.value);
    // }

    // Helper function to format the input as "HH:MM"
    /* const formatTimeInput = (input) => {
        // If input length is more than 2, insert colon between second and third digit
        if (input.length > 2) {
            return `${input.substring(0, 2)}:${input.substring(2)}`;
        }
        return input;
    }; */

    // const formatTimeInput = (input) => {
    //     if (input.length > 2) {
    //         // Extract hours from the first two digits and convert to a number
    //         let hours = parseInt(input.substring(0, 2), 10);
    //         // Use modulo operation to wrap hours to a 12-hour format, adjusting for '00' hours
    //         hours = hours % 12 || 12;

    //         // Ensure the hours are formatted with two digits
    //         const formattedHours = hours.toString().padStart(2, '0');

    //         // Reassemble the input with adjusted hours and remaining input
    //         return `${formattedHours}:${input.substring(2)}`;
    //     }
    //     return input;
    // };


    const formatTimeInput = (input) => {
        // Handle single-digit hours by prepending a zero
        if (input.length === 1 && parseInt(input, 10) > 0) {
            return `0${input}`;
        } else if (input.length >= 2) {
            // Extract hours from the first two digits and convert to a number
            let hours = parseInt(input.substring(0, 2), 10);

            // Adjust hours greater than 12 to wrap around in a 12-hour format
            if (hours > 12) {
                hours = hours % 12;
                // Special case: after modulo, 0 should be treated as 12
                hours = hours === 0 ? 12 : hours;
            }

            // Ensure the hours are formatted with two digits
            const formattedHours = hours.toString().padStart(2, '0');

            // Reassemble the input with adjusted hours and remaining input, if any
            // Check if additional input exists beyond the first two digits
            if (input.length > 2) {
                return `${formattedHours}:${input.substring(2)}`;
            } else {
                return formattedHours;
            }
        }
        return input;
    };


    // const formatTimeInput = (input, isTyping) => {
    //     // Assuming `isTyping` is a boolean that's true if the user is likely still typing (not shown here how to determine)
    //     if (input.startsWith('1') && isTyping && input.length < 3) {
    //         // If the user types '1' and is still typing, don't prepend a '0' yet
    //         return input;
    //     } else if (input.length === 1 && parseInt(input, 10) > 0 && !input.startsWith('1')) {
    //         // For numbers 2-9, prepend a '0'
    //         return `0${input}`;
    //     } else if (input.length >= 2) {
    //         let hours = parseInt(input.substring(0, 2), 10);

    //         // Wrap hours greater than 12
    //         if (hours > 12) {
    //             hours = hours % 12 || 12; // Wrap and handle the '0' case
    //         }

    //         // Format hours
    //         const formattedHours = hours.toString().padStart(2, '0');

    //         // Handle additional digits for minutes
    //         if (input.length > 2) {
    //             return `${formattedHours}:${input.substring(2)}`;
    //         } else {
    //             return formattedHours;
    //         }
    //     }
    //     return input;
    // };


    const handleCustomTimeInputChange = (e) => {
        // Get the current input value, removing non-numeric characters and limiting length to 4 digits
        const value = e.target.value.replace(/[^\d]/g, '').substring(0, 4);

        // Format the value
        const formattedValue = formatTimeInput(value);

        // Update the custom time slot state with the formatted value
        setCustomTimeSlot(formattedValue);
    };





    return (
        <div className='w-fit'>
            <p className='text-sm mb-[0.45rem] mt-[1rem]'>Time Slots:</p>
            <div className='space-y-[0.7rem] md:w-fit w-fit gap-[0.6rem] items-start'>
                {availableSlots.map((slot, slotIndex) => (
                    <div
                        key={slotIndex}
                        onClick={() => handleSlotClick(slot)}
                        className={`${timeSlot === slot ? "bg-main-red-cta " : "bg-transparent"} mt-[0px] pt-[0px] cursor-pointer text-white hover:bg-main-red-cta hover:text-white border-[1px] border-main-red-cta rounded-md w-[120px] md:w-[190px] h-[50px] hidden md:flex items-center justify-center `}>
                        {slot}
                    </div>
                ))}

                <div className='md:hidden flex flex-col gap-[0.6rem]'>
                    <div className='flex gap-[0.6rem]'>
                        {availableSlots.slice(0, 2).map((slot, slotIndex) => (
                            <div
                                key={slotIndex}
                                onClick={() => handleSlotClick(slot)}
                                className={`${timeSlot === slot ? "bg-main-red-cta " : "bg-transparent"} mt-[0px] pt-[0px] cursor-pointer text-white hover:bg-main-red-cta hover:text-white border-[1px] border-main-red-cta rounded-md w-[120px] md:w-[190px] h-[50px] flex items-center justify-center `}>
                                {slot}
                            </div>
                        ))}

                    </div>
                    <div className='flex gap-[0.6rem]'>
                        {availableSlots.slice(2, 5).map((slot, slotIndex) => (
                            <div
                                key={slotIndex}
                                onClick={() => handleSlotClick(slot)}
                                className={`${timeSlot === slot ? "bg-main-red-cta " : "bg-transparent"} mt-[0px] pt-[0px] cursor-pointer text-white hover:bg-main-red-cta hover:text-white border-[1px] border-main-red-cta rounded-md w-[120px] md:w-[190px] h-[50px] flex items-center justify-center `}>
                                {slot}
                            </div>
                        ))}

                    </div>
                </div>

                {displayCustomInput ? (
                    <div className='bg-transparent cursor-pointer ring-main-red-cta hover:text-white border-[1px] border-main-red-cta rounded-md w-[190px] h-[50px] flex items-center justify-center '>
                        <input
                            ref={inputRef}
                            value={customTimeSlot}
                            onChange={handleCustomTimeInputChange}
                            placeholder='time'
                            className='w-[50%] ml-[0.6rem] bg-transparent text-white focus:border-none focus:outline-none'
                        />
                        <span
                            /* onMouseEnter={handleDropDownHover}
                            onMouseLeave={handleDropDownHoverLeave} */

                            className='relative w-[100px]'
                        >
                            <span
                                onClick={() => setDisplayDropdown(!displayDropdown)}
                                className='flex gap-[0.5rem] items-center justify-between border-[1px] hover:border-white border-main-dark-bg rounded-md p-2'
                            >
                                <p className='text-sm'>{timeFormat}</p>
                                <HiOutlineChevronDown size={20} /* onMouseEnter={handleDropDownHover} onMouseLeave={handleDropDownHoverLeave} */ />
                            </span>
                            <span /* onMouseEnter={handleDropDownHover} onMouseLeave={handleDropDownHoverLeave} */
                                className={`bg-main-dark-bg border-slate-800 rounded-md p-2 border-2 text-white w-[100px] absolute top-[30px] left-[50%] translate-x-[-50%] ${displayDropdown ? "flex" : "hidden"} flex-col z-20`}>
                                <span
                                    onClick={(e) => {
                                        setTimeFormat(e.currentTarget.textContent);
                                        setDisplayDropdown(false);
                                    }}
                                    className='bg-transparent hover:bg-slate-800 py-[0.45rem] px-[0.65rem] rounded-md'
                                >
                                    AM
                                </span>
                                <span
                                    onClick={(e) => {
                                        setTimeFormat(e.currentTarget.textContent);
                                        setDisplayDropdown(false);
                                    }}
                                    className='bg-transparent hover:bg-slate-800 py-[0.45rem] px-[0.65rem] rounded-md'
                                >
                                    PM
                                </span>
                            </span>
                        </span>


                    </div>


                ) : (
                    <div onClick={handleCustomBtnClick} className='bg-transparent cursor-pointer hover:bg-main-red-cta hover:text-white border-[1px] border-main-red-cta rounded-md w-[190px] h-[50px] flex items-center justify-center '>{"Custom Time"}</div>
                )}

            </div>
        </div >
    )
}

export default TimeSetter