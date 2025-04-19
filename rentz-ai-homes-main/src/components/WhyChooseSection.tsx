
import React from 'react';
import { Button } from "@/components/ui/button";
import { Building, Check, Search, Sparkles } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-rentz-purple/5 to-rentz-lightPurple/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Rentz?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers cutting-edge AI features to make your PG search experience seamless and tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="h-10 w-10 text-rentz-purple" />,
              title: "AI-Powered Recommendations",
              description: "Our smart algorithm suggests PGs based on your preferences, location, and budget requirements."
            },
            {
              icon: <Building className="h-10 w-10 text-rentz-purple" />,
              title: "Verified Listings Only",
              description: "Every PG on our platform is thoroughly verified to ensure you get exactly what you see."
            },
            {
              icon: <Search className="h-10 w-10 text-rentz-purple" />,
              title: "Smart Search Filters",
              description: "Find your perfect PG with our detailed search filters for amenities, location, and price range."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-custom text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-rentz-purple/10 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-custom border border-gray-100">
            <h3 className="text-xl font-bold mb-4">For Property Owners</h3>
            <ul className="space-y-3">
              {[
                "List your property for free",
                "Get verified tenant inquiries",
                "AI-powered tenant matching",
                "Manage bookings and viewings",
                "Secure payment processing"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 bg-rentz-purple hover:bg-rentz-purple/90 w-full">
              List Your Property
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-custom border border-gray-100">
            <h3 className="text-xl font-bold mb-4">For PG Seekers</h3>
            <ul className="space-y-3">
              {[
                "Find verified PGs that match your needs",
                "Virtual tours and detailed photos",
                "Compare prices and amenities easily",
                "AI recommendations based on preferences",
                "Book visits and secure your PG online"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 bg-rentz-purple hover:bg-rentz-purple/90 w-full">
              Find a PG Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
