"use client"
import React from 'react'
import Navbar from "@/components/atoms/Navbar";
import HeroSection from '@/components/landing-ui/hero/HeroSection';
import ServicesSection from '@/components/landing-ui/services/ServicesSection';

const MainPage = () => {
    return (
        <div className="bg-main-dark-bg min-h-[100vh]">
            <Navbar />
            <HeroSection />
            <ServicesSection />
        </div>
    )
}

export default MainPage