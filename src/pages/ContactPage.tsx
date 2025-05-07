
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import GoogleMap from '@/components/GoogleMap';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Users } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto">Reach out to our team for any inquiries or assistance with your real estate needs.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <SectionHeading title="Get in Touch" />
              
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                  <Phone size={36} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-3">Our team is available to assist you.</p>
                  <a href="tel:+919911288282" className="text-primary hover:text-accent transition-colors font-medium">+91 9911288282</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                  <Mail size={36} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">Send us a message anytime.</p>
                  <a href="mailto:contact@90acre.com" className="text-primary hover:text-accent transition-colors font-medium">contact@90acre.com</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                  <MapPin size={36} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-3">Our main office location:</p>
                  <address className="not-italic">
                    123 Real Estate Ave<br />
                    Property City, 12345
                  </address>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                  <Users size={36} className="text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Social Media</h3>
                  <p className="text-gray-600 mb-3">Connect with us online:</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <div className="mb-8">
                <a 
                  href="https://wa.me/919911288282" 
                  className="flex items-center bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-colors w-full sm:w-auto justify-center transform hover:scale-105 duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
              
              {/* Office Hours */}
              <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:scale-105 duration-300">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Send Us a Message" />
              {/* Contact Form */}
              <ScrollArea className="h-[600px] rounded-md">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-primary transition-colors">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none group-hover:border-primary transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-primary transition-colors">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none group-hover:border-primary transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-primary transition-colors">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none group-hover:border-primary transition-colors"
                        placeholder="+91 9911288282"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-primary transition-colors">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none group-hover:border-primary transition-colors"
                        placeholder="Property Inquiry"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4 group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-primary transition-colors">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none group-hover:border-primary transition-colors"
                      placeholder="Please write your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full transform hover:scale-105 duration-300">
                    Send Message
                  </Button>
                </form>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section-padding bg-lightGray">
        <div className="container-custom">
          <SectionHeading 
            title="Our Location" 
            subtitle="Visit our main office"
            centered={true}
          />
          <div className="transform hover:scale-105 duration-300">
            <GoogleMap />
            <div className="mt-4 bg-white p-4 rounded-lg text-center">
              <p className="font-medium">90acre Real Estate</p>
              <p>123 Real Estate Avenue, Property City, 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
