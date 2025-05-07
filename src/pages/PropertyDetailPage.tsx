
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import { MapPin, Home, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Mock property data - in a real app, you'd fetch this from an API
const properties = [
  {
    id: 1,
    title: "A1 Property",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "$1,250,000",
    location: "Raj Nagar Extension, Ghaziabad",
    size: "1380",
    type: "Commercial",
    featured: true,
    frontage: "60 feet",
    depth: "207 feet",
    nearby: ["DPS Public School", "St.Xavier School", "Hrit University", "Metro Station"],
    description: "A premium commercial plot in one of the most sought-after locations in Raj Nagar Extension, Ghaziabad. With a generous frontage of 60 feet and depth of 207 feet, this property offers ample space for building your dream commercial space. Surrounded by excellent educational institutions and with convenient access to the Metro Station, this property combines the best of commerce and connectivity.",
    amenities: ["Corner Plot", "Wide Roads", "Gated Community", "24/7 Security", "Water Supply", "Electricity"],
    agent: {
      name: "Rahul Sharma",
      phone: "+919911288282",
      whatsapp: "+919911288282",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 2,
    title: "A2 Property",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "$1,850,000",
    location: "Raj Nagar Extension, Ghaziabad",
    size: "6100",
    type: "Commercial",
    featured: true,
    frontage: "250 feet",
    depth: "250 feet",
    nearby: ["DPS Public School", "St.Xavier School", "Hrit University", "Metro Station"],
    description: "A prestigious commercial plot situated in the prime location of Raj Nagar Extension, Ghaziabad. This exceptional property features an impressive frontage of 250 feet and depth of 250 feet, providing abundant space for custom commercial development. The property enjoys close proximity to top educational institutions and convenient access to transportation, making it an ideal investment for businesses.",
    amenities: ["Prime Location", "Wide Roads", "Gated Community", "24/7 Security", "Water Supply", "Electricity", "Park View"],
    agent: {
      name: "Rahul Sharma",
      phone: "+919911288282",
      whatsapp: "+919911288282",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 3,
    title: "A3 Property",
    images: [
      "https://images.unsplash.com/photo-1553970541-039c88965124?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Contact for Price",
    hidePrice: true,
    location: "Raj Nagar Extension Face 2nd, Ghaziabad",
    size: "23000",
    type: "Industrial",
    featured: true,
    frontage: "400 feet",
    depth: "550 feet",
    nearby: ["Petrol Pump", "Government Companies"],
    description: "A premium industrial plot located in Raj Nagar Extension Face 2nd, Ghaziabad. With an extensive area of 23000 gaj and impressive dimensions of 400 feet frontage and 550 feet depth, this property is ideal for various industrial applications. Strategically positioned near essential facilities including a petrol pump and government companies, this plot offers excellent potential for business development and commercial success.",
    amenities: ["Wide Roads", "Security", "Power Supply", "Water Connection", "Strategic Location", "Commercial Area"],
    agent: {
      name: "Rahul Sharma",
      phone: "+919911288282",
      whatsapp: "+919911288282",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 4,
    title: "A4 Property",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "$250,000",
    location: "Mortha, Ghaziabad",
    size: "100",
    type: "Residential",
    frontage: "25 feet",
    depth: "45 feet",
    nearby: ["Universal Society"],
    description: "Cozy residential plot located in Mortha, Ghaziabad. This property offers the perfect size for building your dream home with 100 gaj of area. With a frontage of 25 feet and depth of 45 feet, this plot provides a comfortable building space in a residential area. Close proximity to Universal Society makes this an ideal location for families looking for a peaceful neighborhood.",
    amenities: ["Residential Area", "Water Connection", "Electricity", "Security", "Nearby Amenities"],
    agent: {
      name: "Rahul Sharma",
      phone: "+919911288282",
      whatsapp: "+919911288282",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  }
];

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
            <MapPin size={18} className="mr-2" />
            <span>{property.location}</span>
          </div>
        </div>
        
        {/* Property Images Carousel */}
        <div className="mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index} className="h-[400px] md:h-[500px]">
                  <img 
                    src={image} 
                    alt={`${property.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between mb-6 pb-6 border-b">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-primary">{property.hidePrice ? "Contact for Price" : property.price}</h3>
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
          </div>
          
          {/* Agent Contact Card */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={property.agent.image} 
                      alt={property.agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl">{property.agent.name}</h3>
                  <p className="text-gray-600">Property Agent</p>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full flex items-center justify-center gap-2" asChild>
                    <a href={`tel:${property.agent.phone}`}>
                      <Phone size={16} /> Call Now
                    </a>
                  </Button>
                  
                  <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700" asChild>
                    <a href={`https://wa.me/${property.agent.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} /> WhatsApp Chat
                    </a>
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold mb-4">Request Details</h4>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Your Phone" 
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Your Message" 
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md resize-none"
                        required
                      ></textarea>
                    </div>
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
