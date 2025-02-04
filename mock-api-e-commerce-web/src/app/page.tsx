import React from 'react';
import Navbar from '../app/components/Navbar';
import Banner from '../app/components/Banner';
import Carousel from '../app/components/Carousel';
import Progressor from '../app/components/Progressor';
import ProductList from '../app/components/ProductList';
import Offer from '../app/components/Offer';
import Card from '../app/components/Card';
import Burger from '../app/components/Burger';
import Reservation from '../app/components/Reservation';
import Footer from '../app/components/Footer';
import MenuItem from '../app/components/MenuItem';





export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
      <Navbar/>
      <Carousel/>
      <Progressor/>
      <Burger/>
      <Banner/>
      <ProductList/>
      <MenuItem/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>
      
      
    </div>
  );
}
