
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, Users, Star, Heart, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  rating: number;
  imageUrl: string;
  amenities: string[];
  occupancy: string;
  isRecommended?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  address,
  price,
  rating,
  imageUrl,
  amenities,
  occupancy,
  isRecommended = false,
  className,
  style
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden bg-white shadow-md transition-all card-hover relative",
        isRecommended && "ring-2 ring-rentz-purple",
        className
      )}
      style={style}
    >
      {isRecommended && (
        <div className="absolute top-3 left-3 z-10">
          <Badge 
            className="bg-rentz-purple text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
          >
            <Wifi className="h-3 w-3" /> AI Recommended
          </Badge>
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
        <button 
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          onClick={toggleFavorite}
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-colors", 
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-700 hover:text-red-500"
            )} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-sm">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="font-medium text-gray-800">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 mb-3 text-sm">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="line-clamp-1">{address}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs rounded-full px-2 py-0 border-gray-200 text-gray-600">
            <Users className="h-3 w-3 mr-1" /> {occupancy}
          </Badge>
          
          {amenities.slice(0, 2).map((amenity, index) => (
            <Badge key={index} variant="outline" className="text-xs rounded-full px-2 py-0 border-gray-200 text-gray-600">
              {amenity}
            </Badge>
          ))}
          
          {amenities.length > 2 && (
            <Badge variant="outline" className="text-xs rounded-full px-2 py-0 border-gray-200 text-gray-600">
              +{amenities.length - 2} more
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">₹{price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-rentz-purple hover:bg-rentz-purple/90"
                size="sm"
              >
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[680px] overflow-auto max-h-[85vh]">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
                <DialogDescription className="flex items-center gap-1 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-gray-500" />
                  {address}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="h-72 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Details</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Type</span>
                        <span className="font-medium">{occupancy}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Monthly Rent</span>
                        <span className="font-medium">₹{price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Security Deposit</span>
                        <span className="font-medium">₹{(price).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Rating</span>
                        <span className="font-medium flex items-center">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                          {rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 py-1">
                          <div className="h-2 w-2 rounded-full bg-rentz-purple"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-600">
                    Experience comfortable living at {title} located in {address}. This {occupancy.toLowerCase()} PG accommodation offers modern amenities including {amenities.slice(0, 3).join(', ')} and more. Ideal for students and working professionals looking for a convenient and well-maintained living space.
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">₹{price.toLocaleString()}</div>
                    <div className="text-gray-500">per month</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="font-medium"
                      onClick={() => window.location.href = `tel:+911234567890`}
                    >
                      Contact Owner
                    </Button>
                    <Button className="bg-rentz-purple hover:bg-rentz-purple/90 font-medium">
                      Book Visit
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
