import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
          <a className='hover:text-cyan-500 text-amber-500 href="#"'> Home </a>
          <a className='hover:text-cyan-500 text-amber-500 href="#"'> About </a>
          <a className='hover:text-cyan-500 text-amber-500 href="#"'>
            {" "}
            Delivery{" "}
          </a>
          <a className='hover:text-cyan-500 text-amber-500 href="#"'>
            {" "}
            Contact{" "}
          </a>
        </nav>
        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <a href="https://facebook.com" target="blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
              alt="facebook logo"
              width={30} 
              height={30}
            />
          </a>

          <a href="https://linkedin.com" target="blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
              alt="linkedin logo"
              width={30} 
              height={30}
            />
          </a>

          <a
            href="https://instagram.com"
            target="blank"
            rel="nofollow noopener"
          >
            <Image
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              alt="insta logo"
              width={30} 
              height={30}
            />
          </a>

          <a href="https://twitter.com" target="blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/fluent/30/000000/twitter.png"
              alt="twitter logo"
              width={30} 
              height={30}
            />
          </a>
        </div>
        <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">
          {" "}
          2024 Ismat Fatima. All rights Reserved
        </p>
        <br />
        <br />
      </footer>
    </div>
  );
}
