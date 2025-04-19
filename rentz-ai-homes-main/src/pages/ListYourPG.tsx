
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { MapPin, Plus, Upload, X } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

const ListYourPG = () => {
  const navigate = useNavigate();
  const [pgData, setPgData] = useState({
    title: '',
    address: '',
    location: '',
    price: 8000,
    description: '',
    amenities: [] as string[],
    occupancy: '',
    images: [] as string[],
  });
  
  const amenitiesOptions = [
    "WiFi", "AC", "Food", "Laundry", "TV", "Parking", 
    "Gym", "Study Room", "Power Backup", "Security", 
    "Housekeeping", "Attached Bathroom", "Hot Water"
  ];
  
  const locationOptions = [
    "Law Gate", "Green Valley", "Deep Nagar", "Sector 14", "Sector 17"
  ];
  
  const occupancyOptions = [
    "Single Room", "Double Sharing", "Triple Sharing", "Four Sharing"
  ];
  
  const handleAmenityChange = (amenity: string) => {
    setPgData(prev => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!pgData.title || !pgData.address || !pgData.location || !pgData.occupancy) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (pgData.amenities.length === 0) {
      toast.error('Please select at least one amenity');
      return;
    }
    
    // Mock submission
    toast.success('Your PG has been listed successfully!');
    navigate('/owner-dashboard');
  };
  
  const handleImageUpload = () => {
    // Mock image upload
    const mockImageUrl = "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1057&q=80";
    setPgData(prev => ({
      ...prev,
      images: [...prev.images, mockImageUrl]
    }));
  };
  
  const removeImage = (index: number) => {
    setPgData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">List Your PG</h1>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below to list your PG accommodation and reach thousands of potential tenants
            </p>
            
            <Card>
              <CardHeader>
                <CardTitle>PG Listing Details</CardTitle>
                <CardDescription>
                  Provide detailed information about your PG to attract the right tenants
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="title">PG Name/Title*</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Luxury PG Accommodation in Sector 17"
                        value={pgData.title}
                        onChange={(e) => setPgData(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Full Address*</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter the complete address of your PG"
                        value={pgData.address}
                        onChange={(e) => setPgData(prev => ({ ...prev, address: e.target.value }))}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location/Area*</Label>
                        <Select 
                          value={pgData.location} 
                          onValueChange={(value) => setPgData(prev => ({ ...prev, location: value }))}
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="occupancy">Room Type*</Label>
                        <Select 
                          value={pgData.occupancy} 
                          onValueChange={(value) => setPgData(prev => ({ ...prev, occupancy: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select room type" />
                          </SelectTrigger>
                          <SelectContent>
                            {occupancyOptions.map(option => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Pricing</h3>
                    
                    <div className="space-y-2">
                      <Label>Monthly Rent: ₹{pgData.price.toLocaleString()}</Label>
                      <Slider
                        value={[pgData.price]}
                        min={3000}
                        max={20000}
                        step={500}
                        onValueChange={(value) => setPgData(prev => ({ ...prev, price: value[0] }))}
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>₹3,000</span>
                        <span>₹20,000</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Amenities and Features</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {amenitiesOptions.map(amenity => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`amenity-${amenity}`} 
                            checked={pgData.amenities.includes(amenity)}
                            onCheckedChange={() => handleAmenityChange(amenity)}
                          />
                          <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Description</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your PG in detail, including rules, special features, etc."
                        className="min-h-[120px]"
                        value={pgData.description}
                        onChange={(e) => setPgData(prev => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  {/* Images */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Images</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {pgData.images.map((image, index) => (
                          <div key={index} className="relative rounded-md overflow-hidden h-24">
                            <img 
                              src={image} 
                              alt={`PG image ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                        
                        <button
                          type="button"
                          onClick={handleImageUpload}
                          className="h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                        >
                          <Upload className="h-6 w-6 text-gray-400" />
                          <span className="text-sm text-gray-500 mt-1">
                            {pgData.images.length === 0 ? 'Add Images' : 'Add More'}
                          </span>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">
                        Add at least 3 images to showcase your PG. Maximum 8 images allowed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => navigate('/')}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-rentz-purple hover:bg-rentz-purple/90">
                      Submit Listing
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ListYourPG;
