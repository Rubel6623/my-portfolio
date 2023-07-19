import React from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import img1 from '../assets/projects.png'
import img2 from '../assets/projects-2.png'
import img3 from '../assets/projects-3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10 '>
        <motion.div 
          variants={fadeIn('left',0.5)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br/>Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorum, consequuntur doloremque quis perspiciatis aperiam amet, pariatur ut cum temporibus voluptatem.</p>
            <button className='btn btn-sm mt-6'>View all Projects</button>
          </div>
          <div 
            className='group w-[450px] h-[300px] relative border-2 overflow-hidden border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/80 w-full h-full absolute z-40 translate-all duration-300'></div>
            <img className='group-hover:scale-125 translate-all duration-500' src={img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 translation-all duration-500 z-50'>
              <span className=' text-gradient'>Front-end Website</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 translation-all duration-700 z-50'>
              <span className='text-3xl text-white'>Chef Hut</span>
            </div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-6 translation-all duration-700 z-50'>
              <a className='btn btn-sm py-1' href="https://incredible-semifreddo-159c74.netlify.app/">Live Ste</a>
            </div>

            
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn('right',0.5)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='flex flex-1 flex-col gap-y-10'>
        <div className='group w-[450px] h-[300px] relative border-2 overflow-hidden border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Full Stack-MERN</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Toy Zone</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-6 translation-all duration-700 z-50'>
              <a className='btn btn-sm py-1' href="https://toys-store-83949.web.app/">Live Ste</a>
            </div>
          </div>

          <div className='group w-[450px] h-[300px] relative border-2 overflow-hidden border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className=' text-gradient'>Full Stack-MERN</span>
              </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Music Master</span>
            </div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-6 translation-all duration-700 z-50'>
              <a className='btn btn-sm py-1' href="https://summer-camp-school-60642.web.app/">Live Ste</a>
            </div>

          </div>
        </motion.div>
      </div>    
    </div>
    </section>;
};

export default Work;
