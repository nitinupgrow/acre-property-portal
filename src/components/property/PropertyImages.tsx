
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface PropertyImagesProps {
  images: string[];
  title: string;
}

const PropertyImages = ({ images, title }: PropertyImagesProps) => {
  return (
    <div className="mb-10">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-[400px] md:h-[500px]">
              <img 
                src={image} 
                alt={`${title} - Image ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default PropertyImages;
