import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

// Props: data (object with title, description, primaryButton, secondaryButton)
const CallToAction = ({ data }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!data) return null;

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Uncomment when backend is ready
    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email })
    //   });
    //   if (response.ok) {
    //     setIsSubscribed(true);
    //   }
    // } catch (error) {
    //   console.error('Subscription failed:', error);
    // }
    
    // Mock subscription success
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 bg-opacity-20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {data.title}
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            {data.description}
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-blue-100">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>10,000+ active users</span>
            </div>
            
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              <span>4.9/5 average rating</span>
            </div>
            
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
              <span>127% growth rate</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {data.primaryButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              {data.secondaryButton}
            </Link>
          </div>
          
          {/* Email Subscription */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Stay updated with our newsletter
            </h3>
            
            <p className="text-blue-100 text-center mb-6">
              Get the latest updates, tips, and insights delivered straight to your inbox.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isLoading ? (
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Successfully subscribed! Check your email.
                </div>
              </div>
            )}
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-100">
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">256-bit</div>
              <div className="text-sm">SSL Security</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-white mb-2">GDPR</div>
              <div className="text-sm">Compliant</div>
            </div>
          </div>
          
          {/* Final Message */}
          <div className="mt-12 text-center">
            <p className="text-blue-100 text-sm">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;