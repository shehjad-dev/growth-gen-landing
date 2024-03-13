"use client"
import React, { useState } from 'react'
import Navbar from "@/components/atoms/Navbar";
import HeroSection from '@/components/landing-ui/hero/HeroSection';
import ServicesSection from '@/components/landing-ui/services/ServicesSection';
import PricingSection from './pricing/PricingSection';
import Footer from '../atoms/Footer';
import TestimonialsSection from './testimonials/TestimonialsSection';
import FaqSection from './faq/FaqSection';

import AptPopup from './AptPopup';


const MainPage = () => {
    const [displayBookingPopup, setDisplayBookingPopup] = useState(false);
    const [getStartedClickedPosition, setGetStartedClickedPosition] = useState("");


    return (
        <div className="bg-main-dark-bg min-h-[100vh] scroll-smooth">
            {displayBookingPopup && (
                <AptPopup
                    displayBookingPopup={displayBookingPopup}
                    setDisplayBookingPopup={setDisplayBookingPopup}
                    getStartedClickedPosition={getStartedClickedPosition}
                />
            )}

            <Navbar
                setDisplayBookingPopup={setDisplayBookingPopup}
                setGetStartedClickedPosition={setGetStartedClickedPosition}
            />
            <HeroSection />
            <ServicesSection />
            <PricingSection
                setDisplayBookingPopup={setDisplayBookingPopup}
                getStartedClickedPosition={getStartedClickedPosition}
                setGetStartedClickedPosition={setGetStartedClickedPosition}
            />
            <TestimonialsSection />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default MainPage