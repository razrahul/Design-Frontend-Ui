import React from "react";
import Hero from "../containers/Home/Hero"
import AboutSection from "../containers/Home/AboutSection";
import ServicCaro from "../containers/Service/carousel";
import ReviewsPage from  "../containers/Home/OurReviews.js"
import WhyChooseUs from "../containers/whyChoose/WhyChooseUs.js"
import ContactBanner from "../components/contact/ContactBanner.js";
import Footer from "../components/footer/intex.js";

 function Home() {
  return (
    <>
    {/* <Nav /> */}
    <Hero />
    <AboutSection />

    <ServicCaro />

    <WhyChooseUs />
    
    <ReviewsPage />
    <ContactBanner />
    <Footer />

    <div>
      <h2 className="text-3xl font-bold  text-center">
        Welcome to Home Page I am Here
      </h2>
    </div>
    </>
   
  );
}

export default Home;
