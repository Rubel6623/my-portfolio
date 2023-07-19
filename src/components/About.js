import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const About = () => {
  const [ref,inView] = useInView({threshold: 0.5,
  });

  return <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top'></motion.div>
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 mt-12'>
          <h2 className='mb-4 font-semibold text-3xl'>About Me</h2>
          <TypeAnimation 
              sequence={[
              'I am available for your Project',
              2000
              ]} 
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            ></TypeAnimation>
          <p className='mb-6'>Hello! I'm Rubel Rudra, from Chittagong, Bangladesh.
          I am dedicated to learning and mastering new technologies, and coding has become my true passion.
          I invest a significant amount of time in staying up-to-date with the latest trends and honing my skills. If you have an exciting project in mind, I'm all ears!</p>

          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={18} duration={3}></CountUp> : null} +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                <p>Projects Completed</p>
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={250} duration={3}></CountUp> : null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                <p>Problem Solve</p>
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={12} duration={3}></CountUp> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                <p>Team Projects</p>
              </div>
            </div>

          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Me</button>
            <button className='btn btn-lg'>
            <Link classID='text-gradient btn-link' to='contact'>Hire Me</Link>

            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
