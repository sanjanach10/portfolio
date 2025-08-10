import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I did
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am currently a Data Analyst from India working in ArcelorMittal Nippon
        Steel where I drive analytics and ML initiatives.
      </motion.p>

      <div className="relative mt-16">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-400"></div>

        {serviceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className={`mb-16 flex items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Left Side - Company */}
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                <a href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className='hover:underline hover:text-blue-500 transition-colors duration-200'>
                {item.company}
                </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/70">
                {item.role}
              </p>
            </div>

            {/* Center Node */}
            <div className="relative w-8 h-8 bg-white border-4 border-gray-500 rounded-full z-10"></div>

            {/* Right Side - Points */}
            <div className="w-1/2 pl-8">
              <ul className="list-disc pl-4 text-gray-600 dark:text-white/80 text-sm space-y-2">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// const Services = () => {
//   return (
//     <motion.div 
//     initial={{ opacity: 0 }} 
//     whileInView={{ opacity: 1 }} 
//     transition={{ duration: 1 }}
//     id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

//        <motion.h4 
//        initial={{ y: -20, opacity: 0 }} 
//        whileInView={{ y: 0, opacity: 1 }} 
//        transition={{ delay: 0.3, duration: 0.5 }}
//        className='text-center mb-2 text-lg font-Ovo'>
//        What I did</motion.h4>

//       <motion.h2 
//       initial={{ y: -20, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.5 }}
//       className='text-center text-5xl font-Ovo'>
//       My Experience</motion.h2>

//       <motion.p 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.7, duration: 0.5 }}
//       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//         I am currently a Data Analyst from India working in ArcelorMittal Nippon Steel where I drive analytics and ML initiatives.</motion.p>

//         <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className='grid grid-cols-auto gap-6 my-10'>
//             {serviceData.map(({icon, title, description, link}, index)=>(
//                 <motion.div 
//                 whileHover={{scale: 1.05}}
//                 key={index}
//                 className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
//                     <Image src={icon} alt='' className='w-10'/>
//                     <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
//                     <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
//                         {description}
//                     </p>
//                     <a href={link} className='flex items-center gap-2 text-sm mt-5'>
//                         Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
//                     </a>
//                 </motion.div>
//             ))}
//         </motion.div>

//     </motion.div>
//   )
// }

export default Services
