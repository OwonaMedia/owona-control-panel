'use client';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
}

export default function StatCard({ icon, label, value, change }: StatCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-bold text-white mb-2">{value}</p>
      {change && <p className="text-xs text-gray-500">{change}</p>}
    </div>
  );
}
