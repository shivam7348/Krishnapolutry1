import React from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import FloatingActionFooter from "./FloatingActionFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const locations = [
    {
      name: "",
      address:
        "Reg. Office & Godown:- Kh. No.1090, Vikas Nagar, Meerut Road, Ghaziabad-201001 (U.P.) INDIA ",
      phone: "9440406200, 9849059508",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Krishna Poultry Equipment Logo"
                className="h-12 w-auto"
              />
            </div>
            <nav className="flex-grow">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 flex-grow">
              {locations.map((location, index) => (
                <div key={index} className="space-y-2">
                  {location.name && <h4 className="font-medium text-white">{location.name}</h4>}
                  <div className="text-sm flex items-start">
                    <MapPin className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  {location.phone && (
                    <div className="text-sm flex items-center">
                      <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                  )}
                </div>
              ))}
              <div className="text-sm flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href="mailto:krishnatraders1997@gmail.com"
                  className="hover:text-white"
                >
                  krishnatraders1997@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p>Monday - Saturday</p>
                  <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p>Sunday</p>
                  <p className="text-gray-400">10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-6">Location</h3>
            <div className="w-full h-64 lg:h-80 flex-grow">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kh.%20No.1090,%20Vikas%20Nagar,%20Meerut%20Road,%20Ghaziabad-201001+(poultry%20farming)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Location Map"
                className="rounded"
              >
                <a href="https://www.gps.ie/collections/drones/">
                  drone quadcopter
                </a>
              </iframe>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} Krishna Poultry Equipment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <FloatingActionFooter />
    </footer>
  );
};

export default Footer;