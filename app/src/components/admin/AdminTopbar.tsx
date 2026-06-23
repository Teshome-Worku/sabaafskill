"use client";
import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function AdminTopbar({ setSidebarOpen }: { setSidebarOpen: (v: boolean) => void }) {
  const pathname = usePathname();
  const pageTitle = pathname?.split('/').pop()?.replace('-', ' ') || 'Dashboard';
  
  return (
    <header className="h-16 bg-[#0B1120] border-b border-white/5 sticky top-0 z-30 flex items-center justify-between px-4 md:px-8 shrink-0">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-white/60 hover:text-white"
        >
          <Menu size={24} />
        </button>
        
        <h1 className="text-lg font-bold text-white capitalize md:hidden">{pageTitle}</h1>

        <div className="hidden md:flex items-center relative">
          <Search className="w-4 h-4 text-white/40 absolute left-3" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-[#080C16] border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-white/60 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
          <User size={16} className="text-primary" />
        </div>
      </div>
    </header>
  );
}
