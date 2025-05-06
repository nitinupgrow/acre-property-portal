
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PropertyProps {
  id: number;
  title: string;
  image: string;
  price: string;
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
    <Link to={`/properties/${property.id}`} className="property-card hover-scale block">
      {/* Property Image */}
      <div className="relative h-52 overflow-hidden">
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
        <div className="absolute bottom-0 left-0 bg-primary text-white font-bold py-1 px-3">
          {property.price}
        </div>
      </div>
      
      {/* Property Details */}
      <div className="p-4">
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
        <Button className="w-full" variant="default">
          View Details
        </Button>
      </div>
    </Link>
  );
};

export default PropertyCard;
