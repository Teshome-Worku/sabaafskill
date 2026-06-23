"use client";
import React from 'react';
import { Users, BookOpen, UserPlus, DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { title: 'Total Registrations', value: '1,248', icon: Users, change: '+12%', trend: 'up' },
    { title: 'Active Students', value: '450', icon: UserPlus, change: '+5%', trend: 'up' },
    { title: 'Active Courses', value: '4', icon: BookOpen, change: '0%', trend: 'neutral' },
    { title: 'Revenue (Demo)', value: '$12,400', icon: DollarSign, change: '+18%', trend: 'up' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Dashboard Overview</h1>
        <p className="text-white/50 text-sm">Welcome back to your administration panel.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0B1120] border border-white/5 rounded-2xl p-6 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            
            <div className="flex items-center justify-between mb-6 relative">
              <span className="text-sm font-medium text-white/60">{stat.title}</span>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shadow-[0_0_15px_rgba(26,107,240,0.15)]">
                <stat.icon size={20} />
              </div>
            </div>
            
            <div className="flex items-end justify-between relative">
              <h3 className="text-3xl font-bold text-white tracking-tight">{stat.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
                stat.trend === 'up' ? 'text-emerald-400 bg-emerald-400/10' : 'text-white/40 bg-white/5'
              }`}>
                {stat.trend === 'up' && <TrendingUp size={12} />}
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="xl:col-span-2 bg-[#0B1120] border border-white/5 rounded-2xl p-6 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Revenue Analytics</h3>
              <p className="text-xs text-white/50 mt-1">Monthly performance overview</p>
            </div>
            <select className="bg-[#080C16] border border-white/10 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary/50">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="flex-1 min-h-[300px] flex items-center justify-center border border-dashed border-white/10 rounded-xl bg-[#080C16]/50">
            <div className="text-center space-y-2">
              <BarChartIcon className="w-12 h-12 text-white/20 mx-auto" />
              <p className="text-white/40 text-sm">Interactive charts will appear here</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div className="bg-[#0B1120] border border-white/5 rounded-2xl p-6 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Recent Activity</h3>
            <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">View All</button>
          </div>
          
          <div className="flex-1 space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <UserPlus size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">New Student Registration</p>
                  <p className="text-xs text-white/50 mt-0.5">Abebe Kebede signed up for Video Editing</p>
                  <p className="text-[10px] text-white/30 mt-1.5 font-medium">{i * 2} hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}
