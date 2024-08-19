import Testimonial from "./Testimonial";

const Testimonials = () => {
   const testimonialsData = [
      {
         quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
         author: "John Doe",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
         title: "Amazing experience!"
      },
      {
         quote: "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
         author: "Jane Smith",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
         title: "Highly recommend!"
      },
      {
         quote: "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.",
         author: "Alice Johnson",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
         title: "Exceptional quality!"
      },
      {
         quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
         author: "Bob Brown",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
         title: "Great service!"
      }
   ];

   return (
      <section className="dark:bg-zinc-900 w-full flex justify-center">
         <div className="max-w-screen-xl">
            <div className="py-8 px-4 mx-auto text-center lg:py-48 lg:px-6">
               <div className="mx-auto max-w-screen-sm">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                  <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                     Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
                  </p>
               </div>
               <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                  {testimonialsData.map((testimonial, index) => (
                     <Testimonial
                        key={index}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        image={testimonial.image}
                        title={testimonial.title}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Testimonials;
