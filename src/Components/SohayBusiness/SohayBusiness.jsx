import { motion } from 'framer-motion';
import {
  Building2,
  Store,
  School,
  Landmark,
  HandCoins,
  Users,
} from 'lucide-react';

const services = [
  { icon: Store, label: 'Online Business', color: 'text-purple-600' },
  { icon: Landmark, label: 'Merchant', color: 'text-purple-600' },
  { icon: School, label: 'Educational Institutions', color: 'text-purple-600' },
  { icon: Building2, label: 'Corporate & Enterprise', color: 'text-purple-600' },
  { icon: Users, label: 'NGO', color: 'text-purple-600' },
  { icon: HandCoins, label: 'Microfinance', color: 'text-purple-600' },
];

export default function SohayBusiness() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-2 items-center md:mr-3">
      
      <div>
        <h2 className="text-3xl font-bold mb-4 text-purple-900 font-[sora]">
          Sohay for Business
        </h2>
        <p className="text-gray-500 font-semibold font-[Mulish] mb-10 max-w-lg">
          The diverse range of financial solutions offered by Sohay ensures
          fast, easy and safe transactions for your business. Make your
          day-to-day operations more efficient with Sohay.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={idx}
                className="border border-purple-200 p-4 rounded-lg shadow-sm hover:shadow-md bg-white cursor-pointer flex flex-col items-center text-center gap-2"
              >
                <Icon className={`w-8 h-8 ${service.color}`} />
                <span className="text-sm font-medium text-purple-800">
                  {service.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

     
      <div className="hidden lg:flex justify-center items-center">
        <img
          src="https://i.ibb.co.com/PzPf6v49/sohay.png"
          alt="Sohay business"
          className="max-w-md w-86 rounded-2xl"
        />
      </div>
    </section>
  );
}
