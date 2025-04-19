
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Lock, UserCircle2 } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // 'user' or 'owner'
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login for demo
    if (email && password) {
      toast.success(`Logged in as ${userType === 'owner' ? 'Owner' : 'User'}`);
      
      if (userType === 'owner') {
        navigate('/owner-dashboard');
      } else {
        navigate('/');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-4">
        <Tabs defaultValue="user" onValueChange={setUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="user">User Login</TabsTrigger>
            <TabsTrigger value="owner">Owner Login</TabsTrigger>
          </TabsList>
          
          <Card>
            <CardHeader>
              <CardTitle>Welcome back to Rentz</CardTitle>
              <CardDescription>
                Login to manage your {userType === 'owner' ? 'PG listings' : 'bookings and preferences'}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="youremail@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="text-sm text-right">
                  <Link to="/forgot-password" className="text-rentz-purple hover:text-rentz-purple/90">
                    Forgot password?
                  </Link>
                </div>
                
                <Button type="submit" className="w-full bg-rentz-purple hover:bg-rentz-purple/90">
                  Login
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="justify-center border-t p-4">
              <div className="text-sm text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-rentz-purple hover:text-rentz-purple/90 font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
