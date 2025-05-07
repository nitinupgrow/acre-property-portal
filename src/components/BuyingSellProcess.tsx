
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Cube3d, Lock, Maximize, Minimize } from 'lucide-react';

const BuyingSellProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Meet with our experts to discuss your needs and goals.",
      icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-blue-500 to-indigo-600",
      lucideIcon: <Maximize size={24} className="text-white" />
    },
    {
      id: 2,
      title: "Property Search/Listing",
      description: "Find your dream property or list your property with us.",
      icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-amber-500 to-orange-600",
      lucideIcon: <Cube3d size={24} className="text-white" />
    },
    {
      id: 3,
      title: "Documentation",
      description: "We handle all the paperwork and legal documentation.",
      icon: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-emerald-500 to-green-600",
      lucideIcon: <Lock size={24} className="text-white" />
    },
    {
      id: 4,
      title: "Closing",
      description: "Complete the transaction and receive/transfer ownership.",
      icon: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-purple-500 to-fuchsia-600",
      lucideIcon: <Minimize size={24} className="text-white" />
    },
  ];

  return (
    <section className="section-padding py-16 bg-gradient-to-br from-gray-50 to-gray-100">
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
              className="group transform transition-all duration-500 hover:-translate-y-4 hover:scale-105"
            >
              <Card className="overflow-hidden shadow-xl h-full border-0 rounded-xl relative">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80`}></div>
                  <img 
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex transition-all duration-300 group-hover:rotate-[360deg]">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl font-bold shadow-xl">
                      {step.lucideIcon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <div className="transform transition-all duration-300 group-hover:translate-x-2">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
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
