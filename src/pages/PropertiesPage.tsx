
import React, { useState, useEffect } from 'react';
import SectionHeading from '@/components/SectionHeading';
import PropertyCard, { PropertyProps } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Filter, Search } from 'lucide-react';

const PropertiesPage = () => {
  // Sample property data
  const allProperties: PropertyProps[] = [
    {
      id: 1,
      title: "Modern Villa with Pool",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$1,250,000",
      location: "Beverly Hills, CA",
      size: "5000",
      type: "Residential",
      featured: true
    },
    {
      id: 2,
      title: "Downtown Office Space",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$750,000",
      location: "Manhattan, NY",
      size: "2500",
      type: "Commercial",
      featured: true
    },
    {
      id: 3,
      title: "Warehouse with Loading Docks",
      image: "https://images.unsplash.com/photo-1553970541-039c88965124?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$2,500,000",
      location: "Houston, TX",
      size: "25000",
      type: "Industrial"
    },
    {
      id: 4,
      title: "Beachfront Apartment",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$950,000",
      location: "Miami, FL",
      size: "1800",
      type: "Residential"
    },
    {
      id: 5,
      title: "Luxury Condo with City Views",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$1,800,000",
      location: "Chicago, IL",
      size: "3200",
      type: "Residential"
    },
    {
      id: 6,
      title: "Retail Space in Shopping Mall",
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$530,000",
      location: "Los Angeles, CA",
      size: "1500",
      type: "Commercial"
    },
    {
      id: 7,
      title: "Manufacturing Facility",
      image: "https://images.unsplash.com/photo-1565636252330-1a562257c17b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$3,200,000",
      location: "Detroit, MI",
      size: "40000",
      type: "Industrial"
    },
    {
      id: 8,
      title: "Single Family Home",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "$680,000",
      location: "Austin, TX",
      size: "2800",
      type: "Residential"
    }
  ];

  // Filter states
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(allProperties);
  const [showFilters, setShowFilters] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sizeRange, setSizeRange] = useState([0, 50000]);
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const locations = [...new Set(allProperties.map(prop => prop.location))];
  const propertyTypes = [...new Set(allProperties.map(prop => prop.type))];

  // Apply filters
  useEffect(() => {
    let result = allProperties;
    
    // Apply location filter
    if (locationFilter) {
      result = result.filter(prop => prop.location === locationFilter);
    }
    
    // Apply type filter
    if (typeFilter) {
      result = result.filter(prop => prop.type === typeFilter);
    }
    
    // Apply size filter
    result = result.filter(prop => {
      const propSize = parseInt(prop.size);
      return propSize >= sizeRange[0] && propSize <= sizeRange[1];
    });
    
    // Apply price filter (convert price string to number)
    result = result.filter(prop => {
      const propPrice = parseInt(prop.price.replace(/\$|,/g, ''));
      return propPrice >= priceRange[0] && propPrice <= priceRange[1];
    });
    
    setFilteredProperties(result);
  }, [locationFilter, typeFilter, sizeRange, priceRange]);

  const resetFilters = () => {
    setLocationFilter('');
    setTypeFilter('');
    setSizeRange([0, 50000]);
    setPriceRange([0, 5000000]);
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`;
  };

  const formatSize = (size: number) => {
    return `${size.toLocaleString()} gaj`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Our Properties</h1>
            <p className="text-lg max-w-2xl mx-auto">Discover a wide range of residential, commercial, and industrial properties to suit your needs.</p>
          </div>
        </div>
      </section>
      
      {/* Properties Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Toggle Button */}
          <div className="flex justify-between mb-6">
            <SectionHeading title="Available Properties" />
            <Button 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="bg-secondary p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Filter Properties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Property Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Size Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Size Range: {formatSize(sizeRange[0])} - {formatSize(sizeRange[1])}
                  </label>
                  <Slider
                    defaultValue={[0, 50000]}
                    min={0}
                    max={50000}
                    step={1000}
                    value={sizeRange}
                    onValueChange={setSizeRange}
                    className="mt-6"
                  />
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  </label>
                  <Slider
                    defaultValue={[0, 5000000]}
                    min={0}
                    max={5000000}
                    step={50000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-6"
                  />
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="mr-2"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
          
          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="bg-muted p-8 text-center rounded-lg">
              <Search className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No Properties Found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              <Button onClick={resetFilters} className="mt-4">
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact our team with your specific requirements, and we'll help you find the perfect property.</p>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
