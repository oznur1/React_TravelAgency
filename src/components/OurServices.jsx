import React from 'react'
import { FaPlane } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";


const services = [
    {
      icon:<FaPlane className="text-4xl text-blur-500"/>,
      title: "Flight Booking",
      description: "We provide easy quick flight booking services to make your travel.",
      
    },
    {
    icon:<FaHotel
    className="text-4xl text-blur-500"/>,
      title: "Hotel Booking",
      description: "Book hotels at the best prices with our exclusive deals and discounts",
      
    },
    {
     icon:<FaUmbrellaBeach className="text-4xl text-blur-500"/>,
     title:"Beach Tours", 
     description: "Enjoy relaxing beach tours with all-inclusive packages and guided tours",
      
    },
    {
    icon:<FaConciergeBell className="text-4xl text-blur-500"/>,
      title: "Concierge Services",
      description:"Get personalized concierge services for a seamless travel experience",
     
    }
  ];
  

const OurServices =()=>{
    return (
        <div className='py-12 bg-gray-100'>
         <div className='container mx-auto px-4'>
         <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service,index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-110'>
             <div className='flex justify-center mt-5 text-blue-500'>{service.icon}</div>
             <div className='p-4'>
            <h3 className='text-xl font-bold mb-2 text-red-500'>{service.title}</h3>
            <p className='text-gray-800'>{service.description}</p>
            
            
             </div>
            
            
            
            
             </div>
            ))}
        </div>
        
         </div>
        </div>
      );
      
      
      
  }

  export default OurServices;