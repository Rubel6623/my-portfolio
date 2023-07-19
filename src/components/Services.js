import React from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import { BiLogoNetlify } from "react-icons/bi";
import { FaBootstrap,FaReact, FaNodeJs,FaGithub } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiCss3,SiTailwindcss,SiMongodb,SiExpress,SiFirebase,SiVercel } from "react-icons/si";



const Services = () => {
  return <section className='section' id='skills'>
    <div className="container mx-auto">
      <div>
        <div>
          <h2 className='h2 text-accent mb-20 text-center'>My Skills</h2>
        </div>
           
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
        <AiFillHtml5 className='text-4xl mt-1 text-orange-400'></AiFillHtml5>
        <p className='text-2xl font-bold'>HTML</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <SiCss3 className='text-3xl mt-1 text-sky-400'></SiCss3>
        <p className='text-2xl font-bold'>CSS</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <SiTailwindcss className='text-3xl mt-1 text-blue-400'></SiTailwindcss>
      <p className='text-2xl font-bold'>Tailwind</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <FaBootstrap className='text-3xl mt-1 text-accent'></FaBootstrap>
      <p className='text-2xl font-bold'>Bootstrap</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <SiJavascript className='text-3xl mt-1 text-yellow-300'></SiJavascript>
      <p className='text-2xl font-bold'>JavaScript</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <FaReact className='text-3xl mt-1 text-blue-400'></FaReact>
      <p className='text-2xl font-bold'>React</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <FaNodeJs className='text-3xl mt-1 text-green-600'></FaNodeJs>
      <p className='text-2xl font-bold'>Node</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <SiExpress className='text-3xl mt-1 text-gray-400'></SiExpress>
      <p className='text-2xl font-bold'>Express Js</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <SiMongodb className='text-3xl mt-1 text-green-400'></SiMongodb>
      <p className='text-2xl font-bold'>MongoDB</p>
      </motion.div>

      <motion.div 
      variants={fadeIn('down', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}
      className='flex gap-2 my-6'>
      <SiFirebase className='text-3xl mt-1 text-yellow-500'></SiFirebase>
      <p className='text-2xl font-bold'>Firebase</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <BiLogoNetlify className='text-3xl mt-1 text-sky-300'></BiLogoNetlify>
      <p className='text-2xl font-bold'>Netlify</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <SiVercel className='text-3xl mt-1 text-black'></SiVercel>
      <p className='text-2xl font-bold'>Vercel</p>
      </motion.div>

      <motion.div 
        variants={fadeIn('right', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex gap-2 my-6'>
      <FaGithub className='text-3xl mt-1'></FaGithub>
      <p className='text-2xl font-bold'>Github</p>
      </motion.div>
    
    </div>
       
      </div>
    </div>

  </section>;
};

export default Services;
