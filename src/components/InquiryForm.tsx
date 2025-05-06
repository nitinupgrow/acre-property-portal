
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const InquiryForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Inquiry Sent!",
      description: "A real estate agent will contact you soon.",
      duration: 5000,
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center font-playfair">List Your Property / Get Help</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="+1 (234) 567-8901"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            id="property-type"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            required
          >
            <option value="">Select an option</option>
            <option value="buy">Looking to Buy</option>
            <option value="sell">Looking to Sell</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Tell us about your property or requirements..."
            required
          ></textarea>
        </div>
        
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-black">
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
};

export default InquiryForm;
