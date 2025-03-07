import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const locations = [
    {
      name: "Reg. Office & Godown",
      address: "Kh. No.1090, Vikas Nagar, Meerut Road, Ghaziabad-201001 (U.P.) INDIA",
      phone: "9440406200, 9849059508",
    },
  ];

  return (
    <div className="bg-gray-50 w-full max-w-7xl min-h-screen py-12 mx-auto border">
    <div className="container w-full px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border ">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md border ">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium text-gray-900">{location.name}</h4>
                <p className="text-sm flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{location.address}</span>
                </p>
                {location.phone && (
                  <p className="text-sm flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>{location.phone}</span>
                  </p>
                )}
              </div>
            ))}
            <p className="text-sm flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:krishnatraders1997@gmail.com" className="hover:text-indigo-600">
                krishnatraders1997@gmail.com
              </a>
            </p>
          </div>

         
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;