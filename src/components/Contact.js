import React from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt ,FaWhatsapp,FaTelegram} from "react-icons/fa";

const Contact = () => {
  
  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  return (
  <section className='section py-16 lg:section' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br/> together!</h2>
            <h3 className='text-2xl font-bold font-secondary mb-2 border-b w-36'>Find me On </h3>
            <div className='flex'>
              <img className='w-12 mr-3' src="https://cdn.icon-icons.com/icons2/3053/PNG/512/google_gmail_macos_bigsur_icon_190121.png" alt="" />
             <p className='mt-2'>rubelrudra27@gmail.com</p>
            </div>

            <div className='flex gap-4 mt-4'>
              <FaPhoneAlt className='text-3xl text-blue-400'></FaPhoneAlt>
              <FaWhatsapp className='text-3xl text-green-400'></FaWhatsapp>
              <FaTelegram className='text-3xl text-sky-400'></FaTelegram>
            </div>
            <p className='mt-2 mb-4'>+8801869146623</p>
          </div>
        </motion.div>

        <motion.form 
          variants={fadeIn('left',0.3)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-4 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b rounded-md py-3 outline-none w-full placeholder:text-white/70 focus:border-accent transition-all ps-2' type="text" placeholder='Your name'/>

          <input className='bg-transparent border-b rounded-md py-3 outline-none w-full placeholder:text-white/70 focus:border-accent transition-all ps-2' type="email" placeholder='Your email'/>

          <textarea className='bg-transparent border-b rounded-md py-3 outline-none w-full placeholder:text-white/70 focus:border-accent transition-all resize-none mt-4 ps-2' name="" placeholder='Your Message'></textarea>

          <input onSubmit={handleSubmit} className='btn btn-lg mt-1' type="submit" value="Send Message" />
        </motion.form>

      </div>
    </div>
  </section>
  );
};

export default Contact;
