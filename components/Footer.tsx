import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#D6D6D6]">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-[100px] py-[80px] flex justify-between">
        
        {/* Left Section */}
        <div className="max-w-[396px]">
          {/* Logo */}
          <Image
            src="/icons/Google.png"
            alt="Google Logo"
            width={106}
            height={38}
            className="mb-6"
          />

          {/* Description */}
          <p className="text-gray-600 text-[14px] leading-[22px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
            aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
            volutpat ullamcorper amet adipiscing fermentum.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-gray-700 text-[18px]">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-[120px]">
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-[16px] leading-[24px] mb-4">
              Company
            </h3>
            <ul className="text-[14px] leading-[40px] text-gray-600 font-medium">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-[16px] leading-[24px] mb-4">
              Help
            </h3>
            <ul className="text-[14px] leading-[40px] text-gray-600 font-medium">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-[16px] leading-[24px] mb-4">
              Resources
            </h3>
            <ul className="text-[14px] leading-[40px] text-gray-600 font-medium">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full bg-[#230B41] text-white text-center py-5 text-[14px] leading-[22px]">
        © Copyright 2024, All Rights Reserved by XYz
      </div>
    </footer>
  );
}