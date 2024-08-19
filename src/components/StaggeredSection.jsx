const StaggeredSection = () => {
   return (
      <section class="w-full mx-auto py-10 bg-zinc-100 dark:bg-zinc-900 dark:text-white">
         <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
            <div class="lg:w-[40%] xs:w-full">
               <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=3047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billboard image" />
            </div>
            <div class="lg:w-[40%] sm:w-full xs:w-full bg-gray-50 dark:bg-zinc-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md shadow-zinc-400 shadow">
               <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur</h2>
               <p class="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                  veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                  sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                  nobis tempora possimus ullam!</p>
            </div>
         </div>
         <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
            <div class="md:hidden sm:block xs:block xs:w-full">
               <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="billboard image" />
            </div>
            <div class="lg:w-[40%] xs:w-full bg-gray-100 dark:bg-zinc-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md shadow-zinc-400 shadow">
               <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Lorem ipsum dolor sit amet consectetur</h2>

               <p class="text-md mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore placeat assumenda nam
                  veritatis, magni doloremque pariatur quos fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
                  sed necessitatibus aliquam error laborum delectus quaerat. Delectus hic error eligendi sed repellat natus fuga
                  nobis tempora possimus ullam!</p>
            </div>
            <div class="md:block sm:hidden xs:hidden lg:w-[40%] xs:w-full">
               <img class="lg:rounded-t-lg xs:rounded-sm" src="https://images.unsplash.com/photo-1633327760690-d9bb0513f942?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="billboard image" />
            </div>
         </div>
      </section>

   );
}

export default StaggeredSection;
