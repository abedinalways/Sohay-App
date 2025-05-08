import cash from '../../assets/cash.png';
import Pay from '../../assets/PAY1.png';
import bill from '../../assets/bill.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Banner() {
  return (
    <div className='bg-base-200 pb-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={bill} alt="" /></SwiperSlide>
        <SwiperSlide><img src={cash} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Pay} alt="" /></SwiperSlide>

      </Swiper>
      <div className='flex justify-center mt-3 mb-2 items-center'>
        <button className='btn btn-wide bg-white text-purple-600 font-bold font-[sora] border-2 border-purple-300 rounded-2xl text-xl hover:bg-purple-600 hover:text-white py-6'>Learn More</button>
      </div>
    </div>
  );
}
