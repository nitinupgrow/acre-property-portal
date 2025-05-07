
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PropertyProps {
  id: number;
  title: string;
  image: string;
  price?: string; // Keep price optional but we'll hide it
  hidePrice?: boolean; // This will be set to true for all properties
  location: string;
  size: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  featured?: boolean;
  frontage?: string;
  depth?: string;
  nearby?: string[];
}

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  // Force hidePrice to be true for all properties
  const propertyWithHiddenPrice = { ...property, hidePrice: true };
  
  return (
    <div className="property-card hover-scale block">
      {/* Property Image */}
      <div className="relative h-52 overflow-hidden rounded-t-lg">
        <Link to={`/properties/${property.id}`}>
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          {property.featured && (
            <div className="absolute top-0 right-0 bg-accent text-black font-bold py-1 px-3 text-sm">
              Featured
            </div>
          )}
        </Link>
      </div>
      
      {/* Property Details */}
      <div className="p-4 shadow-md rounded-b-lg">
        <Link to={`/properties/${property.id}`}>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{property.title}</h3>
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <Home size={16} className="mr-1" />
              <span className="text-sm text-gray-600">{property.size} gaj</span>
            </div>
            <span className="text-sm bg-secondary text-gray-700 px-2 py-1 rounded">
              {property.type}
            </span>
          </div>
        </Link>
        
        <div className="flex flex-col gap-2">
          <Button className="w-full flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105" asChild>
            <a href="tel:+919911288282">
              <Phone size={16} /> Call Now
            </a>
          </Button>
          <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transform transition-all duration-300 hover:scale-105" asChild>
            <a href="https://wa.me/919911288282" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> Chat Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
