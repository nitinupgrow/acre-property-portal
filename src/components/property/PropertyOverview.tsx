
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import { PropertyType } from '@/types/property';

interface PropertyOverviewProps {
  property: PropertyType;
}

const PropertyOverview = ({ property }: PropertyOverviewProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-wrap justify-between mb-6 pb-6 border-b">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-primary">Contact for Price</h3>
            <p className="text-gray-600">{property.size} gaj</p>
          </div>
          <div>
            <span className="inline-block bg-accent text-black px-4 py-2 rounded-full font-bold">
              {property.type}
            </span>
          </div>
        </div>
        
        <SectionHeading title="Overview" />
        <p className="text-gray-700 mb-8">{property.description}</p>
        
        {property.frontage && (
          <div className="mb-8">
            <SectionHeading title="Dimensions" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-medium">Frontage</p>
                <p className="text-lg font-bold">{property.frontage}</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-medium">Depth</p>
                <p className="text-lg font-bold">{property.depth}</p>
              </div>
            </div>
          </div>
        )}
        
        {property.nearby && property.nearby.length > 0 && (
          <div className="mb-8">
            <SectionHeading title="Nearby Locations" />
            <div className="flex flex-wrap gap-2">
              {property.nearby.map((place, index) => (
                <span key={index} className="bg-secondary px-3 py-1 rounded-full text-sm">
                  {place}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <SectionHeading title="Amenities" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {property.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center">
              <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        
        <SectionHeading title="Location" />
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28024.305691534782!2d77.41943396762702!3d28.678341848279576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf19972d2f4a5%3A0xc21d00f552264bcb!2sRaj%20Nagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5m2!1s0x390cf19972d2f4a5%3A0xc21d00f552264bcb!2sRaj%20Nagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyOverview;
