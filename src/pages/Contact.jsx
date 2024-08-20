import React, { useState } from 'react';
import Hero from '../components/Hero';
import { validateForm } from '../helpers/formValidation';

// Mock email sending service
const mockSendEmail = async (formData, status) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (status === 'success') {
            resolve({ status: 'success', message: 'Email sent successfully!' });
            console.log(formData);
         } else if (status === 'error') {
            reject({ status: 'error', message: 'Failed to send email!' });
         }
      }, 1000);
   });
};

const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      message: ''
   });

   const [formStatus, setFormStatus] = useState(null);
   const [errors, setErrors] = useState({});
   
   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formValidationErrors = validateForm(formData);
      if (Object.keys(formValidationErrors).length > 0) {
         setErrors(formValidationErrors);
         return;
      }

      setErrors({});
      setFormStatus('sending');
      try {
         const response = await mockSendEmail(formData, "success");
         setFormStatus(response.message);
         console.log(formData);
      } catch (error) {
         setFormStatus(error.message);
      }
   };

   return (
      <div>
         <Hero
            title="Contact Us"
            subtitle="Get in Touch"
            imageUrl="https://images.unsplash.com/photo-1554998448-1234ce221a00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />
         <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                  <div className="lg:mb-0 mb-10">
                     <div className="group w-full h-full">
                        <div className="relative h-full">
                           <img
                              src="https://images.unsplash.com/photo-1529940122574-0096689bc5cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Contact Us section"
                              className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                           />
                           <h2 id="contact-section-heading" className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                              Contact us
                           </h2>
                           <div className="absolute bottom-0 w-full lg:p-11 p-5">
                              <div className="bg-white rounded-lg p-6 block">
                                 <a href="javascript:;" className="flex items-center mb-6">
                                    <svg
                                       width="30"
                                       height="30"
                                       viewBox="0 0 30 30"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                                          stroke="#000000"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                       />
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                       123-456-7890
                                    </h5>
                                 </a>
                                 <a href="javascript:;" className="flex items-center mb-6">
                                    <svg
                                       width="30"
                                       height="30"
                                       viewBox="0 0 30 30"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                          stroke="#000000"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                       />
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                       example1234@gmail.com
                                    </h5>
                                 </a>
                                 <a href="javascript:;" className="flex items-center">
                                    <svg
                                       width="30"
                                       height="30"
                                       viewBox="0 0 30 30"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                                          stroke="#000000"
                                          strokeWidth="2"
                                       />
                                       <path
                                          d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                                          stroke="#4F46E5"
                                          strokeWidth="2"
                                       />
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                       654 Sycamore Avenue, Meadowville, WA 76543
                                    </h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                     <h2 className="text-zinc-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                        Send Us A Message
                     </h2>
                     <form onSubmit={handleSubmit}>
                        <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           className={`w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none pl-4 mb-10`}
                           placeholder="Name"
                           aria-invalid={!!errors.name}
                           aria-describedby="name-error"
                        />
                        {errors.name && (
                           <p id="name-error" className="text-red-500 text-sm mb-4">
                              {errors.name}
                           </p>
                        )}
                        <input
                           type="text"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           className={`w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none pl-4 mb-10`}
                           placeholder="Email"
                           aria-invalid={!!errors.email}
                           aria-describedby="email-error"
                        />
                        {errors.email && (
                           <p id="email-error" className="text-red-500 text-sm mb-4">
                              {errors.email}
                           </p>
                        )}
                        <input
                           type="text"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           className={`w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none pl-4 mb-10`}
                           placeholder="Phone"
                           aria-invalid={!!errors.phone}
                           aria-describedby="phone-error"
                        />
                        {errors.phone && (
                           <p id="phone-error" className="text-red-500 text-sm mb-4">
                              {errors.phone}
                           </p>
                        )}
                        <div className="mb-10">
                           <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                              Preferred method of communication
                           </h4>
                           <div className="flex">
                              <div className="flex items-center 11">
                                 <input
                                    id="radio-group-1"
                                    type="radio"
                                    name="preferredContact"
                                    value="email"
                                    checked={formData.preferredContact === 'email'}
                                    onChange={handleChange}
                                    className="mr-2"
                                 />
                                 <label
                                    htmlFor="radio-group-1"
                                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6 mr-4"
                                 >
                                    Email
                                 </label>
                              </div>
                              <div className="flex items-center">
                                 <input
                                    id="radio-group-2"
                                    type="radio"
                                    name="preferredContact"
                                    value="phone"
                                    checked={formData.preferredContact === 'phone'}
                                    onChange={handleChange}
                                    className=""
                                 />
                                 <label
                                    htmlFor="radio-group-2"
                                    className="px-2 flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                                 >
                                    Phone
                                 </label>
                              </div>
                           </div>
                        </div>
                        <input
                           type="text"
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           className={`w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none pl-4 mb-10`}
                           placeholder="Message"
                           aria-invalid={!!errors.message}
                           aria-describedby="message-error"
                        />
                        {errors.message && (
                           <p id="message-error" className="text-red-500 text-sm mb-4">
                              {errors.message}
                           </p>
                        )}
                        <button
                           type="submit"
                           className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-zinc-800 bg-zinc-600 shadow-sm"
                        >
                           {formStatus === 'sending' ? 'Sending...' : 'Send'}
                        </button>
                        {formStatus && formStatus !== 'sending' && (
                           <p className={`mt-4 text-sm ${formStatus === 'Email sent successfully!' ? 'text-green-500' : 'text-red-500'}`}>
                              {formStatus}
                           </p>
                        )}
                     </form>
                  </div>
               </div>
            </div>
         </section>

         <section className="p-8 w-full text-center">
            <h2 className="font-bold text-3xl">Our Location</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </section>
         <div className="h-full">
            <iframe
               data-testid="google-maps-location"
               className="w-full h-[750px]"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95373531531646!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4f3df0d%3A0x5045675218ce6e0!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1607515568895!5m2!1sen!2sus"
               height="450"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               title="Google Maps Location"
            ></iframe>
         </div>
      </div>
   );
};

export default Contact;
