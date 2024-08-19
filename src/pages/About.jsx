import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Blog from '../components/Blog';

const About = () => {
   return (
      <div className='lg:h-full w-full'>
         <Hero
            title="About Us"
            subtitle="Learn More About What We Do"
            imageUrl="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />
         <AboutSection />
         <Blog />
      </div>
   );
};

export default About;
