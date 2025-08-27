import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      setLoading(true);
      
      // TODO: Uncomment when backend is ready
      // const response = await fetch('/api/home');
      // const data = await response.json();
      // setHomeData(data);
      
      // Mock data for development
      const mockData = {
        hero: {
          title: "Transform Your Ideas Into Reality",
          subtitle: "Join thousands of entrepreneurs who trust our platform to build and scale their startups",
          ctaText: "Get Started Free",
          image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        features: [
          {
            id: 1,
            title: "AI-Powered Analytics",
            description: "Get insights that matter with our advanced AI analytics platform",
            icon: "BarChart3"
          },
          {
            id: 2,
            title: "Seamless Integration",
            description: "Connect with your favorite tools and workflows effortlessly",
            icon: "Zap"
          },
          {
            id: 3,
            title: "24/7 Support",
            description: "Our expert team is here to help you succeed around the clock",
            icon: "Shield"
          }
        ],
        cta: {
          title: "Ready to Get Started?",
          description: "Join over 10,000 startups already using our platform",
          primaryButton: "Start Your Free Trial",
          secondaryButton: "Schedule Demo"
        }
      };
      
      setHomeData(mockData);
    } catch (err) {
      setError('Failed to load home data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>
          <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-48 bg-gray-300 rounded-lg"></div>
            ))}
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
            onClick={fetchHomeData}
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
      <Hero data={homeData?.hero} />
      <Features data={homeData?.features} />
      <CallToAction data={homeData?.cta} />
    </div>
  );
};

export default Home;