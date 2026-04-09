'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav 
      className="fixed top-0 w-full bg-white shadow-sm z-50"
      style={{
        width: '1440px',
        height: '89px',
        opacity: 1,
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <div 
          style={{
            width: '125px',
            height: '45px',
            top: '24px',
            left: '100px',
            opacity: 1,
            position: 'absolute'
          }}
        >
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google full logo"
            width={125}
            height={45}
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:block">
        <div 
          className="flex items-center"
          style={{
            width: '481px',
            height: '41px',
            top: '24px',
            left: '433px',
            gap: '25px',
            opacity: 1,
            position: 'absolute'
          }}
        >
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors relative group" style={{height: '27px', width: '87px'}}>
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors relative group" style={{height: '27px', width: '87px'}}>
            About
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors relative group" style={{height: '27px', width: '87px'}}>
            Services
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors relative group" style={{height: '27px', width: '87px'}}>
            Pricing
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors relative group" style={{height: '27px', width: '87px'}}>
            Blog
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors relative group" style={{height: '27px', width: '87px'}}>
            Resources
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
          </a>
        </div>
      </div>

      <div className="flex-shrink-0">
        <button 
          className="hover:bg-pink-700 text-white transition-colors"
          style={{
            width: '201px',
            height: '50px',
            top: '19px',
            left: '1139px',
            opacity: 1,
            backgroundColor: 'rgba(237, 60, 106, 1)',
            borderRadius: '5px',
            gap: '10px',
            paddingTop: '18px',
            paddingRight: '24px',
            paddingBottom: '18px',
            paddingLeft: '24px',
            position: 'absolute',
            fontFamily: 'DM Sans',
            fontWeight: '700',
            fontStyle: 'Bold',
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}
        >
          Schedule A Meeting {'→'}
        </button>
      </div>
    </nav>
  );
}
