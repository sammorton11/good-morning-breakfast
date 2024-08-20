import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';

const Gallery = () => {
   const [filteredImages, setFilteredImages] = useState([]);
   const [activeFilter, setActiveFilter] = useState('all');

   const images = [
      { 'imageUrl': 'https://images.unsplash.com/photo-1551740527-bc191afdd2ef?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'food' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1438401817917-ee9dc33fe6af?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'food' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1521962347155-662d077f81e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'food' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'food' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1455099229380-7b52707e356a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'food' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1514994960127-ed3ef9239d11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'drink' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1541750072-95ea63c38b71?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'drink' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1594261956806-3ad03785c9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'drink' },
      { 'imageUrl': 'https://images.unsplash.com/photo-1712056407267-1a38c7024a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'type': 'drink' },
   ];

   const [amount, setAmount] = useState(images.length);

   useEffect(() => {
      setFilteredImages(images); // Initially show all images
   }, []);

   function filterByType(type) {
      setActiveFilter(type);
      setFilteredImages(images.filter(image => image.type === type));
   }

   function resetImages() {
      setActiveFilter('all');
      setFilteredImages(images);
   }

   useEffect(() => {
      setAmount(filteredImages.length);
   }, [filteredImages]);


   return (
      <div>
         <Hero
            title="Our Gallery"
            subtitle="See Our Work"
            imageUrl="https://images.unsplash.com/photo-1604882356682-8ec3d3037c82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />
         <div className="w-full flex flex-row justify-start px-12 pt-10 pb-3 gap-4 items-center">
            <button
               className={`${
                  activeFilter === 'all' ? 'bg-indigo-300' : 'bg-zinc-300'
               } text-zinc-700 font-thin py-2 px-8 rounded`}
               onClick={resetImages}
            >
               All
            </button>
            <button
               className={`${
                  activeFilter === 'food' ? 'bg-indigo-300' : 'bg-zinc-300'
               } text-zinc-700 font-thin py-2 px-8 rounded`}
               onClick={() => filterByType('food')}
            >
               Food
            </button>
            <button
               className={`${
                  activeFilter === 'drink' ? 'bg-indigo-300' : 'bg-zinc-300'
               } text-zinc-700 font-thin py-2 px-8 rounded`}
               onClick={() => filterByType('drink')}
            >
               Drink
            </button>
            <p className="text-gray-500 text-sm">Results: {amount}</p>
         </div>
         <section className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {filteredImages.map((image, index) => (
                  <img src={image.imageUrl} alt="Placeholder" key={index} className="gallery-img fade-in-list w-full h-full" />
               ))}
            </div>
         </section>
      </div>
   );
};

export default Gallery;
