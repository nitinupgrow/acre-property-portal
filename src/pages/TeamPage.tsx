
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  bio: string;
}

const TeamPage = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "john@90acre.com",
      phone: "+1 (234) 567-8901",
      bio: "John brings over 20 years of experience in real estate and property development. His vision and leadership have driven 90acre to become a leading name in the industry."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "sarah@90acre.com",
      phone: "+1 (234) 567-8902",
      bio: "With a background in luxury property sales, Sarah leads our sales team with expertise and enthusiasm. She has a talent for matching clients with their dream properties."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Senior Property Consultant",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "michael@90acre.com",
      phone: "+1 (234) 567-8903",
      bio: "Michael specializes in commercial properties and has a deep understanding of market trends. His analytical approach helps clients make informed investment decisions."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "emily@90acre.com",
      phone: "+1 (234) 567-8904",
      bio: "Emily's innovative marketing strategies have significantly increased our property visibility. She leads our digital presence and brand development initiatives."
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "david@90acre.com",
      phone: "+1 (234) 567-8905",
      bio: "David handles all legal aspects of property transactions, ensuring smooth and compliant processes. His expertise in real estate law is invaluable to our team."
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Customer Relations Manager",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      email: "priya@90acre.com",
      phone: "+1 (234) 567-8906",
      bio: "Priya ensures that all our clients receive exceptional service. She manages client relationships and feedback to continuously improve our customer experience."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Our Team</h1>
            <p className="text-lg max-w-2xl mx-auto">Meet the experienced professionals behind 90acre's success.</p>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Experts"
            subtitle="Our team of experienced real estate professionals"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-col gap-2">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="section-padding bg-lightGray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeading title="Join Our Team" />
              <p className="mb-4">
                Are you passionate about real estate and providing exceptional service? We're always looking for talented individuals to join our growing team.
              </p>
              <p className="mb-6">
                At 90acre, we offer a collaborative work environment, competitive benefits, and opportunities for professional growth and development.
              </p>
              <a
                href="/contact"
                className="btn-primary inline-block"
              >
                View Open Positions
              </a>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Work With Our Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact us today to discuss how we can help with your real estate needs.</p>
          <a
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-md inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
