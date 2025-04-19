import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AIRecommendations from '@/components/AIRecommendations';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import { PropertyCardProps } from '@/components/PropertyCard';
import { FilterValues } from '@/components/FilterBar';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseSection from '@/components/WhyChooseSection';

const Index = () => {
  // Mock featured properties data (would come from API in real app)
  const allProperties: PropertyCardProps[] = [
    {
      id: "1",
      title: "Luxury PG Accommodation in Sector 17",
      address: "Sector 17, Chandigarh",
      price: 12000,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80",
      amenities: ["WiFi", "AC", "Food", "Laundry"],
      occupancy: "Single Room"
    },
    {
      id: "2",
      title: "Modern Co-living Space near Law Gate",
      address: "Law Gate, Chandigarh",
      price: 9500,
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      amenities: ["WiFi", "Gym", "Food", "Power Backup"],
      occupancy: "Double Sharing"
    },
    {
      id: "3",
      title: "Premium PG near Green Valley",
      address: "Green Valley, Chandigarh",
      price: 10500,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      amenities: ["WiFi", "AC", "Food", "TV", "Housekeeping"],
      occupancy: "Single Room"
    },
    {
      id: "4",
      title: "Khooozo Rooms in Deep Nagar",
      address: "Deep Nagar, Chandigarh",
      price: 7500,
      rating: 4.2,
      imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "Food", "Parking", "Security"],
      occupancy: "Triple Sharing"
    },
    {
      id: "5",
      title: "RS Rooms near University",
      address: "Sector 14, Chandigarh",
      price: 11000,
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
      amenities: ["WiFi", "AC", "Food", "Study Room", "Gym"],
      occupancy: "Double Sharing"
    },
    {
      id: "6",
      title: "Rohit Rooms for Working Professionals",
      address: "Law Gate, Chandigarh",
      price: 13500,
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "AC", "Food", "Gym", "Gaming Zone", "Parking"],
      occupancy: "Single Room"
    },
    {
      id: "7",
      title: "Affordable PG in Green Valley",
      address: "Green Valley, Chandigarh",
      price: 8000,
      rating: 4.3,
      imageUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "Food", "Laundry", "TV"],
      occupancy: "Triple Sharing"
    },
    {
      id: "8",
      title: "Khooozo Deluxe Rooms",
      address: "Deep Nagar, Chandigarh",
      price: 15000,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "AC", "Food", "Gym", "Swimming Pool", "Party Area"],
      occupancy: "Single Room"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterValues>({
    locations: [],
    priceRange: [3000, 20000],
    features: []
  });

  // Extract unique location options from the data
  const locationOptions = useMemo(() => {
    const locations = new Set<string>();
    allProperties.forEach(property => {
      const location = property.address.split(',')[0].trim();
      locations.add(location);
    });
    return Array.from(locations);
  }, [allProperties]);

  // Extract unique feature options from the data
  const featureOptions = useMemo(() => {
    const features = new Set<string>();
    allProperties.forEach(property => {
      property.amenities.forEach(amenity => features.add(amenity));
    });
    return Array.from(features);
  }, [allProperties]);

  // Filter properties based on search term and filters
  const filteredProperties = useMemo(() => {
    return allProperties.filter(property => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Location filter
      const locationMatch = filters.locations.length === 0 || 
        filters.locations.some(location => 
          property.address.includes(location)
        );
      
      // Price range filter
      const priceMatch = property.price >= filters.priceRange[0] && 
                         property.price <= filters.priceRange[1];
      
      // Features filter
      const featuresMatch = filters.features.length === 0 || 
        filters.features.every(feature => 
          property.amenities.includes(feature)
        );
      
      return matchesSearch && locationMatch && priceMatch && featuresMatch;
    });
  }, [allProperties, searchTerm, filters]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedProperties
        properties={allProperties}
        onFilterChange={setFilters}
        onSearchChange={setSearchTerm}
        searchTerm={searchTerm}
        filters={filters}
        locationOptions={locationOptions}
        featureOptions={featureOptions}
        filteredProperties={filteredProperties}
      />
      <AIRecommendations />
      <WhyChooseSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
