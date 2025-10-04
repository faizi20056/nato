import { Shield, Award, Lock, Headphones as HeadphonesIcon } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Military Verified',
      description: 'ID verification required',
    },
    {
      icon: Award,
      title: '20+ Years Trusted',
      description: 'Since 2002',
    },
    {
      icon: Lock,
      title: 'Secure Booking',
      description: 'SSL encrypted',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Multilingual team',
    },
  ];

  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex items-center space-x-3 lg:justify-center">
                <div className="flex-shrink-0 w-12 h-12 bg-nato-blue rounded-lg flex items-center justify-center">
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{point.title}</div>
                  <div className="text-sm text-gray-600">{point.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
