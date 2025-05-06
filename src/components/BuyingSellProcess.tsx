
import React from 'react';
import SectionHeading from './SectionHeading';

const BuyingSellProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Meet with our experts to discuss your needs and goals.",
      icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Property Search/Listing",
      description: "Find your dream property or list your property with us.",
      icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Documentation",
      description: "We handle all the paperwork and legal documentation.",
      icon: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Closing",
      description: "Complete the transaction and receive/transfer ownership.",
      icon: "https://images.unsplash.com/photo-1560518883-b2e208a3a11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="section-padding bg-lightGray">
      <div className="container-custom">
        <SectionHeading 
          title="How to Buy or Sell Property" 
          subtitle="Our simple process makes property transactions easy and hassle-free"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
              <div className="h-48">
                <img 
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingSellProcess;
