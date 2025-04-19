
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, Lock, User, UserCircle2, Home } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [userType, setUserType] = useState('user'); // 'user' or 'owner'
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (!formData.agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    // Mock signup for demo
    toast.success(`Account created as ${userType === 'owner' ? 'PG Owner' : 'User'}`);
    
    if (userType === 'owner') {
      navigate('/owner-dashboard');
    } else {
      navigate('/login');
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <Tabs defaultValue="user" onValueChange={setUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="user">User Signup</TabsTrigger>
            <TabsTrigger value="owner">Owner Signup</TabsTrigger>
          </TabsList>
          
          <Card>
            <CardHeader>
              <CardTitle>Create your Rentz account</CardTitle>
              <CardDescription>
                {userType === 'owner' 
                  ? 'Register as a PG owner to list your properties' 
                  : 'Sign up to find and book the perfect PG accommodation'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="pl-10"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="youremail@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="agreeTerms" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
                    }
                  />
                  <Label htmlFor="agreeTerms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-rentz-purple hover:bg-rentz-purple/90">
                  Create Account
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="justify-center border-t p-4">
              <div className="text-sm text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-rentz-purple hover:text-rentz-purple/90 font-medium">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default Signup;
