
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { PropertyCardProps } from '@/components/PropertyCard';
import { FilterValues } from '@/components/FilterBar';
import { Search, HomeIcon, Check, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

interface FindIdealPGProps {
  locationOptions: string[];
  featureOptions: string[];
  onSearch: (filters: FilterValues) => void;
}

const FindIdealPG: React.FC<FindIdealPGProps> = ({ 
  locationOptions, 
  featureOptions, 
  onSearch 
}) => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<FilterValues>({
    locations: [],
    features: [],
    priceRange: [5000, 15000] as [number, number]
  });
  
  const handleLocationChange = (location: string) => {
    setPreferences(prev => ({
      ...prev,
      locations: [location]
    }));
  };
  
  const handlePriceChange = (value: number[]) => {
    setPreferences(prev => ({
      ...prev,
      priceRange: [value[0], value[1]] as [number, number]
    }));
  };
  
  const handleFeatureChange = (feature: string) => {
    setPreferences(prev => {
      const newFeatures = prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features: newFeatures };
    });
  };
  
  const handleSearch = () => {
    toast.success('Finding your ideal PG accommodation...');
    onSearch(preferences);
    
    // Scroll to properties section
    const propertiesSection = document.getElementById('featured-properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-rentz-purple text-white rounded-t-lg">
        <CardTitle className="text-xl">Find Your Ideal PG</CardTitle>
        <CardDescription className="text-white/80">
          Tell us your preferences and we'll find the perfect match for you
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 space-y-5">
        <div className="space-y-3">
          <Label>Preferred Location</Label>
          <Select 
            value={preferences.locations[0] || ''} 
            onValueChange={handleLocationChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map(location => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label>Budget Range</Label>
          <div className="px-2">
            <Slider
              defaultValue={[preferences.priceRange[0], preferences.priceRange[1]]}
              min={3000}
              max={20000}
              step={500}
              onValueChange={handlePriceChange}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>₹{preferences.priceRange[0].toLocaleString()}</span>
              <span>₹{preferences.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Label>Must-Have Amenities</Label>
          <div className="grid grid-cols-2 gap-2">
            {featureOptions.slice(0, 6).map(feature => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox 
                  id={`pref-feature-${feature}`} 
                  checked={preferences.features.includes(feature)}
                  onCheckedChange={() => handleFeatureChange(feature)}
                />
                <Label htmlFor={`pref-feature-${feature}`} className="text-sm">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 bg-gray-50 rounded-b-lg">
        <Button 
          onClick={handleSearch} 
          className="w-full bg-rentz-purple hover:bg-rentz-purple/90"
        >
          <Search className="h-4 w-4 mr-2" />
          Find My Ideal PG
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FindIdealPG;
