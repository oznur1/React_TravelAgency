const says = [
    {
      image: "public/me.png",
      title: "John Doe",
      city: "New York,USA",
      description: "This travel agency provided excellent service and helped us plan the perfect vocation.Highly recommend",
      
    },
    {
     image: "public/me2.png",
      title: "Jane Smith",
      city:" Tokyo,Skytree",
      description: "This travel agency provided excellent service and helped us plan the perfect vocation.Highly recommend",
      
    },
    {
      image: "public/me.png",
      title: "Alice Johnson",
      city:"Bali,Indonesia",
      description: "This travel agency provided excellent service and helped us plan the perfect vocation.Highly recommend",
      
    },
    {
        image: "public/me2.png",
        title: "John Doe",
        city:"Bali,Indonesia",
        description: "This travel agency provided excellent service and helped us plan the perfect vocation.Highly recommend",
        
      },
      {
        image: "public/me.png",
        title: "Alice Johnson",
        city:"Bali,Indonesia",
        description: "This travel agency provided excellent service and helped us plan the perfect vocation.Highly recommend",
        
      },
      {
        image: "public/me2.png",
        title: "John Doe",
        city:"Bali,Indonesia",
        description: "This travel agency provided excellent service and helped us plan the perfect vocation.Highly recommend",
        
      },
    
  ];
  

  import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const ClientSay = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {says.map((say, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg text-center">
                <div className="flex justify-center">
                  <img
                    src={say.image}
                    alt={say.title}
                    className="w-32 h-32 object-cover rounded-full mt-4 mb-4 shadow-md"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{say.title}</h3>
                  <p className="text-gray-600 italic">"{say.description}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

  

  export default ClientSay;
