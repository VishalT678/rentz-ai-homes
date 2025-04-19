
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FindIdealPG from '@/components/FindIdealPG';
import { PropertyCardProps } from '@/components/PropertyCard';
import { FilterValues } from '@/components/FilterBar';
import FeaturedProperties from '@/components/FeaturedProperties';

const IdealPG = () => {
  const navigate = useNavigate();
  
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl font-bold text-center mb-4">Find Your Ideal PG Accommodation</h1>
            <p className="text-center text-gray-600 mb-8">
              Tell us what matters most to you, and we'll help you find the perfect place to call home
            </p>
            
            <FindIdealPG 
              locationOptions={locationOptions}
              featureOptions={featureOptions}
              onSearch={setFilters}
            />
          </div>
          
          <div id="featured-properties">
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IdealPG;
