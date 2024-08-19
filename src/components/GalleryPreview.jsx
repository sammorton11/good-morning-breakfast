import { Link, useNavigate } from "react-router-dom";

const galleryImages = {
   image1: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D",
   image2: "https://images.unsplash.com/photo-1607863680069-9919fbdbe0b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxicmVha2Zhc3QlMjByZXN0YXVyYW50fGVufDB8fDB8fHwy",
   image3: "https://images.unsplash.com/photo-1533920379810-6bedac961555?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D",
   image4: "https://images.unsplash.com/photo-1622532631316-5f8afb40812f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxicmVha2Zhc3QlMjByZXN0YXVyYW50fGVufDB8fDB8fHwy",
   image5: "https://images.unsplash.com/photo-1646381239264-339acff9749d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJyZWFrZmFzdCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D",
   image6: "https://images.unsplash.com/photo-1660836579059-533e7a1839b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxicmVha2Zhc3QlMjByZXN0YXVyYW50fGVufDB8fDB8fHwy",
   image7: "https://images.unsplash.com/photo-1496568554266-bc8a06b4d8b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxicmVha2Zhc3QlMjByZXN0YXVyYW50fGVufDB8fDB8fHwy"
};

const GalleryPreview = ({ images = galleryImages }) => {
   const navigate = useNavigate(); 
   const handleViewGallery = () => {
      navigate("/gallery");
      window.scrollTo(0, 0);
   } 

   return (
      <section className="relative py-32">
         <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
            <div className="flex items-center justify-center flex-col gap-5 mb-14">
               <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full">
                  Gallery
               </span>
               <h2 className="font-manrope font-extrabold text-4xl text-gray-900 text-center">
                  View Our Gallery
               </h2>
               <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto text-center">
                  Titty Caca 
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
               <div
                  className="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col p-7"
                  style={{ backgroundImage: `url(${images.image1})` }}
               >
                  <h6 className="font-semibold text-xl text-white mb-4">
                     Heading 1
                  </h6>
                  <p className="text-base font-normal text-white/80">
                     Description for image 1.
                  </p>
               </div>
               <div className="block">
                  <img
                     src={images.image2}
                     alt="Gallery image"
                     className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <div className="block">
                  <img
                     src={images.image3}
                     alt="Gallery image"
                     className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <div className="block">
                  <img
                     src={images.image4}
                     alt="Gallery image"
                     className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <div
                  className="bg-cover bg-center rounded-lg max-sm:h-80 flex justify-start flex-col p-7"
                  style={{ backgroundImage: `url(${images.image5})` }}
               >
                  <h6 className="font-semibold text-xl text-white mb-4">
                     Heading 2
                  </h6>
                  <p className="text-base font-normal text-white/80">
                     Description for image 5.
                  </p>
               </div>
               <div className="block">
                  <img
                     src={images.image6}
                     alt="Gallery image"
                     className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <div
                  className="bg-cover bg-center rounded-lg max-sm:h-80 flex justify-end flex-col p-7"
                  style={{ backgroundImage: `url(${images.image7})` }}
               >
                  <h6 className="font-semibold text-xl text-white mb-4">
                     Heading 3
                  </h6>
                  <p className="text-base font-normal text-white/80">
                     Description for image 7.
                  </p>
               </div>
            </div>
            <button onClick={handleViewGallery} className="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-semibold text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white">
               View Gallery
            </button>
         </div>
      </section>
   );
}

export default GalleryPreview;
