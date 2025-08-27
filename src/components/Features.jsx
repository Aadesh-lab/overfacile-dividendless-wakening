import React from 'react';
import { BarChart3, Zap, Shield, ArrowUpRight } from 'lucide-react';

// Props: data (array of feature objects with id, title, description, icon)
const Features = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  const getIcon = (iconName) => {
    const icons = {
      BarChart3,
      Zap,
      Shield
    };
    const IconComponent = icons[iconName] || BarChart3;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Features
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> succeed</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools and features designed to help your startup grow faster and smarter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.icon)}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Features List */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Plus many more features
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover all the tools and capabilities that make our platform the perfect choice for your startup.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Advanced Security',
                    'Real-time Collaboration',
                    'Mobile Apps',
                    'API Integration',
                    'Custom Workflows',
                    'Priority Support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8">
                  <div className="h-full bg-white bg-opacity-20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">99.9%</div>
                      <div className="text-sm opacity-80">Uptime Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;