import React from 'react';
import { Button } from "@/components/ui/button";
import PropertyCard, { PropertyCardProps } from '@/components/PropertyCard';
import FilterBar, { FilterValues } from '@/components/FilterBar';

interface FeaturedPropertiesProps {
  properties: PropertyCardProps[];
  onFilterChange: (filters: FilterValues) => void;
  onSearchChange: (searchTerm: string) => void;
  searchTerm: string;
  filters: FilterValues;
  locationOptions: string[];
  featureOptions: string[];
  filteredProperties: PropertyCardProps[];
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  onFilterChange,
  onSearchChange,
  searchTerm,
  filters,
  locationOptions,
  featureOptions,
  filteredProperties
}) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured PG Accommodations</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our handpicked selection of premium PG accommodations across different locations.
            </p>
          </div>
        </div>
        
        <FilterBar 
          onFilterChange={onFilterChange}
          onSearchChange={onSearchChange}
          searchTerm={searchTerm}
          filters={filters}
          locationOptions={locationOptions}
          featureOptions={featureOptions}
        />
        
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                {...property} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">No properties match your search criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                onSearchChange('');
                onFilterChange({
                  locations: [],
                  priceRange: [3000, 20000],
                  features: []
                });
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;
