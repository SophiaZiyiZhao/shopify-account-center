'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaChartLine, 
  FaExclamationTriangle, 
  FaThumbsUp, 
  FaShoppingCart,
  FaUser,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';

interface Prediction {
  id: string;
  type: 'churn' | 'purchase' | 'engagement' | 'lifetime_value';
  title: string;
  probability: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
  recommendation: string;
  icon: React.ReactNode;
  color: string;
}

const PredictiveAnalytics: React.FC = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟数据加载
    setTimeout(() => {
      setPredictions([
        {
          id: '1',
          type: 'churn',
          title: 'Churn Risk Prediction',
          probability: 0.35,
          trend: 'up',
          description: 'Based on user behavior analysis, this customer has a 35% probability of churning in the next 30 days',
          recommendation: 'Send personalized discount coupons and recommend related products',
          icon: <FaExclamationTriangle />,
          color: 'text-red-500'
        },
        {
          id: '2',
          type: 'purchase',
          title: 'Purchase Intent Prediction',
          probability: 0.78,
          trend: 'up',
          description: 'User shows strong purchase intent for OpenRun Pro with 78% conversion probability',
          recommendation: 'Push limited-time offers and provide trial experiences',
          icon: <FaShoppingCart />,
          color: 'text-green-500'
        },
        {
          id: '3',
          type: 'engagement',
          title: 'Engagement Prediction',
          probability: 0.65,
          trend: 'stable',
          description: 'Expected app usage frequency will remain stable over the next 7 days',
          recommendation: 'Push fitness challenge campaigns to increase user engagement',
          icon: <FaThumbsUp />,
          color: 'text-blue-500'
        },
        {
          id: '4',
          type: 'lifetime_value',
          title: 'Lifetime Value',
          probability: 0.82,
          trend: 'up',
          description: 'Predicted customer lifetime value of $3,200 over the next 12 months',
          recommendation: 'Upgrade to VIP customer status and provide exclusive services',
          icon: <FaArrowUp />,
          color: 'text-purple-500'
        }
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <FaArrowUp className="text-green-500" />;
      case 'down': return <FaArrowDown className="text-red-500" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 0.7) return 'text-green-600';
    if (probability >= 0.4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProbabilityBg = (probability: number) => {
    if (probability >= 0.7) return 'bg-green-100';
    if (probability >= 0.4) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
            <FaChartLine />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Predictive Analytics</h3>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-20 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
          <FaChartLine />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">预测分析</h3>
      </div>

      <div className="space-y-4">
        {predictions.map((prediction) => (
          <div key={prediction.id} className="p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className={`text-2xl mr-3 ${prediction.color}`}>
                  {prediction.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{prediction.title}</h4>
                  <p className="text-sm text-gray-600">{prediction.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getProbabilityColor(prediction.probability)}`}>
                  {Math.round(prediction.probability * 100)}%
                </div>
                <div className="flex items-center justify-end mt-1">
                  {getTrendIcon(prediction.trend)}
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${getProbabilityBg(prediction.probability)}`}
                  style={{ width: `${prediction.probability * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="p-3 bg-white rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Recommendation: </span>
                {prediction.recommendation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-3">Model Performance</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-600">94.2%</div>
            <div className="text-gray-600">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">0.89</div>
            <div className="text-gray-600">F1 Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
