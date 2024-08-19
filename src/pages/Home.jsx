import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate();

   // Data for the Hero section
   const heroData = {
      title: "Breakfast Done Right",
      subtitle: "Start Your Day with a Smile",
      imageUrl: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   };

   // Data for the extra about sections
   const aboutSection1 = {
      heading: "We Didn't Reinvent Breakfast",
      text1: "At our cozy breakfast spot, we believe in keeping things simple. We focus on what we do best: serving delicious, hearty breakfasts made with fresh, local ingredients.",
      text2: "Our team is passionate about creating the perfect morning experience for you. From fluffy pancakes to perfectly brewed coffee, we've got your morning covered.",
      images: [
         "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
   };

   const aboutSection2 = {
      heading: "Crafting the Perfect Start to Your Day",
      text1: "Our breakfast place is where community meets comfort. We offer a welcoming atmosphere where you can relax, enjoy your meal, and feel at home.",
      text2: "Whether you're here for a quick bite or a leisurely brunch, we're committed to making your morning special.",
      images: [
         "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
   };

   const handleReadmore = () => {
      navigate('/about');
      window.scrollTo(0, 0);
   };

   return (
      <div className='font-light tracking-tight bg-zinc-100 dark:bg-zinc-900'>
         <Hero
            title={heroData.title}
            subtitle={heroData.subtitle}
            imageUrl={heroData.imageUrl}
         />

         {/* About Section 1 */}
         <div className="fade-in gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{aboutSection1.heading}</h2>
               <p className="mb-4">{aboutSection1.text1}</p>
               <p>{aboutSection1.text2}</p>
               <button
                  onClick={handleReadmore}
                  className="sm:w-fit w-full group px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex mt-8">
                  <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read More</span>
                  <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                     <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
               <img className="w-full rounded-lg" src={aboutSection1.images[0]} alt="Breakfast Dish 1" />
               <img className="mt-4 w-full lg:mt-10 rounded-lg" src={aboutSection1.images[1]} alt="Breakfast Dish 2" />
            </div>
         </div>

         {/* About Section 2 */}
         <div className="fade-in gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid grid-cols-2 gap-4 mt-8">
               <img className="w-full rounded-lg" src={aboutSection2.images[0]} alt="Breakfast Dish 3" />
               <img className="mt-4 w-full lg:mt-10 rounded-lg" src={aboutSection2.images[1]} alt="Breakfast Dish 4" />
            </div>

            <div className="fade-in font-light text-gray-500 sm:text-lg dark:text-gray-400">
               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{aboutSection2.heading}</h2>
               <p className="mb-4">{aboutSection2.text1}</p>
               <p>{aboutSection2.text2}</p>
               <button
                  onClick={handleReadmore}
                  className="sm:w-fit w-full group px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex mt-8">
                  <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read More</span>
                  <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                     <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
         </div>

         {/* Testimonials */}
         <Testimonials />
      </div>
   );
};

export default Home;
