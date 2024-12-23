import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const banners = [
    {
      image: 'banner.png',
      title: 'Beautiful Nature'
    },
    {
      image: 'banner2.png',
      title: 'Urban Landscape'
    },
    {
      image: 'banner3.png',
      title: 'Mountain View'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${banners[currentIndex].image}')`,
            willChange: 'transform'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-8 w-full px-4 md:px-8 lg:left-8 lg:bottom-12 lg:w-auto">
        <motion.h2 
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-white text-xl md:text-2xl font-bold mb-3 text-center lg:text-left"
        >
          {banners[currentIndex].title}
        </motion.h2>
        
        <div className="w-32 md:w-44 h-[3px] bg-gray-600 rounded-full mx-auto lg:mx-0">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 8,
              ease: 'linear',
              repeat: 0
            }}
            key={`progress-${currentIndex}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;