

import { useEffect, useRef } from "react";

export const AnimatedGradientBorder = ({ children, showAnimatedBorder }) => {
    const boxRef = useRef(null);
    const animationRef = useRef(null);

    const startAnimation = () => {
        const updateAnimation = () => {
            if (!boxRef.current) return; // Exit if component unmounts
            const angle = (parseFloat(boxRef.current.style.getPropertyValue("--angle")) + 5) % 360;
            boxRef.current.style.setProperty("--angle", `${angle}deg`);
            animationRef.current = requestAnimationFrame(updateAnimation);
        };
        updateAnimation();
    };

    const stopAnimation = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };

    useEffect(() => {
        if (showAnimatedBorder) {
            startAnimation();
        } else {
            stopAnimation();
            // Reset angle to stop the gradient movement when not showing border
            if (boxRef.current) {
                boxRef.current.style.setProperty("--angle", `0deg`);
            }
        }

        // Cleanup function to stop animation when component unmounts
        return () => stopAnimation();
    }, [showAnimatedBorder]);

    return (
        <div
            ref={boxRef}
            style={{
                "--angle": "0deg",
                "--border-color": showAnimatedBorder ? "linear-gradient(var(--angle), #E50914, #000E17)" : "transparent",
                "--bg-color": "linear-gradient(#131219, #131219)",
            }}
            className={`flex items-center justify-center rounded-full p-2 border-2 border-[#0000] [background:padding-box_var(--bg-color),border-box_var(--border-color)]`}
        >
            {children}
        </div>
    );
}; 