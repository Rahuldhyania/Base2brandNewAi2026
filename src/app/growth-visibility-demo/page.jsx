import React from 'react';
import Hero from '@/components/landing/Hero';
import SearchChanged from '@/components/landing/SearchChanged';
import WhatIsGeo from '@/components/landing/WhatIsGeo';
import Platforms from '@/components/landing/Platforms';
import Framework from '@/components/landing/Framework';
import Services from '@/components/landing/Services';
import WhyUs from '@/components/landing/WhyUs';
import Industries from '@/components/landing/Industries';
import Testimonials from '@/components/landing/Testimonials';

export default function page() {
    return (
      <main>
        <Hero />
        <SearchChanged />
        <WhatIsGeo />
        <Platforms />
        <Framework />
        <Services />
        <WhyUs />
        <Industries />
        <Testimonials />
      </main>
    )}