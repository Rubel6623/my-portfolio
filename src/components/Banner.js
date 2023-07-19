import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import {fadeIn} from '../variants';
import { motion } from "framer-motion";
import image from '../assets/avatar.png'
import resume from '../assets/Rubel_Rudra_Resume.pdf';


const Banner = () => {

  const handleDownload =()=>{
    const resumeURL = 'https://doc-10-9k-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/b0i6p9l91l8oqka8jpk584g1ddsob8rf/mjv9mis6k268m48fep4dl9kej4lh9ugs/1688393700000/3/117655716954444096568/APznzabytGPmi63vFC4iFqHCKmL05WP7H68RiWkS2bkxxM67L6J-K9bbXfpRELM7ePtwxwUiVn0XmrjJuaWwuaKz3YHNueF1zGjI2y7L3-7hM74gPCPvyacbEo0fdpJKPml2rfjaxiIcptEL-6dQB2Re7mUDzQmrSpQZdSNRXDx5XoqHYcTq05l_nywduxEjqnVytEXzVh8xyBYHbu5xW0HsX2Eoqy4vVSs9ZoANU8QInCkcTPL5-eqemnTUJCNjh1K-6dku8awmwEW_PzFvY3Sit-FGHxSUDUWnS2xREPBhFXDo5SFyrJoEBkDDxfzz8i9jxVn1YYf15O0Zz4M7q2M3TYDD3wSWisTuaXQrjXpHrcEm2y209Z9AiIHAEPLdZZbAAQ8TzzPUSpaJlFP2itrKWdibYJdqhw==?authuser=1&nonce=94odugb5ddqmg&user=117655716954444096568&hash=umkvkohvpi3443unht82bd7f5u8vrfhq';

    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'resume.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  return <section className='section min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>        
        <div className='flex-1 text-center font-secondary lg:text-left lg:mt-52'>
          <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>RUBEL<span>  RUDRA</span></motion.h1>
          <motion.div
            variants={fadeIn('up',0.4)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span> 
            <TypeAnimation 
              sequence={[
              'Web Developer',
              2000,
              'Front-end Developer',
              2000,
              'MERN Stack Developer',
              2000,
              ]} 
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            ></TypeAnimation>
          </motion.div>
          <motion.p 
            variants={fadeIn('up',0.5)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='max-w-lg mx-auto lg:mx-0'>I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for learning, keen attention to detail, and a strong commitment to my work.
          Feel free to explore my resume below to gain a better understanding of my skills and experience.</motion.p>
          <motion.div 
            variants={fadeIn('up',0.6)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mt-6'
          >
            <a href={resume} download='Resume' className='btn btn-lg py-3 mt-12'>My Resume</a>
            <a className='ms-6 text-gradient btn-link '>
              Hire Me
            </a>
          </motion.div>
          <motion.div 
            variants={fadeIn('up',0.7)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mt-8'>
            <h2>FIND WITH ME</h2>
            <div className='flex text-3xl gap-6 mt-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/Rubel6623"><FaGithub></FaGithub></a>
            <a href="https://www.linkedin.com/in/rubel-rudra-43ab54240/"><FaLinkedin></FaLinkedin></a>
            <a href="https://www.facebook.com/rubelrudraomi"><FaFacebook></FaFacebook></a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn('down',0.5)} 
          initial="hidden"
          whileInView={'show'}
          
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={image} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
