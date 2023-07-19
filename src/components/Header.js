import React from 'react';
import logo from '../assets/logo2.png'

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href='#'>
          <img className='w-[350px]' src={logo} alt="" />
        </a>
        <button className='btn btn-sm ms-4'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
