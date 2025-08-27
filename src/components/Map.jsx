import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Copy, CheckCircle } from 'lucide-react';

// Props: location (object with lat, lng, address)
const Map = ({ location }) => {
  const [copied, setCopied] = useState(false);
  
  if (!location) return null;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = location.address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenInMaps = () => {
    const encodedAddress = encodeURIComponent(location.address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(location.address);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Find Us Here
          </h2>
          <MapPin className="h-6 w-6 text-blue-600" />
        </div>
        
        <p className="text-gray-600 mb-4">
          {location.address}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            {copied ? (
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
          
          <button
            onClick={handleOpenInMaps}
            className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Open in Maps
          </button>
          
          <button
            onClick={handleGetDirections}
            className="inline-flex items-center px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </button>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="relative h-80 bg-gray-100">
        {/* Static Map Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Interactive Map
            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Click "Open in Maps" above to view our location in your preferred map application.
            </p>
            
            {/* Mock map elements */}
            <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-lg">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">StartupCorp</span>
              </div>
            </div>
            
            {/* Mock zoom controls */}
            <div className="absolute top-4 right-4 bg-white rounded shadow-lg">
              <button className="block w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors">
                +
              </button>
              <div className="border-t border-gray-200"></div>
              <button className="block w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors">
                −
              </button>
            </div>
          </div>
        </div>
        
        {/* TODO: Replace with actual map integration */}
        {/* 
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address)}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        */}
      </div>
      
      {/* Location Details */}
      <div className="p-6 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Public Transportation
            </h4>
            <p className="text-sm text-gray-600">
              Metro Station: Tech Valley (5 min walk)
              <br />
              Bus Lines: 42, 108, 234
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Parking
            </h4>
            <p className="text-sm text-gray-600">
              Street parking available
              <br />
              Paid parking garage nearby
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;