
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, MapPin, Building, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [type, setType] = useState<string>("");
  
  return (
    <div className="relative bg-gradient-to-br from-white to-rentz-lightPurple/30 min-h-[90vh] pt-24 flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect <span className="text-gradient">PG Home</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover AI-powered PG accommodations that match your lifestyle and preferences
          </p>
          
          <div className="bg-white rounded-xl shadow-custom p-4 md:p-6 text-left">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <MapPin className="h-5 w-5 text-rentz-purple" />
                <Input 
                  type="text" 
                  placeholder="Search location..." 
                  className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto text-base"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <div className="md:w-48">
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="bg-gray-50 border-0 h-full text-base">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-rentz-purple" />
                      <SelectValue placeholder="Property Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single Room</SelectItem>
                    <SelectItem value="double">Double Sharing</SelectItem>
                    <SelectItem value="triple">Triple Sharing</SelectItem>
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="bg-rentz-purple hover:bg-rentz-purple/90 h-full py-6 gap-2 text-base">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </Button>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-rentz-purple" />
              <p>AI-powered smart search recommends PGs based on your preferences</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          {[
            { icon: "🏢", title: "1,200+", description: "Properties" },
            { icon: "👥", title: "5,000+", description: "Happy Tenants" },
            { icon: "🌆", title: "15+", description: "Cities" },
            { icon: "⚡", title: "100%", description: "Verified Listings" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-custom animate-fade-in">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
