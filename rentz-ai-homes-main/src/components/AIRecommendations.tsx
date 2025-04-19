
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ChevronRight } from 'lucide-react';
import PropertyCard, { PropertyCardProps } from './PropertyCard';
import { cn } from '@/lib/utils';

interface AIRecommendationsProps {
  className?: string;
}

const AIRecommendations: React.FC<AIRecommendationsProps> = ({ className }) => {
  // Mock properties data (would come from API in real app)
  const recommendedProperties: PropertyCardProps[] = [
    {
      id: "1",
      title: "Luxury PG Accommodation in Sector 17",
      address: "Sector 17, Chandigarh",
      price: 12000,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
      amenities: ["WiFi", "AC", "Food", "Laundry"],
      occupancy: "Single Room",
      isRecommended: true
    },
    {
      id: "2",
      title: "Modern Co-living Space near IT Park",
      address: "IT Park Road, Chandigarh",
      price: 9500,
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      amenities: ["WiFi", "Gym", "Food", "Power Backup"],
      occupancy: "Double Sharing",
      isRecommended: true
    },
    {
      id: "3",
      title: "Premium PG near Elante Mall",
      address: "Industrial Area, Chandigarh",
      price: 10500,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: ["WiFi", "AC", "Food", "TV", "Housekeeping"],
      occupancy: "Single Room",
      isRecommended: true
    }
  ];
  
  return (
    <div className={cn("py-12 bg-gray-50", className)}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-6 w-6 text-rentz-purple" />
              <h2 className="text-2xl font-bold">AI-Powered Recommendations</h2>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Based on your preferences and browsing history, our AI recommends these accommodations just for you.
            </p>
          </div>
          <Button variant="outline" className="text-rentz-purple border-rentz-purple hover:bg-rentz-purple/5 font-medium">
            View All Recommendations
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              {...property} 
              className="animate-fade-in"
            />
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-custom p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-rentz-purple/10 rounded-full p-4">
              <Brain className="h-12 w-12 text-rentz-purple" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Personalized PG Finder</h3>
              <p className="text-gray-600 mb-4">
                Let our AI find the perfect PG for you based on your budget, location preference, and amenities you need.
              </p>
              <div className="flex items-center gap-3">
                <Button className="bg-rentz-purple hover:bg-rentz-purple/90 font-medium">
                  Find My Ideal PG
                </Button>
                <Button variant="outline" className="text-gray-600 hover:text-gray-900">
                  Learn How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;
