import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';


const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div onClick={toggleOpen} className='border-[1px] cursor-pointer border-slate-700/50 bg-slate-700/10 hover:bg-slate-700/20 transition-all duration-75 ease-in rounded-lg px-[1rem] py-[1rem]'>
            <motion.header
                initial={false}
                /* animate={{ backgroundColor: isOpen ? "#aaa" : "#eee" }} */

                /* style={{ cursor: "pointer", padding: "10px", marginBottom: "5px" }} */
                className='bg-transparent cursor-pointer py-[10px] mb-[5px] text-lg w-[80vw] md:w-[600px] flex items-center justify-between'
            >
                <span className='w-[70%] md:w-[80%]'>{title}</span>

                {isOpen ? <HiOutlineMinus size={22} /> : <HiOutlinePlus size={22} />}
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className='overflow-hidden w-[80vw] md:w-[600px] text-slate-300 cursor-default'
                    >
                        {children}
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
