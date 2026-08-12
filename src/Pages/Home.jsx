import React from "react";
import Header from "../Components/Home Page/Header";
import HeroSection from "../Components/Home Page/HeroSection";
import Category from "../Components/Home Page/Category";
import StoryBanner from "../Components/Home Page/StorySection";
import HomeMenu from "../Components/Home Page/HomeMenu";
import Offer from "../Components/Home Page/Offer";
import FoodShowcase from "../Components/Home Page/FoodShowcase";
import Reservation from "../Pages/Reservation";
import Reviews from "../Pages/Review";
import ChefsSection from "../Components/Home Page/ChefsSection";
import Footer from "../Components/Home Page/Footer";
import ContactSection from "../Components/Home Page/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Category />
        <StoryBanner />
        <HomeMenu />
        <Offer />
        <FoodShowcase />
        <Reservation />
        <Reviews />
        <ChefsSection />
        <ContactSection/>
      </main>
    </>
  );
}