"use client"

import React, { useEffect } from 'react'
import { useAnimate } from "framer-motion";


const MovingBorder = ({ width, height, color, speed }) => {
    const border = useAnimate();

    useEffect(() => {
        const animation = animate(border, {
            x: -width, // Start from the left
            opacity: 1,
            transition: {
                duration: duration, // Adjust duration as needed
                ease: "linear", // Change easing if desired
            },
        }).start();

        return () => animation.stop(); // Clean up animation
    }, [width, height, color, speed, border]);

    return (
        <div
            ref={border}
            style={{
                width,
                height,
                backgroundColor: color,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1, // Ensure border overlaps image
            }}
        />
    );
};