
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Check, Search, SlidersHorizontal, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

export interface FilterProps {
  onFilterChange: (filters: FilterValues) => void;
  onSearchChange: (searchTerm: string) => void;
  searchTerm: string;
  filters: FilterValues;
  locationOptions: string[];
  featureOptions: string[];
}

export interface FilterValues {
  locations: string[];
  priceRange: [number, number];
  features: string[];
}

const FilterBar: React.FC<FilterProps> = ({
  onFilterChange,
  onSearchChange,
  searchTerm,
  filters,
  locationOptions,
  featureOptions
}) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [tempFilters, setTempFilters] = React.useState<FilterValues>(filters);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleLocationChange = (location: string) => {
    const newLocations = tempFilters.locations.includes(location)
      ? tempFilters.locations.filter(l => l !== location)
      : [...tempFilters.locations, location];
    
    setTempFilters({...tempFilters, locations: newLocations});
  };

  const handleFeatureChange = (feature: string) => {
    const newFeatures = tempFilters.features.includes(feature)
      ? tempFilters.features.filter(f => f !== feature)
      : [...tempFilters.features, feature];
    
    setTempFilters({...tempFilters, features: newFeatures});
  };

  const handlePriceChange = (value: number[]) => {
    setTempFilters({
      ...tempFilters,
      priceRange: [value[0], value[1]] as [number, number]
    });
  };
  
  const applyFilters = () => {
    onFilterChange(tempFilters);
    setIsFilterOpen(false);
  };
  
  const clearFilters = () => {
    const resetFilters: FilterValues = {
      locations: [],
      priceRange: [3000, 20000] as [number, number],
      features: []
    };
    setTempFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search PG, franchise or location..."
            className="pl-10"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="flex gap-2 items-center">
          {(filters.locations.length > 0 || filters.features.length > 0) && (
            <Badge variant="outline" className="px-3 py-1">
              {filters.locations.length + filters.features.length} filters active
            </Badge>
          )}
          
          <Button 
            variant="outline" 
            onClick={toggleFilter}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {isFilterOpen && (
        <div className="bg-white rounded-lg shadow-md p-5 mt-4 border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Filters</h3>
            <Button variant="ghost" size="sm" onClick={toggleFilter}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Filter */}
            <div>
              <h4 className="font-medium mb-2 text-gray-700">Location</h4>
              <div className="space-y-2">
                {locationOptions.map(location => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`location-${location}`} 
                      checked={tempFilters.locations.includes(location)}
                      onCheckedChange={() => handleLocationChange(location)}
                    />
                    <Label htmlFor={`location-${location}`}>{location}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div>
              <h4 className="font-medium mb-2 text-gray-700">Rent Range</h4>
              <div className="px-2">
                <Slider 
                  defaultValue={[tempFilters.priceRange[0], tempFilters.priceRange[1]]}
                  max={20000}
                  min={3000}
                  step={500}
                  onValueChange={handlePriceChange}
                  className="mb-6"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹{tempFilters.priceRange[0].toLocaleString()}</span>
                  <span>₹{tempFilters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {/* Features Filter */}
            <div>
              <h4 className="font-medium mb-2 text-gray-700">Features</h4>
              <div className="space-y-2">
                {featureOptions.map(feature => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`feature-${feature}`} 
                      checked={tempFilters.features.includes(feature)}
                      onCheckedChange={() => handleFeatureChange(feature)}
                    />
                    <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="text-gray-600"
            >
              Clear All
            </Button>
            <Button onClick={applyFilters} className="bg-rentz-purple hover:bg-rentz-purple/90">
              <Check className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
