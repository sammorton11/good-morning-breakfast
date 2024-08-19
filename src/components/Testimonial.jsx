const Testimonial = ({ quote, author, image, title }) => {
   return (
      <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700 m-2 rounded-md">
         <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="my-4">{quote}</p>
         </blockquote>
         <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={image} alt={`${author}'s profile picture`} />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
               <div>{author}</div>
            </div>
         </figcaption>
      </figure>
  );
};

export default Testimonial;
