"use client"
import React from 'react'
import Navbar from "@/components/atoms/Navbar";
import HeroSection from '@/components/landing-ui/hero/HeroSection';
import ServicesSection from '@/components/landing-ui/services/ServicesSection';
import PricingSection from './pricing/PricingSection';
import Footer from '../atoms/Footer';
import TestimonialsSection from './testimonials/TestimonialsSection';
import FaqSection from './faq/FaqSection';

const MainPage = () => {
    return (
        <div className="bg-main-dark-bg min-h-[100vh] scroll-smooth">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <PricingSection />
            <TestimonialsSection />
            <FaqSection />
            <Footer />
            {/* <div className='h-[600vh] text-white bg-red-500'>asdasds</div> */}
        </div>
    )
}

export default MainPage