'use client';

import React, { useState, useEffect } from 'react';
import { FaDatabase, FaArrowRight, FaSync, FaChartLine } from 'react-icons/fa';

interface DataEvent {
  id: string;
  source: string;
  type: string;
  timestamp: Date;
  data: any;
}

const RealTimeDataFlow: React.FC = () => {
  const [dataEvents, setDataEvents] = useState<DataEvent[]>([]);
  const [isActive, setIsActive] = useState(true);

  const dataSources = [
    { name: 'Website', color: 'bg-blue-500' },
    { name: 'Mobile App', color: 'bg-green-500' },
    { name: 'Retail Store', color: 'bg-purple-500' },
    { name: 'Social Media', color: 'bg-green-600' },
    { name: 'Email Marketing', color: 'bg-yellow-500' },
    { name: 'Customer Support', color: 'bg-red-500' }
  ];

  const eventTypes = [
    'Page View', 'Purchase', 'App Launch', 'Email Click', 'Support Ticket', 'Social Engagement'
  ];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      const newEvent: DataEvent = {
        id: Math.random().toString(36).substr(2, 9),
        source: dataSources[Math.floor(Math.random() * dataSources.length)].name,
        type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        timestamp: new Date(),
        data: {
          userId: Math.floor(Math.random() * 10000),
          value: Math.floor(Math.random() * 1000)
        }
      };

      setDataEvents(prev => [newEvent, ...prev.slice(0, 9)]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
            <FaChartLine />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Real-time Data Flow</h3>
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isActive 
              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FaSync className={`mr-2 ${isActive ? 'animate-spin' : ''}`} />
          {isActive ? 'Running' : 'Paused'}
        </button>
      </div>

      <div className="space-y-3">
        {dataEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FaDatabase className="text-4xl mx-auto mb-3 opacity-50" />
            <p>Waiting for data flow...</p>
          </div>
        ) : (
          dataEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500 animate-fadeIn"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{event.source}</span>
                  <span className="text-sm text-gray-500">{formatTime(event.timestamp)}</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {event.type} - User ID: {event.data.userId}
                </div>
              </div>
              <FaArrowRight className="text-blue-500 ml-3" />
            </div>
          ))
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-700 font-medium">Data Processing Status</span>
          <span className="text-blue-600">Normal</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeDataFlow;
