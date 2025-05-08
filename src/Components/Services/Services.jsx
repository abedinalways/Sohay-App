import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import {
  Send,
  Smartphone,
  ShoppingBag,
  HandCoins,
  Layers3,
  Wallet,
  Lightbulb,
} from 'lucide-react';

const services = [
  { icon: Send, label: 'Send Money', color: 'text-pink-500' },
  { icon: Smartphone, label: 'Mobile Recharge', color: 'text-emerald-600' },
  { icon: ShoppingBag, label: 'Payment', color: 'text-orange-500' },
  { icon: HandCoins, label: 'Cash Out', color: 'text-cyan-500' },
  { icon: Layers3, label: 'Sohay Bundle', color: 'text-green-600' },
  { icon: Wallet, label: 'Add Money', color: 'text-purple-600' },
  { icon: Lightbulb, label: 'Pay Bill', color: 'text-gray-700' },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 font-[sora]">
        Learn More about <span className="text-purple-800">Sohay Services</span>
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        loop
        autoplay={{ delay: 2500 }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="pb-10"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center gap-2 bg-white rounded-xl shadow hover:shadow-md p-4 cursor-pointer transition"
            >
              <service.icon className={`w-8 h-8 ${service.color}`} />
              <span className="text-sm font-medium">{service.label}</span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
