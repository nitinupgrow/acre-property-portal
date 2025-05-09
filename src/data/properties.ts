
import { PropertyType } from "@/types/property";

// Mock property data - with updated A1 property image and all prices hidden
export const properties: PropertyType[] = [
  {
    id: 1,
    title: "A1 Property",
    images: [
      "/lovable-uploads/0d57ac51-c8c5-4e2d-aa04-7079abec78dc.png",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Contact for Price",
    hidePrice: true,
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
      "/lovable-uploads/e406f4bf-f2be-4df4-91ad-6f16cfbfdd02.png",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Contact for Price",
    hidePrice: true,
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
      "/lovable-uploads/cb80c691-3b15-4b5f-bc1f-5a138c189857.png",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Contact for Price",
    hidePrice: true,
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
