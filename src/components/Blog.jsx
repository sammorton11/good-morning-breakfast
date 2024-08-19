const Blog = () => {
   const blogData = {
      sectionTitle: "Our Latest Breakfast Insights",
      posts: [
         {
            date: "Jan 01, 2023",
            title: "5 Delicious Ways to Start Your Morning",
            description: "Discover mouthwatering breakfast recipes that will kickstart your day with energy and joy.",
            imageUrl: "https://pagedone.io/asset/uploads/1696244317.png",
            linkText: "Read more.."
         },
         {
            date: "Feb 01, 2023",
            title: "The Benefits of a Balanced Breakfast",
            description: "Learn why a well-balanced breakfast is essential for your health and productivity.",
            imageUrl: "https://pagedone.io/asset/uploads/1696244340.png",
            linkText: "Read more.."
         },
         {
            date: "Mar 01, 2023",
            title: "Top 10 Breakfast Trends You Need to Try",
            description: "Explore the latest breakfast trends that are taking the culinary world by storm.",
            imageUrl: "https://pagedone.io/asset/uploads/1696244356.png",
            linkText: "Read more.."
         }
      ]
   };

   return (
      <section className="py-24">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">{blogData.sectionTitle}</h2>
            <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
               {blogData.posts.map((post, index) => (
                  <div key={index} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
                     <div className="flex items-center">
                        <img src={post.imageUrl} alt={post.title} className="rounded-t-2xl w-full" />
                     </div>
                     <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                        <span className="text-indigo-600 font-medium mb-3 block">{post.date}</span>
                        <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">{post.title}</h4>
                        <p className="text-gray-500 leading-6 mb-10">{post.description}</p>
                        <a href="javascript:;" className="cursor-pointer text-lg text-indigo-600 font-semibold">{post.linkText}</a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Blog;
