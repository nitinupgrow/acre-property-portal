
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '@/components/Carousel';
import SectionHeading from '@/components/SectionHeading';
import PropertyCard, { PropertyProps } from '@/components/PropertyCard';
import InquiryForm from '@/components/InquiryForm';
import BuyingSellProcess from '@/components/BuyingSellProcess';
import GoogleMap from '@/components/GoogleMap';

const HomePage = () => {
  // Sample property data
  const [featuredProperties] = useState<PropertyProps[]>([
    {
      id: 1,
      title: "A1 Property",
      image: "/lovable-uploads/0d57ac51-c8c5-4e2d-aa04-7079abec78dc.png",
      price: "$1,250,000",
      hidePrice: true,
      location: "Raj Nagar Extension, Ghaziabad",
      size: "1380",
      frontage: "60 feet",
      depth: "207 feet",
      nearby: ["DPS Public School", "St.Xavier School", "Hrit University", "Metro Station"],
      type: "Commercial",
      featured: true
    },
    {
      id: 2,
      title: "A2 Property",
      image: "/lovable-uploads/e406f4bf-f2be-4df4-91ad-6f16cfbfdd02.png",
      price: "$1,850,000",
      hidePrice: true,
      location: "Raj Nagar Extension, Ghaziabad",
      size: "6100",
      frontage: "250 feet",
      depth: "250 feet",
      nearby: ["DPS Public School", "St.Xavier School", "Hrit University", "Metro Station"],
      type: "Commercial",
      featured: true
    },
    {
      id: 3,
      title: "A3 Property",
      image: "https://images.unsplash.com/photo-1553970541-039c88965124?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      hidePrice: true,
      location: "Raj Nagar Extension Face 2nd, Ghaziabad",
      size: "23000",
      frontage: "400 feet",
      depth: "550 feet",
      nearby: ["Petrol Pump", "Government Companies"],
      type: "Industrial",
      featured: true
    },
    {
      id: 4,
      title: "A4 Property",
      image: "/lovable-uploads/cb80c691-3b15-4b5f-bc1f-5a138c189857.png",
      price: "$250,000",
      hidePrice: true,
      location: "Mortha, Ghaziabad",
      size: "100",
      frontage: "25 feet",
      depth: "45 feet",
      nearby: ["Universal Society"],
      type: "Residential"
    }
  ]);

  return (
    <div>
      {/* Hero Banner Carousel */}
      <Carousel />
      
      {/* Hot Properties Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Hot Properties"
            subtitle="Discover our featured listings and latest additions to the market"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Buying/Selling Process Section */}
      <BuyingSellProcess />
      
      {/* Lead Capture and Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="List your property with us or get assistance with finding your dream home"
              />
              <InquiryForm />
            </div>
            
            <div>
              <SectionHeading
                title="Our Location"
                subtitle="Visit us at our main office"
              />
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Find Your Perfect Property?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Whether you're looking to buy, sell, or invest, our team of experts is here to guide you through every step of the process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="btn-accent text-center py-3 px-8 rounded-md font-bold text-black"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-center py-3 px-8 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
