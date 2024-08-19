import React from 'react';
import Hero from '../components/Hero';

const Services = () => {
   const heroData = {
      title: "Our Breakfast Offerings",
      subtitle: "Delicious Start to Your Day",
      imageUrl: "https://images.unsplash.com/photo-1720414087171-d5058f5e1400?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   };

   const featuresData = {
      sectionTitle: "Why Choose Us?",
      sectionSubtitle: "Our Special Features",
      features: [
         {
            title: "Fresh Ingredients",
            description: "We use only the freshest ingredients to prepare your breakfast. From farm-fresh eggs to organic vegetables, quality is our top priority.",
            iconColor: "bg-indigo-50",
            icon: (
               <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
               </svg>
            )
         },
         {
            title: "Quick Service",
            description: "Whether you're on the go or have time to spare, our quick service ensures you get your breakfast just the way you like it, without the wait.",
            iconColor: "bg-pink-50",
            icon: (
               <svg className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z" strokeWidth="2"></path>
                  <path d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z" strokeWidth="2"></path>
                  <path d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z" strokeWidth="2"></path>
               </svg>
            )
         },
         {
            title: "Cozy Atmosphere",
            description: "Our breakfast place offers a warm and inviting atmosphere, perfect for a relaxed start to your day or a casual meeting with friends.",
            iconColor: "bg-teal-50",
            icon: (
               <svg className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z" strokeWidth="2" strokeLinecap="round"></path>
               </svg>
            )
         },
         {
            title: "Variety of Options",
            description: "From classic favorites to unique breakfast creations, we offer a variety of options to satisfy every palate.",
            iconColor: "bg-orange-50",
            icon: (
               <svg className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z" strokeWidth="2" strokeLinecap="round"></path>
               </svg>
            )
         }
      ]
   };

   const howItWorksData = {
      sectionTitle: "How It Works",
      sectionSubtitle: "Our Process",
      steps: [
         {
            title: "Order Placement",
            description: "Choose your favorite items from our menu and place your order at the counter or online.",
            stepNumber: "1"
         },
         {
            title: "Preparation",
            description: "Our chefs prepare your meal with care, ensuring everything is cooked to perfection and presented beautifully.",
            stepNumber: "2"
         },
         {
            title: "Enjoy",
            description: "Pick up your order or have it delivered to your table. Enjoy a delicious breakfast to kickstart your day!",
            stepNumber: "3"
         }
      ]
   };

   const integrationsData = {
      sectionTitle: "Our Collaborations",
      sectionSubtitle: "Trusted Partners",
      partners: [
         {
            name: "Local Farms",
            description: "We source fresh produce and dairy products from local farms to ensure the highest quality in every dish.",
            iconColor: "bg-gray-100",
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#139EF3" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.9999 7.23401C20.5183 7.23401 20.9386 7.64994 20.9386 8.16302V8.90622H27.5235C29.2271 8.90622 30.6081 10.2729 30.6081 11.9587V14.742C30.6081 15.0588 30.7352 15.3626 30.9616 15.5867L31.4827 16.1023C32.0588 16.6724 32.0588 17.5968 31.4827 18.1669L30.9616 18.6825C30.7352 18.9065 30.6081 19.2103 30.6081 19.5271V22.0981C30.6081 22.6112 30.1878 23.0271 29.6693 23.0271C29.1508 23.0271 28.7305 22.6112 28.7305 22.0981V19.5271C28.7305 18.7175 29.0555 17.9411 29.634 17.3687L29.8705 17.1346L29.634 16.9005C29.0555 16.328 28.7305 15.5516 28.7305 14.742V11.9587C28.7305 11.299 28.1901 10.7642 27.5235 10.7642H12.4762C11.8096 10.7642 11.2692 11.299 11.2692 11.9587V14.742C11.2692 15.5516 10.9442 16.328 10.3657 16.9005L10.1292 17.1346L10.3657 17.3687C10.9442 17.9411 11.2692 18.7175 11.2692 19.5271V21.9654C11.2692 22.6251 11.8096 23.1599 12.4762 23.1599H25.5118C27.2154 23.1599 28.5964 24.5265 28.5964 26.2123V30.9901C28.5964 32.6759 27.2154 34.0425 25.5118 34.0425H14.8902C13.1867 34.0425 11.8056 32.6759 11.8056 30.9901V28.7604C11.8056 28.2474 12.2259 27.8314 12.7444 27.8314C13.2629 27.8314 13.6832 28.2474 13.6832 28.7604V30.9901C13.6832 31.6497 14.2236 32.1845 14.8902 32.1845H25.5118C26.1784 32.1845 26.7188 31.6497 26.7188 30.9901V26.2123C26.7188 25.5527 26.1784 25.0179 25.5118 25.0179H12.4762C10.7727 25.0179 9.39162 23.6512 9.39162 21.9654V19.5271C9.39162 19.2103 9.26447 18.9065 9.03809 18.6825L8.51704 18.1669C7.94094 17.5968 7.94094 16.6724 8.51704 16.1023L9.03809 15.5867C9.26447 15.3626 9.39162 15.0588 9.39162 14.742V11.9587C9.39162 10.2729 10.7727 8.90622 12.4762 8.90622H19.0611V8.16302C19.0611 7.64994 19.4814 7.23401 19.9999 7.23401Z" fill="white" />
                  <path d="M16.3829 17.4469C17.2055 17.4469 17.8723 16.6848 17.8723 15.7447C17.8723 14.8047 17.2055 14.0426 16.3829 14.0426C15.5604 14.0426 14.8936 14.8047 14.8936 15.7447C14.8936 16.6848 15.5604 17.4469 16.3829 17.4469Z" fill="white" />
                  <path d="M23.6168 17.4469C24.4394 17.4469 25.1062 16.6848 25.1062 15.7447C25.1062 14.8047 24.4394 14.0426 23.6168 14.0426C22.7943 14.0426 22.1274 14.8047 22.1274 15.7447C22.1274 16.6848 22.7943 17.4469 23.6168 17.4469Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 5.34047C19.5769 5.34047 19.234 5.71198 19.234 6.17025C19.234 6.62853 19.5769 7.00004 20 7.00004C20.423 7.00004 20.7659 6.62853 20.7659 6.17025C20.7659 5.71198 20.423 5.34047 20 5.34047ZM17.4468 6.17025C17.4468 4.64266 18.5899 3.4043 20 3.4043C21.4101 3.4043 22.5532 4.64266 22.5532 6.17025C22.5532 7.69785 21.4101 8.93621 20 8.93621C18.5899 8.93621 17.4468 7.69785 17.4468 6.17025Z" fill="white" />
               </svg>
            )
         },
         {
            name: "Gourmet Coffee Suppliers",
            description: "We partner with top coffee roasters to bring you the finest brews, ensuring your morning coffee is as perfect as your breakfast.",
            iconColor: "bg-gray-50",
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <mask id="mask0_30907_1209" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                     <path d="M0 0H40V40H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_30907_1209)">
                     <path fillRule="evenodd" clipRule="evenodd" d="M35.8412 19.6002C35.3062 21.8861 34.4391 24.1156 33.2644 26.2271C32.5143 27.5754 31.6696 28.8168 30.7423 29.9407C31.8008 25.0952 31.0844 19.1592 28.4878 13.5926C28.3052 13.2012 27.8834 13.0715 27.5497 13.3057L19.4634 18.9806C19.1539 19.1981 19.0596 19.656 19.2531 20.0038L20.4387 22.1347C20.6321 22.4826 21.04 22.5882 21.3497 22.371L26.5905 18.6927C26.7661 19.258 26.9236 19.8271 27.0577 20.4002C27.562 22.554 27.7499 24.6557 27.6159 26.6473C27.3669 30.3546 26.0231 33.2433 23.8319 34.7811C22.7376 35.5492 21.4662 35.9559 20.0844 36.0001C20.0544 35.9995 20.0239 36.0006 19.9939 36.0001C19.9681 36.0001 19.942 35.9995 19.9162 36.0001C18.5343 35.956 17.2627 35.5492 16.1681 34.7809C13.977 33.2433 12.633 30.3546 12.384 26.6473C12.2502 24.6557 12.4381 22.554 12.9422 20.4002C13.4774 18.1143 14.3442 15.8848 15.5191 13.7733C16.6938 11.6618 18.0979 9.8093 19.6928 8.2671C21.1953 6.81401 22.7949 5.70305 24.4472 4.96508C27.5234 3.59119 30.4241 3.68163 32.6153 5.21945C34.8064 6.75708 36.1504 9.64575 36.3994 13.3531C36.5333 15.3447 36.3455 17.4464 35.8412 19.6002ZM6.73568 26.2271C5.56089 24.1156 4.69395 21.8861 4.15876 19.6002C3.6546 17.4464 3.46677 15.3447 3.60053 13.3531C3.84972 9.64575 5.19353 6.75708 7.38478 5.21945C9.57586 3.68163 12.4767 3.59119 15.5527 4.96508C16.0159 5.17185 16.4741 5.41232 16.9279 5.67792C15.2883 7.34654 13.7819 9.35178 12.5005 11.655C9.10713 17.7539 8.07507 24.5284 9.25817 29.9413C8.33088 28.8174 7.48598 27.5756 6.73568 26.2271ZM34.5014 1.82909C30.3442 -1.08852 24.8719 -0.395104 19.9986 3.05142C15.1262 -0.393962 9.6552 -1.08795 5.4985 1.82928C-1.0688 6.43817 -1.86641 18.3101 3.71699 28.3456C7.83401 35.7451 14.2703 40.0796 20.0003 39.9989C25.73 40.0792 32.1661 35.7449 36.283 28.3456C41.8664 18.3101 41.0689 6.43817 34.5014 1.82909Z" fill="#1BDBDB" />
                  </g>
               </svg>
            )
         },
         {
            name: "Bakery Partners",
            description: "We work with local bakeries to bring you freshly baked bread, pastries, and other treats that perfectly complement your breakfast.",
            iconColor: "bg-gray-50",
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_30847_81906)">
                     <path d="M8.06732 0.0419922H32.1145C36.6002 0.0419922 40.128 2.7874 39.9594 6.15749V26.6194C39.9594 29.9843 36.4383 32.7297 32.1078 32.7297H26.8194L29.7064 39.9633L15.7638 32.7297H8.07406C3.5884 32.7297 0.0605565 29.9843 0.0605565 26.4934V6.16274C0.0538303 2.7874 3.58166 0.0419922 8.06732 0.0419922ZM17.4096 22.4987C16.5935 22.147 15.9392 21.6378 15.4467 20.9659C14.9543 20.294 14.7115 19.4856 14.7115 18.5459V7.64305C14.7115 7.47507 14.6643 7.34384 14.5631 7.25985C14.4687 7.17061 14.3068 7.12862 14.0774 7.12862H10.4956C10.4147 7.12862 10.3338 7.13912 10.2596 7.16536C10.1854 7.19161 10.1179 7.22835 10.0707 7.28085C9.95602 7.38059 9.89531 7.51182 9.90205 7.6483V18.5039C9.90205 20.2415 10.3607 21.6955 11.2781 22.8766C12.1955 24.0525 13.4231 24.9291 14.9746 25.5066C16.5193 26.084 18.2461 26.3675 20.1483 26.3675C22.0572 26.3675 23.784 26.084 25.3287 25.5223C26.8734 24.9606 28.101 24.0945 29.0184 22.9186C29.9358 21.7428 30.3945 20.2835 30.3945 18.5407V7.65355C30.3945 7.58531 30.381 7.51707 30.3472 7.44883C30.3135 7.38583 30.2663 7.32284 30.2056 7.2756C30.0774 7.17586 29.9088 7.12337 29.693 7.12337H26.2798C26.0774 7.12337 25.9088 7.17061 25.7874 7.27035C25.6592 7.37009 25.5985 7.49607 25.5985 7.65355V18.5459C25.5985 19.4226 25.3557 20.2047 24.87 20.8819C24.3843 21.5643 23.73 22.0892 22.9004 22.462C22.0707 22.8347 21.1533 23.0184 20.155 23.0184C19.1365 23.0236 18.2258 22.8504 17.4096 22.4987Z" fill="#2B52FD" />
                  </g>
                  <defs>
                     <clipPath id="clip0_30847_81906">
                        <rect width="40" height="40" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
            )
         }
      ]
   };

   return (
      <div>
         <Hero {...heroData} />
         <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <div className="mb-14 text-center">
                  <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">{featuresData.sectionTitle}</span>
                  <h2 className="text-4xl text-center font-bold text-gray-900 py-5">{featuresData.sectionSubtitle}</h2>
                  <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                     Discover the unique features that make our breakfast place stand out.
                  </p>
               </div>
               <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                  {featuresData.features.map((feature, index) => (
                     <div key={index} className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                        <div className={`${feature.iconColor} rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600`}>
                           {feature.icon}
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">{feature.title}</h4>
                        <p className="text-sm font-normal text-gray-500">{feature.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
               <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                  <div className="w-full flex-col justify-start items-center gap-3 flex">
                     <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">{howItWorksData.sectionTitle}</h2>
                     <p className="max-w-2xl text-center text-gray-400 text-base font-normal leading-relaxed">{howItWorksData.sectionSubtitle}</p>
                  </div>
                  <div className="w-full justify-start items-start gap-8 grid md:grid-cols-3 grid-cols-1">
                     {howItWorksData.steps.map((step, index) => (
                        <div key={index} className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                           <div className="w-full flex justify-between relative">
                              <h4 className="text-gray-900 text-xl font-semibold leading-8">{step.title}</h4>
                              <h3 className="text-gray-100 text-7xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">{step.stepNumber}</h3>
                           </div>
                           <p className="text-gray-400 text-base font-normal leading-relaxed">{step.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <section className="py-24 relative bg-white">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
               <div className="w-full flex-col justify-start items-start lg:gap-11 gap-8 inline-flex">
                  <div className="flex-col justify-start items-center gap-2.5 flex">
                     <h2 className="text-center text-zinc-900 text-3xl font-bold font-manrope leading-normal">{integrationsData.sectionTitle}</h2>
                     <p className="text-center text-zinc-900 text-lg font-normal leading-8">{integrationsData.sectionSubtitle}</p>
                  </div>
                  <div className="flex-col justify-start items-start gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                     {integrationsData.partners.map((partner, index) => (
                        <div key={index} className="px-6 py-8 bg-gray-100 rounded-2xl border border-gray-500 justify-start items-start gap-2.5 flex">
                           <div className="flex-col justify-start items-start gap-4 inline-flex">
                              {partner.icon}
                              <h4 className="text-zinc-900 text-lg font-semibold leading-8">{partner.name}</h4>
                              <p className="text-zinc-800 text-sm font-normal leading-snug">{partner.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Services;
