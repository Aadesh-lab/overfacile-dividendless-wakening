import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink, Twitter, Linkedin, Github } from 'lucide-react';

// Props: data (object with contact information), socialMedia (array of social media links)
const ContactInfo = ({ data, socialMedia }) => {
  if (!data) return null;

  const getSocialIcon = (platform) => {
    const icons = {
      Twitter,
      LinkedIn: Linkedin,
      GitHub: Github
    };
    return icons[platform] || ExternalLink;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600">
          Get in touch with us through any of these channels.
        </p>
      </div>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg">
              <MapPin className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Our Office
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {data.address}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg">
              <Phone className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Phone Number
            </h3>
            <a 
              href={`tel:${data.phone}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {data.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg">
              <Mail className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Email Address
            </h3>
            <a 
              href={`mailto:${data.email}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {data.email}
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-lg">
              <Clock className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Business Hours
            </h3>
            <p className="text-gray-600">
              {data.businessHours}
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      {socialMedia && socialMedia.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {socialMedia.map((social, index) => {
              const IconComponent = getSocialIcon(social.platform);
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/"
            className="flex items-center justify-center px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 font-medium"
          >
            Visit Homepage
          </Link>
          <Link
            to="/about"
            className="flex items-center justify-center px-4 py-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Response Time */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">
              We typically respond within 24 hours
            </p>
            <p className="text-sm text-green-600">
              For urgent matters, please call us directly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;