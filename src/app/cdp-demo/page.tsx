'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaDatabase, 
  FaUserCircle, 
  FaChartLine, 
  FaGlobe, 
  FaMobileAlt, 
  FaStore, 
  FaEnvelope, 
  FaWeixin, 
  FaHeadphones,
  FaBullseye,
  FaHeart,
  FaCogs,
  FaChartBar,
  FaDownload,
  FaSitemap,
  FaRocket,
  FaPlay,
  FaPulse
} from 'react-icons/fa';
import RealTimeDataFlow from './components/RealTimeDataFlow';
import CustomerJourney from './components/CustomerJourney';
import PredictiveAnalytics from './components/PredictiveAnalytics';

interface DataSource {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  dataTypes: string[];
  volume: string;
}

interface CustomerProfile {
  name: string;
  avatar: string;
  title: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
    type: 'currency' | 'number' | 'rating';
  }[];
  details: {
    age: number;
    occupation: string;
    interests: string[];
    preferences: string;
    activeTime: string;
    riskLevel: string;
    recommendedProduct: string;
    marketingStrategy: string;
  };
}

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  improvement: string;
}

const CDPDemo: React.FC = () => {
  const [isRealTimeActive, setIsRealTimeActive] = useState(true);
  const [selectedDataSource, setSelectedDataSource] = useState<string | null>(null);

  const dataSources: DataSource[] = [
    {
      id: 'website',
      name: 'E-commerce Website',
      icon: <FaGlobe />,
      description: 'Web Analytics',
      dataTypes: ['Page views', 'Session duration', 'Click tracking', 'Conversion funnels', 'Device analytics'],
      volume: '50K+ daily visits'
    },
    {
      id: 'mobile',
      name: 'Mobile App',
      icon: <FaMobileAlt />,
      description: 'App Usage',
      dataTypes: ['App sessions', 'Feature usage', 'Push notifications', 'Crash reports', 'User journeys'],
      volume: '200K+ MAU'
    },
    {
      id: 'store',
      name: 'Retail Stores',
      icon: <FaStore />,
      description: 'In-store Data',
      dataTypes: ['Purchase history', 'Product preferences', 'Payment methods', 'Loyalty programs', 'Service ratings'],
      volume: '500+ stores nationwide'
    },
    {
      id: 'email',
      name: 'Email Marketing',
      icon: <FaEnvelope />,
      description: 'Email Engagement',
      dataTypes: ['Open rates', 'Click-through rates', 'Unsubscribe rates', 'Forward shares', 'Conversion tracking'],
      volume: '2M+ monthly sends'
    },
    {
      id: 'social',
      name: 'Social Media',
      icon: <FaWeixin />,
      description: 'Social Analytics',
      dataTypes: ['Facebook engagement', 'Instagram interactions', 'Twitter mentions', 'YouTube views', 'Social commerce'],
      volume: '500K+ social followers'
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: <FaHeadphones />,
      description: 'Support Data',
      dataTypes: ['Support tickets', 'Issue categories', 'Resolution time', 'Satisfaction scores', 'Repeat purchases'],
      volume: '1K+ daily inquiries'
    }
  ];

  const customerProfile: CustomerProfile = {
    name: 'Alex Johnson',
    avatar: 'AJ',
    title: 'Premium User · Fitness Enthusiast',
    tags: ['VIP Customer', 'Active User', 'At Risk', 'Fitness Enthusiast'],
    metrics: [
      { label: 'Total Spent', value: '$1,299', type: 'currency' },
      { label: 'Orders', value: '8', type: 'number' },
      { label: 'Satisfaction', value: '4.9', type: 'rating' },
      { label: 'Usage Days', value: '120', type: 'number' }
    ],
    details: {
      age: 32,
      occupation: 'Software Engineer',
      interests: ['Running', 'Gym', 'Music', 'Outdoor Sports'],
      preferences: 'Premium sports headphones',
      activeTime: 'Weekday evenings, weekends',
      riskLevel: 'Medium (recent activity decline)',
      recommendedProduct: 'OpenRun Pro',
      marketingStrategy: 'Fitness-focused campaigns'
    }
  };

  const valueItems: ValueItem[] = [
    {
      icon: <FaBullseye />,
      title: 'Precision Marketing',
      description: 'Personalized recommendations based on customer profiles, increasing conversion rates by 35%',
      improvement: '+35%'
    },
    {
      icon: <FaHeart />,
      title: 'Enhanced Customer Experience',
      description: 'Personalized services improve customer satisfaction, NPS increased by 28%',
      improvement: '+28%'
    },
    {
      icon: <FaCogs />,
      title: 'Operational Efficiency',
      description: 'Automated marketing workflows reduce manual costs by 40%',
      improvement: '-40%'
    },
    {
      icon: <FaChartBar />,
      title: 'Data-Driven Decisions',
      description: 'Real-time analytics support business decisions, ROI improved by 45%',
      improvement: '+45%'
    }
  ];

  const flowSteps = [
    { icon: <FaDownload />, title: 'Data Collection', description: 'Multi-channel data gathering' },
    { icon: <FaCogs />, title: 'Data Processing', description: 'Cleaning & standardization' },
    { icon: <FaDatabase />, title: 'Data Storage', description: 'Unified data warehouse' },
    { icon: <FaUserCircle />, title: 'Profile Building', description: '360° customer view' },
    { icon: <FaRocket />, title: 'Value Realization', description: 'Marketing automation' }
  ];

  // 模拟实时数据更新
  useEffect(() => {
    if (!isRealTimeActive) return;

    const interval = setInterval(() => {
      // 这里可以添加实时数据更新逻辑
      console.log('Updating real-time data...');
    }, 5000);

    return () => clearInterval(interval);
  }, [isRealTimeActive]);

  const handleDataSourceClick = (sourceId: string) => {
    setSelectedDataSource(sourceId);
    const source = dataSources.find(s => s.id === sourceId);
    if (source) {
      alert(`${source.name} Data Source Details:\n\nData Types:\n${source.dataTypes.map(item => '• ' + item).join('\n')}\n\nVolume: ${source.volume}`);
    }
  };

  const handleCustomerClick = () => {
    const details = customerProfile.details;
    alert(`Customer Profile Details:\n\n• Name: ${customerProfile.name}\n• Age: ${details.age} years old\n• Occupation: ${details.occupation}\n• Interests: ${details.interests.join(', ')}\n• Preferences: ${details.preferences}\n• Active Time: ${details.activeTime}\n• Risk Level: ${details.riskLevel}\n• Recommended Product: ${details.recommendedProduct}\n• Marketing Strategy: ${details.marketingStrategy}`);
  };

  const handleDetailedDemo = () => {
    alert('Detailed Demo Features Include:\n\n1. Real-time Data Flow Visualization\n2. Customer Journey Mapping\n3. Marketing Automation Demo\n4. Predictive Analytics Models\n5. A/B Testing Results\n6. Personalized Recommendation Engine\n7. Customer Lifecycle Management\n\nContact us for the complete demo version!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10 text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Shokz CDP Demo
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Customer Data Platform for North American Market
          </p>
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            Real-time Data Sync Active
          </div>
        </div>

        {/* Data Flow */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
              <FaSitemap />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">CDP Data Flow</h2>
          </div>
          <p className="text-gray-600 mb-8">Complete journey from data collection to value realization</p>
          
          <div className="flex justify-between items-center">
            {flowSteps.map((step, index) => (
              <div key={index} className="text-center flex-1 relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Analytics Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <RealTimeDataFlow />
          <CustomerJourney />
          <PredictiveAnalytics />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Data Sources */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                <FaDatabase />
              </div>
            <h2 className="text-2xl font-semibold text-gray-800">Data Sources</h2>
          </div>
          <p className="text-gray-600 mb-6">CDP integrates multi-channel customer data to build unified customer views</p>
            
            <div className="grid grid-cols-2 gap-4">
              {dataSources.map((source) => (
                <div
                  key={source.id}
                  onClick={() => handleDataSourceClick(source.id)}
                  className="bg-gray-50 p-4 rounded-xl text-center cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:border-2 hover:border-blue-500"
                >
                  <div className="text-3xl text-blue-500 mb-3">{source.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-1">{source.name}</h4>
                  <p className="text-sm text-gray-600">{source.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Profile */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                <FaUserCircle />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Customer Profile</h2>
            </div>
            
            <div 
              onClick={handleCustomerClick}
              className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {customerProfile.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{customerProfile.name}</h3>
                  <p className="text-gray-600">{customerProfile.title}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {customerProfile.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      index === 0 ? 'bg-blue-500 text-white' :
                      index === 1 ? 'bg-green-500 text-white' :
                      index === 2 ? 'bg-yellow-500 text-gray-800' :
                      'bg-gray-500 text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {customerProfile.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm">
                    <div className="text-2xl font-bold text-blue-500 mb-1">{metric.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Value Demonstration */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl mr-4">
              <FaChartLine />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">CDP Value Proposition</h2>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {valueItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-xl mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={handleDetailedDemo}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaPlay className="inline mr-2" />
            View Detailed Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CDPDemo;
