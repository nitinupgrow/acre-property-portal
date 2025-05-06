
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PropertyProps {
  id: number;
  title: string;
  image: string;
  price?: string; // Make price optional to allow hiding
  hidePrice?: boolean; // Add option to hide price
  location: string;
  size: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  featured?: boolean;
  frontage?: string;
  depth?: string;
  nearby?: string[];
}

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="property-card hover-scale block">
      {/* Property Image */}
      <div className="relative h-52 overflow-hidden">
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
          {!property.hidePrice && property.price && (
            <div className="absolute bottom-0 left-0 bg-primary text-white font-bold py-1 px-3">
              {property.price}
            </div>
          )}
        </Link>
      </div>
      
      {/* Property Details */}
      <div className="p-4">
        <Link to={`/properties/${property.id}`}>
          <h3 className="text-lg font-bold mb-2">{property.title}</h3>
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
          <Button className="w-full flex items-center justify-center gap-2" asChild>
            <a href="tel:+9911288282">
              <Phone size={16} /> Call Now
            </a>
          </Button>
          <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700" asChild>
            <a href="https://wa.me/9911288282" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> Chat Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
