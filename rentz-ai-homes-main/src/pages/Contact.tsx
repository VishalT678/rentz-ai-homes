
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-rentz-purple">Contact Us</h1>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-rentz-purple" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 IT Park Road, Sector 22, Chandigarh, 160022</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-rentz-purple" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-rentz-purple" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@rentz.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
