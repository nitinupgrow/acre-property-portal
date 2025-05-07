
export type PropertyType = {
  id: number;
  title: string;
  images: string[];
  price: string;
  hidePrice?: boolean;
  location: string;
  size: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  featured?: boolean;
  frontage?: string;
  depth?: string;
  nearby?: string[];
  description: string;
  amenities: string[];
  agent: AgentType;
};

export type AgentType = {
  name: string;
  phone: string;
  whatsapp: string;
  image: string;
};
