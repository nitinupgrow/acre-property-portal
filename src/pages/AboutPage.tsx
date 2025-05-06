
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const AboutPage = () => {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our business, from customer service to property selection.",
      icon: "🌟"
    },
    {
      title: "Innovation",
      description: "We embrace innovative solutions and technologies to provide the best possible service to our clients.",
      icon: "💡"
    },
    {
      title: "Community",
      description: "We are committed to making a positive impact in the communities where we operate.",
      icon: "🏙️"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">About 90acre</h1>
            <p className="text-lg max-w-2xl mx-auto">Your trusted partner in real estate, committed to helping you find the perfect property.</p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeading title="Our Story" />
              <p className="mb-4">
                Founded in 2010, 90acre has grown from a small local agency to one of the most trusted real estate companies in the region. Our journey began with a simple mission: to make property transactions simple, transparent, and stress-free for our clients.
              </p>
              <p className="mb-4">
                With over a decade of experience in the real estate market, we've helped thousands of clients find their dream homes, sell their properties at the best possible prices, and make smart investment decisions.
              </p>
              <p>
                Today, we continue to expand our portfolio and services, always keeping our clients' needs at the heart of everything we do. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, you can count on 90acre to provide expert guidance and support every step of the way.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="90acre Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="section-padding bg-lightGray">
        <div className="container-custom text-center">
          <SectionHeading 
            title="Our Mission" 
            centered={true}
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              At 90acre, our mission is to connect people with properties that meet their needs, exceed their expectations, and improve their quality of life. We believe that finding the right property is about more than just location and price—it's about finding a place where you can build your future.
            </p>
            <p className="text-lg">
              We are dedicated to providing personalized service, expert advice, and a seamless experience from start to finish. Our goal is to be the most trusted name in real estate, known for our integrity, knowledge, and commitment to client satisfaction.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Values" 
            subtitle="The principles that guide us every day"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Experience */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Experience" 
            subtitle="Numbers that speak for themselves"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">12+</div>
              <p className="text-xl">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">5000+</div>
              <p className="text-xl">Properties Sold</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">3000+</div>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">25+</div>
              <p className="text-xl">Expert Agents</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact our team today to discuss your real estate needs and how we can help you achieve your goals.</p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
