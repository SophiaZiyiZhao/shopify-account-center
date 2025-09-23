'use client';

import React, { useState } from 'react';
import { 
  FaEye, 
  FaShoppingCart, 
  FaHeart, 
  FaShare, 
  FaComment, 
  FaRedo,
  FaCheckCircle,
  FaTimesCircle,
  FaClock
} from 'react-icons/fa';

interface JourneyStep {
  id: string;
  stage: string;
  action: string;
  timestamp: string;
  channel: string;
  outcome: 'success' | 'failure' | 'pending';
  details: string;
}

const CustomerJourney: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const journeySteps: JourneyStep[] = [
    {
      id: '1',
      stage: 'Awareness',
      action: 'Website Visit',
      timestamp: '2024-01-15 10:30',
      channel: 'Website',
      outcome: 'success',
      details: 'User discovered Shokz through Google search, visited OpenRun Pro product page, spent 3:45 minutes browsing'
    },
    {
      id: '2',
      stage: 'Interest',
      action: 'Product Comparison',
      timestamp: '2024-01-15 14:20',
      channel: 'Website',
      outcome: 'success',
      details: 'User compared OpenRun Pro vs OpenRun, reviewed specifications and customer reviews'
    },
    {
      id: '3',
      stage: 'Consideration',
      action: 'Add to Cart',
      timestamp: '2024-01-16 09:15',
      channel: 'Website',
      outcome: 'success',
      details: 'User added OpenRun Pro to cart but did not complete purchase'
    },
    {
      id: '4',
      stage: 'Consideration',
      action: 'Email Marketing',
      timestamp: '2024-01-16 15:30',
      channel: 'Email',
      outcome: 'success',
      details: 'Received product recommendation email, clicked "Buy Now" link'
    },
    {
      id: '5',
      stage: 'Purchase',
      action: 'Complete Order',
      timestamp: '2024-01-17 11:45',
      channel: 'Website',
      outcome: 'success',
      details: 'User completed purchase, order value $199, used credit card payment'
    },
    {
      id: '6',
      stage: 'Usage',
      action: 'Product Activation',
      timestamp: '2024-01-19 16:20',
      channel: 'Mobile App',
      outcome: 'success',
      details: 'User downloaded Shokz app, activated product, started using'
    },
    {
      id: '7',
      stage: 'Loyalty',
      action: 'Product Review',
      timestamp: '2024-01-25 20:10',
      channel: 'Website',
      outcome: 'success',
      details: 'User left 5-star review, recommended to friends'
    },
    {
      id: '8',
      stage: 'Advocacy',
      action: 'Social Share',
      timestamp: '2024-02-01 18:30',
      channel: 'Social Media',
      outcome: 'pending',
      details: 'User shared experience on Instagram, received multiple likes and comments'
    }
  ];

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'Awareness': return <FaEye className="text-blue-500" />;
      case 'Interest': return <FaHeart className="text-red-500" />;
      case 'Consideration': return <FaShoppingCart className="text-yellow-500" />;
      case 'Purchase': return <FaCheckCircle className="text-green-500" />;
      case 'Usage': return <FaClock className="text-purple-500" />;
      case 'Loyalty': return <FaRedo className="text-indigo-500" />;
      case 'Advocacy': return <FaShare className="text-pink-500" />;
      default: return <FaComment className="text-gray-500" />;
    }
  };

  const getOutcomeIcon = (outcome: string) => {
    switch (outcome) {
      case 'success': return <FaCheckCircle className="text-green-500" />;
      case 'failure': return <FaTimesCircle className="text-red-500" />;
      case 'pending': return <FaClock className="text-yellow-500" />;
      default: return <FaClock className="text-gray-500" />;
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'Website': return 'bg-blue-100 text-blue-800';
      case 'Email': return 'bg-yellow-100 text-yellow-800';
      case 'Mobile App': return 'bg-green-100 text-green-800';
      case 'Social Media': return 'bg-green-100 text-green-800';
      case 'Retail': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
          <FaShare />
        </div>
          <h3 className="text-xl font-semibold text-gray-800">Customer Journey</h3>
      </div>

      <div className="space-y-4">
        {journeySteps.map((step, index) => (
          <div
            key={step.id}
            className={`relative p-4 rounded-lg border-l-4 cursor-pointer transition-all ${
              selectedStep === step.id 
                ? 'bg-blue-50 border-blue-500 shadow-md' 
                : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm mr-3">
                  {getStageIcon(step.stage)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">{step.action}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getChannelColor(step.channel)}`}>
                      {step.channel}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{step.timestamp}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getOutcomeIcon(step.outcome)}
                <span className="text-sm text-gray-500">{step.stage}</span>
              </div>
            </div>
            
            {selectedStep === step.id && (
              <div className="mt-4 p-3 bg-white rounded-lg border">
                <p className="text-sm text-gray-700">{step.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Journey Analytics</h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-gray-600">Touchpoints</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">17 days</div>
            <div className="text-gray-600">Conversion Cycle</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">87%</div>
            <div className="text-gray-600">Conversion Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourney;
