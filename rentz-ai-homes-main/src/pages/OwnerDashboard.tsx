
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Home, 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  MessageSquare, 
  Star, 
  UserCheck, 
  BarChart3,
  User,
  LogOut,
  Settings,
  MapPin
} from 'lucide-react';
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { PropertyCardProps } from '@/components/PropertyCard';

const OwnerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('properties');
  
  // Mock data
  const myListings: PropertyCardProps[] = [
    {
      id: "o1",
      title: "Rohit Rooms for Working Professionals",
      address: "Law Gate, Chandigarh",
      price: 13500,
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      amenities: ["WiFi", "AC", "Food", "Gym", "Gaming Zone", "Parking"],
      occupancy: "Single Room"
    },
    {
      id: "o2",
      title: "Rohit Deluxe PG for Students",
      address: "Sector 14, Chandigarh",
      price: 10000,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
      amenities: ["WiFi", "AC", "Food", "Laundry", "TV"],
      occupancy: "Double Sharing"
    }
  ];
  
  const bookings = [
    { id: 1, tenant: "Rahul Sharma", date: "Apr 20, 2025", property: "Rohit Rooms for Working Professionals", status: "confirmed" },
    { id: 2, tenant: "Neha Singh", date: "Apr 22, 2025", property: "Rohit Deluxe PG for Students", status: "pending" },
    { id: 3, tenant: "Vikram Patel", date: "Apr 25, 2025", property: "Rohit Rooms for Working Professionals", status: "confirmed" }
  ];
  
  const inquiries = [
    { id: 1, from: "Ajay Kumar", date: "Apr 16, 2025", message: "Is food service available on weekends?", status: "unread" },
    { id: 2, from: "Priya Gupta", date: "Apr 15, 2025", message: "Do you have any single rooms available next month?", status: "read" }
  ];
  
  const handleAddNewListing = () => {
    navigate('/list-your-pg');
  };
  
  const handleEditListing = (id: string) => {
    toast.info(`Editing listing ${id}`);
    navigate('/list-your-pg');
  };
  
  const handleDeleteListing = (id: string) => {
    toast.success(`Listing deleted successfully`);
  };
  
  const handleBookingAction = (id: number, action: string) => {
    toast.success(`Booking ${id} ${action}`);
  };
  
  const handleInquiryReply = (id: number) => {
    toast.success(`Reply sent to inquiry ${id}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <Card className="md:col-span-1 h-fit">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-rentz-purple/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-rentz-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rohit Sharma</h3>
                    <p className="text-sm text-gray-500">PG Owner</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  <SidebarItem 
                    icon={<Home className="h-4 w-4" />} 
                    label="My Properties" 
                    active={activeTab === 'properties'} 
                    onClick={() => setActiveTab('properties')}
                  />
                  <SidebarItem 
                    icon={<Calendar className="h-4 w-4" />} 
                    label="Bookings" 
                    badge={bookings.filter(b => b.status === 'pending').length.toString()}
                    active={activeTab === 'bookings'} 
                    onClick={() => setActiveTab('bookings')}
                  />
                  <SidebarItem 
                    icon={<MessageSquare className="h-4 w-4" />} 
                    label="Inquiries" 
                    badge={inquiries.filter(i => i.status === 'unread').length.toString()}
                    active={activeTab === 'inquiries'} 
                    onClick={() => setActiveTab('inquiries')}
                  />
                  <SidebarItem 
                    icon={<BarChart3 className="h-4 w-4" />} 
                    label="Analytics" 
                    active={activeTab === 'analytics'} 
                    onClick={() => setActiveTab('analytics')}
                  />
                  <SidebarItem 
                    icon={<Settings className="h-4 w-4" />} 
                    label="Settings" 
                    active={activeTab === 'settings'} 
                    onClick={() => setActiveTab('settings')}
                  />
                  <SidebarItem 
                    icon={<LogOut className="h-4 w-4" />} 
                    label="Logout" 
                    onClick={() => {
                      toast.info('Logged out successfully');
                      navigate('/');
                    }}
                  />
                </nav>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="md:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Owner Dashboard</h1>
                <Button 
                  onClick={handleAddNewListing}
                  className="bg-rentz-purple hover:bg-rentz-purple/90"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add New Listing
                </Button>
              </div>
              
              {/* Wrap all tabs content in a Tabs component */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsContent value="properties" className="m-0 space-y-4">
                  {activeTab === 'properties' && (
                    <>
                      <h2 className="text-xl font-semibold">My Properties</h2>
                      
                      {myListings.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                          {myListings.map(listing => (
                            <PropertyListingCard 
                              key={listing.id}
                              listing={listing}
                              onEdit={() => handleEditListing(listing.id)}
                              onDelete={() => handleDeleteListing(listing.id)}
                            />
                          ))}
                        </div>
                      ) : (
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                            <Home className="h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Properties Listed Yet</h3>
                            <p className="text-gray-500 max-w-md mb-6">
                              Start listing your PG accommodations to reach potential tenants looking for places to stay.
                            </p>
                            <Button onClick={handleAddNewListing} className="bg-rentz-purple hover:bg-rentz-purple/90">
                              <Plus className="h-4 w-4 mr-2" /> List Your First Property
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </>
                  )}
                </TabsContent>
                
                {/* Bookings */}
                <TabsContent value="bookings" className="m-0 space-y-4">
                  {activeTab === 'bookings' && (
                    <>
                      <h2 className="text-xl font-semibold">Booking Requests</h2>
                      
                      {bookings.length > 0 ? (
                        <Card>
                          <CardContent className="p-0">
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Tenant</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Property</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {bookings.map(booking => (
                                    <tr key={booking.id} className="border-b">
                                      <td className="px-4 py-3 text-sm">{booking.tenant}</td>
                                      <td className="px-4 py-3 text-sm">{booking.date}</td>
                                      <td className="px-4 py-3 text-sm">{booking.property}</td>
                                      <td className="px-4 py-3 text-sm">
                                        <Badge className={booking.status === 'confirmed' 
                                          ? 'bg-green-500' 
                                          : 'bg-yellow-500'}>
                                          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                                        </Badge>
                                      </td>
                                      <td className="px-4 py-3 text-sm text-right">
                                        {booking.status === 'pending' ? (
                                          <div className="flex justify-end gap-2">
                                            <Button 
                                              size="sm" 
                                              variant="outline" 
                                              onClick={() => handleBookingAction(booking.id, 'confirmed')}
                                            >
                                              Confirm
                                            </Button>
                                            <Button 
                                              size="sm" 
                                              variant="outline" 
                                              className="text-red-500 hover:text-red-600" 
                                              onClick={() => handleBookingAction(booking.id, 'rejected')}
                                            >
                                              Reject
                                            </Button>
                                          </div>
                                        ) : (
                                          <Button 
                                            size="sm" 
                                            variant="outline" 
                                            onClick={() => handleBookingAction(booking.id, 'viewed')}
                                          >
                                            View Details
                                          </Button>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                            <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Bookings Yet</h3>
                            <p className="text-gray-500 max-w-md">
                              When tenants book your PG accommodations, they'll appear here.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </>
                  )}
                </TabsContent>
                
                {/* Inquiries */}
                <TabsContent value="inquiries" className="m-0 space-y-4">
                  {activeTab === 'inquiries' && (
                    <>
                      <h2 className="text-xl font-semibold">Inquiries</h2>
                      
                      {inquiries.length > 0 ? (
                        <div className="space-y-4">
                          {inquiries.map(inquiry => (
                            <Card key={inquiry.id}>
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h3 className="font-medium">{inquiry.from}</h3>
                                      {inquiry.status === 'unread' && (
                                        <Badge className="bg-blue-500">New</Badge>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-500">{inquiry.date}</p>
                                  </div>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    onClick={() => handleInquiryReply(inquiry.id)}
                                  >
                                    Reply
                                  </Button>
                                </div>
                                <p className="text-gray-700">{inquiry.message}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                            <MessageSquare className="h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Inquiries Yet</h3>
                            <p className="text-gray-500 max-w-md">
                              When users send inquiries about your listings, they'll appear here.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </>
                  )}
                </TabsContent>
                
                {/* Analytics */}
                <TabsContent value="analytics" className="m-0 space-y-4">
                  {activeTab === 'analytics' && (
                    <>
                      <h2 className="text-xl font-semibold">Analytics</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard 
                          title="Total Views" 
                          value="324" 
                          trend="+12%" 
                        />
                        <StatCard 
                          title="Inquiries" 
                          value="24" 
                          trend="+8%" 
                        />
                        <StatCard 
                          title="Bookings" 
                          value="8" 
                          trend="+5%" 
                        />
                      </div>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Monthly Performance</CardTitle>
                          <CardDescription>
                            View statistics for your properties
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 flex items-center justify-center text-gray-500">
                            <p>Performance charts will be available soon</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </TabsContent>
                
                {/* Settings */}
                <TabsContent value="settings" className="m-0 space-y-4">
                  {activeTab === 'settings' && (
                    <>
                      <h2 className="text-xl font-semibold">Account Settings</h2>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Profile Information</CardTitle>
                          <CardDescription>
                            Update your account details
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 flex items-center justify-center text-gray-500">
                            <p>Profile settings will be available soon</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, badge, active, onClick }) => {
  return (
    <button
      className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
        active 
          ? 'bg-rentz-purple/10 text-rentz-purple' 
          : 'text-gray-600 hover:bg-gray-100'
      } transition-colors`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        {label}
      </div>
      {badge && (
        <Badge>{badge}</Badge>
      )}
    </button>
  );
};

interface PropertyListingCardProps {
  listing: PropertyCardProps;
  onEdit: () => void;
  onDelete: () => void;
}

const PropertyListingCard: React.FC<PropertyListingCardProps> = ({ listing, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 h-40 md:h-auto">
            <img 
              src={listing.imageUrl} 
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{listing.title}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {listing.address}
                </div>
              </div>
              <div className="mt-2 md:mt-0 flex items-center">
                <div className="flex items-center mr-4">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                  <span className="font-medium">{listing.rating}</span>
                </div>
                <div className="font-semibold text-lg">
                  ₹{listing.price.toLocaleString()}/mo
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {listing.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {amenity}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-500">Added on:</span> Apr 10, 2025
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={onEdit}
                >
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-red-500 hover:text-red-600 hover:border-red-300" 
                  onClick={onDelete}
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend }) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold">{value}</p>
          <Badge className={`${isPositive ? 'bg-green-500' : 'bg-red-500'}`}>
            {trend}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default OwnerDashboard;
