import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      setLoading(true);
      
      // TODO: Uncomment when backend is ready
      // const response = await fetch('/api/contact');
      // const data = await response.json();
      // setContactData(data);
      
      // Mock data for development
      const mockData = {
        company: {
          name: "StartupCorp",
          tagline: "Transforming Ideas Into Reality",
          description: "We'd love to hear from you. Get in touch with our team and let's discuss how we can help bring your vision to life."
        },
        contactInfo: {
          address: "123 Innovation Drive, Tech Valley, CA 94000",
          phone: "+1 (555) 123-4567",
          email: "hello@startupcorp.com",
          businessHours: "Monday - Friday: 9:00 AM - 6:00 PM PST"
        },
        socialMedia: [
          { platform: "Twitter", url: "https://twitter.com/startupcorp" },
          { platform: "LinkedIn", url: "https://linkedin.com/company/startupcorp" },
          { platform: "GitHub", url: "https://github.com/startupcorp" }
        ],
        mapLocation: {
          lat: 37.7749,
          lng: -122.4194,
          address: "123 Innovation Drive, Tech Valley, CA 94000"
        }
      };
      
      setContactData(mockData);
    } catch (err) {
      setError('Failed to load contact data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="animate-pulse max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-12"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-96 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={fetchContactData}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {contactData?.company?.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Info and Map */}
            <div className="space-y-8">
              <ContactInfo data={contactData?.contactInfo} socialMedia={contactData?.socialMedia} />
              <Map location={contactData?.mapLocation} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;