import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper -mt-[70px] "
      >
        <SwiperSlide>
          <div className="slide1 slide ">
            <div className='w-10/12 mx-auto pt-[60%] md:pt-[20%]'>
              <h1 className='text-white text-xl md:text-4xl font-bold uppercase'>WELCOME TO <span className='text-[#1abc9c]'>Profit</span>Pulse</h1>
              <p className='text-white text-2xl md:text-4xl font-bold uppercase mt-4'>WE ARE STRIVING TO BE THE <span className='text-[#1abc9c]'>FASTEST PAYING</span></p>
              <h3 className='text-white text-2xl md:text-4xl font-bold uppercase mt-4'>AFFILIATE NETWORK OF THE INDUSTRY</h3>
              <div className='mt-5'>
                <button className='btn rounded-none bg-[#1abc9c] px:6 md:px-8 py-2 text-[13px] text-white border-0 mr-5 uppercase hover:text-black'>Learn More!</button>
                <Link to="/register" className='btn btn-outline text-white uppercase rounded-none px-8 md:px-10'>Sign Up</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide slide2'>
          <div className='w-10/12 mx-auto pt-[60%] md:pt-[20%]'>
              <h1 className='text-white text-xl md:text-4xl font-bold uppercase'>WELCOME TO <span className='text-[#1abc9c]'>Profit</span>Pulse</h1>
              <p className='text-white text-2xl md:text-4xl font-bold uppercase mt-4'>WE ARE STRIVING TO BE THE <span className='text-[#1abc9c]'>BEST CONVERTING</span></p>
              <h3 className='text-white text-2xl md:text-4xl font-bold uppercase mt-4'>AFFILIATE NETWORK OF THE INDUSTRY</h3>
              <div className='mt-5'>
                <button className='btn rounded-none bg-[#1abc9c] px:6 md:px-8 py-2 text-[13px] text-white border-0 mr-5 uppercase hover:text-black'>Learn More!</button>
                <Link to="/register" className='btn btn-outline text-white uppercase rounded-none px-8 md:px-10'>Sign Up</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide slide3'>
            <div className='w-10/12 mx-auto pt-[60%] md:pt-[20%]'>
              <h1 className='text-white text-xl md:text-4xl font-bold uppercase'>WELCOME TO <span className='text-[#1abc9c]'>Profit</span>Pulse</h1>
              <p className='text-white text-2xl md:text-4xl font-bold uppercase mt-4'>WE ARE STRIVING TO BE THE <span className='text-[#1abc9c]'>HIGHEST PAYING</span></p>
              <h3 className='text-white text-2xl md:text-4xl font-bold uppercase mt-4'>AFFILIATE NETWORK OF THE INDUSTRY</h3>
              <div className='mt-5'>
                <button className='btn rounded-none bg-[#1abc9c] px:6 md:px-8 py-2 text-[13px] text-white border-0 mr-5 uppercase hover:text-black'>Learn More!</button>
                <Link to="/register" className='btn btn-outline text-white uppercase rounded-none px-8 md:px-10'>Sign Up</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
