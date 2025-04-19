
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialSectionProps {
  className?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ className }) => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "College Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Rentz helped me find a comfortable PG near my college with all the amenities I needed. The AI recommendation was spot on!",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "IT Professional",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      text: "I was relocating to Chandigarh for work and needed a convenient PG. Rentz made the process incredibly easy with verified listings and virtual tours.",
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Medical Intern",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      text: "The AI feature suggested a PG that was walking distance from my hospital and matched my budget perfectly. Couldn't be happier!",
    },
  ];
  
  return (
    <div className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Tenants Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read authentic experiences from tenants who found their perfect PG accommodation through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 shadow-custom relative animate-fade-in"
            >
              <div className="absolute -top-4 -right-4 bg-rentz-purple text-white rounded-full p-2">
                <Quote className="h-6 w-6" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={cn(
                      "h-4 w-4", 
                      i < testimonial.rating 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-rentz-purple to-rentz-lightPurple p-[1px] rounded-xl">
            <div className="bg-white rounded-xl px-8 py-6">
              <h3 className="text-xl font-bold mb-2">Ready to find your perfect PG?</h3>
              <p className="text-gray-600 mb-4">
                Join thousands of satisfied tenants who found their ideal PG accommodation.
              </p>
              <button className="bg-rentz-purple text-white rounded-md px-6 py-3 font-medium hover:bg-opacity-90 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
