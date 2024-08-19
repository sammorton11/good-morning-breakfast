import { useNavigate } from "react-router-dom";
import GalleryPreview from "./GalleryPreview";

// Data for each section
const aboutSectionData = {
   section1: {
      heading: "Serving Up Smiles Every Morning",
      description: "Welcome to our cozy breakfast nook, where every meal is crafted with love and served with a smile. For years, we've been dedicated to bringing joy to your mornings with our delicious, home-cooked meals. From fluffy pancakes to sizzling bacon, we've got something to make every breakfast a special occasion.",
      stats: [
         { label: "Years of Service", value: "10+" },
         { label: "Meals Served", value: "100,000+" },
         { label: "Happy Customers", value: "50,000+" }
      ],
      images: [
         "https://images.unsplash.com/photo-1438401817917-ee9dc33fe6af?q=80&w=3176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1504712598893-24159a89200e?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
   },
   section2: {
      heading: "Bringing the Community Together Over Breakfast",
      description: "Our breakfast place is more than just a spot to grab a bite—it's a community hub where friends and neighbors come together. Whether you're starting your day with a hot cup of coffee or enjoying a leisurely weekend brunch, we're here to make sure every moment is memorable. We believe in the power of good food to bring people together and create lasting connections.",
      image: "https://images.unsplash.com/photo-1438401817917-ee9dc33fe6af?q=80&w=3176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   section3: {
      heading: "Our Journey: From Humble Beginnings to a Beloved Breakfast Spot",
      description: "Our story began with a simple idea: to create a welcoming space where everyone could enjoy a delicious breakfast. Over the years, we've grown from a small neighborhood café to a beloved breakfast destination, thanks to the support of our amazing customers. We've faced challenges, celebrated milestones, and most importantly, made countless memories along the way.",
      highlights: [
         { label: "10+ Years", description: "Serving the Community with Love and Dedication" },
         { label: "100,000+ Meals", description: "Each Dish Prepared with Care and Passion" },
         { label: "Best Breakfast Award", description: "Recognized for Our Commitment to Quality" },
         { label: "99% Happy Customers", description: "Our Focus on Exceptional Service Shines Through" }
      ],
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
};

// AboutSection component
const AboutPage = ({data = aboutSectionData}) => {
   const navigate = useNavigate();
   const handleServices = () => {
      navigate("/services");
      window.scrollTo(0, 0);
   }

   return (
      <div>
         {/* Section 1 */}
         <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto py-14 lg:py-32">
            <div className="w-full justify-start items-center gap-2 md:gap-12 grid lg:grid-cols-2 grid-cols-1">
               <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                  <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                     <img
                        className="rounded-xl"
                        src={data.section1.images[0]}
                        alt="About Us"
                     />
                  </div>
                  <img
                     className="sm:ml-0 ml-auto rounded-xl"
                     src={data.section1.images[1]}
                     alt="About Us"
                  />
               </div>
               <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                     <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                           {data.section1.heading}
                        </h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                           {data.section1.description}
                        </p>
                     </div>
                     <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                        {data.section1.stats.map((stat, index) => (
                           <div key={index} className="flex-col justify-start items-start inline-flex pt-10 md:pt-0">
                              <h3 className="text-gray-900 text-lg lg:text-4xl font-bold font-manrope leading-normal">{stat.value}</h3>
                              <h6 className="text-gray-500 text-base font-normal leading-relaxed">{stat.label}</h6>
                           </div>
                        ))}
                     </div>
                     <button
                        onClick={handleServices}
                        class="sm:w-fit w-full group px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex mt-8">
                        <span
                           class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">See Our Services</span>
                        <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                           xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                              stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Section 2 */}
         <section className="py-32 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
               <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                     <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                           {data.section2.heading}
                        </h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                           {data.section2.description}
                        </p>
                     </div>
                  </div>
                  <img className="lg:mx-0 mx-auto h-full rounded-3xl" src={data.section2.image} alt="About Us image" />
               </div>
            </div>
         </section>

         {/* Section 3 */}
         <section className="relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
               <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 py-32">
                  <div className="w-full lg:justify-start justify-center items-start flex">
                     <div
                        className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                        <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl"
                           src={data.section3.image} alt="About Us image" />
                     </div>
                  </div>
                  <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                     <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                           <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                           <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                              <h2
                                 className="text-zinc-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                 {data.section3.heading}
                              </h2>
                              <p
                                 className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                 {data.section3.description}
                              </p>
                           </div>
                        </div>
                        <div className="w-full flex-col justify-center items-start gap-6 flex">
                           <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                              {data.section3.highlights.map((highlight, index) => (
                                 <div key={index}
                                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">{highlight.label}</h4>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed">{highlight.description}</p>
                                 </div>
                              ))}
                              <button
                                 onClick={handleServices}
                                 class="sm:w-fit w-full group px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex mt-8">
                                 <span
                                    class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">See Our Services</span>
                                 <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                                       stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <GalleryPreview />
            </div>
         </section>
      </div>
   );
}

export default AboutPage;
