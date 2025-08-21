import CTA from '@/components/CTA'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import WhyChoose from '@/components/WhyChoose'
import React from 'react'

const page = () => {
    return (
        <div className=' w-full'>
            <HeroSection />
            <Services />
            <WhyChoose />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default page