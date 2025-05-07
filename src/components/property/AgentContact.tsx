
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { AgentType } from '@/types/property';

interface AgentContactProps {
  agent: AgentType;
}

const AgentContact = ({ agent }: AgentContactProps) => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
            <img 
              src={agent.image} 
              alt={agent.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xl">{agent.name}</h3>
          <p className="text-gray-600">Property Agent</p>
        </div>
        
        <div className="space-y-4">
          <Button className="w-full flex items-center justify-center gap-2" asChild>
            <a href={`tel:${agent.phone}`}>
              <Phone size={16} /> Call Now
            </a>
          </Button>
          
          <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700" asChild>
            <a href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
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
  );
};

export default AgentContact;
