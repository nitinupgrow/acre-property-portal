
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { properties } from '@/data/properties';
import PropertyImages from '@/components/property/PropertyImages';
import PropertyOverview from '@/components/property/PropertyOverview';
import AgentContact from '@/components/property/AgentContact';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id)) || properties[0];
  
  if (!property) {
    return <div className="container-custom py-16 text-center">Property not found</div>;
  }

  return (
    <div className="pt-8 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/properties" className="text-primary flex items-center hover:underline">
            <ArrowLeft size={16} className="mr-2" /> Back to Properties
          </Link>
        </div>
        
        {/* Property Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair">{property.title}</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <span>{property.location}</span>
          </div>
        </div>
        
        {/* Property Images Carousel */}
        <PropertyImages images={property.images} title={property.title} />
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-2">
            <PropertyOverview property={property} />
          </div>
          
          {/* Agent Contact Card */}
          <div>
            <AgentContact agent={property.agent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
