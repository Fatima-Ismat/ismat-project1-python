"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // Direct URL ko set kar denge
    setImageUrl('https://img.freepik.com/premium-photo/black-background-with-black-background-white-sign-that-says-word-it_111797-1702.jpg?w=996');
  }, []); // No need to fetch data, just set URL directly

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Dynamic Banner"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        )}
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now For Exclusive Burger discount!
        </p>

        <button
          type="button"
          className="bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-800 transition duration-300"
        >
          Exciting Deals launch at 12pm!
        </button>
      </div>
    </div>
  );
}
