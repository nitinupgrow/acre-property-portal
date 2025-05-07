
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

const BuyingSellProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Meet with our experts to discuss your needs and goals.",
      icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Property Search/Listing",
      description: "Find your dream property or list your property with us.",
      icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 3,
      title: "Documentation",
      description: "We handle all the paperwork and legal documentation.",
      icon: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 4,
      title: "Closing",
      description: "Complete the transaction and receive/transfer ownership.",
      icon: "https://images.unsplash.com/photo-1560518883-b2e2208a3a11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-purple-500 to-fuchsia-600"
    },
  ];

  return (
    <section className="section-padding bg-gray-100 py-16">
      <div className="container-custom">
        <SectionHeading 
          title="How to Buy or Sell Property" 
          subtitle="Our simple process makes property transactions easy and hassle-free"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 perspective">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="transform transition-all duration-500 hover:-translate-y-4 hover:scale-105"
            >
              <Card className="overflow-hidden shadow-xl h-full border-0">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80`}></div>
                  <img 
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-gray-800 shadow-md">
                      {step.id}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary blur-sm opacity-75"></div>
              <button className="relative bg-white text-primary font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyingSellProcess;
