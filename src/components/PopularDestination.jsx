import React from 'react'

const destination = [
    {
      image: "public/gal1.jpg",
      title: "Paris,France",
      description: "Explore the charming streets of Paris, visit the Eiffel Tower, and indulge in world-class cuisine.",
      
    },
    {
     image: "public/gal2.jpg",
      title: "Tokyo,Skytree",
      description: "Experience the vibrant culture, cutting-edge technology, and traditional temples of Tokyo.",
      
    },
    {
      image: "public/gal3.png",
      title: "Bali,Indonesia",
      description: "Relax on the beautiful beaches of Bali, explore lush jungles, and immerse yourself in local traditions.",
      
    },
    {
       image: "public/gal4.jpg",
      title: "New York,USA",
      description: "Discover the energy of New York City with its iconic landmarks, shopping, and entertainment.",
     
    }
  ];
  

const PopularDestination =()=>{
    return (
        <div className='py-12 bg-gray-100'>
         <div className='container mx-auto px-4'>
         <h2 className='text-3xl font-bold text-center mb-8'>Popular Destination</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destination.map((city,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
             <img src={city.image} alt="" className='w-full h-48 object-cover transform transition duration-300 hover:scale-110' />
             <div className='p-4'>
            <h3 className='text-xl font-bold mb-2'>{city.title}</h3>
            <p className='text-gray-600'>{city.description}</p>
            
            
             </div>
            
            
            
            
             </div>
            ))}
        </div>
        
         </div>
        </div>
      );
      
      
      
  }

  export default PopularDestination;