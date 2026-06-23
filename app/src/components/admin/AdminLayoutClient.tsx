"use client";
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopbar } from './AdminTopbar';

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('sabaaf_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      if (pathname === '/admin/login' || pathname === '/admin') {
        router.push('/admin/dashboard');
      }
    } else {
      setIsAuthenticated(false);
      if (pathname !== '/admin/login') {
        router.push('/admin/login');
      }
    }
  }, [pathname, router]);

  // Prevent hydration mismatch or flashing by returning null initially
  if (isAuthenticated === null) return (
    <div className="min-h-screen bg-[#080C16] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-[#080C16] text-white">{children}</div>;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#080C16] text-white flex overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <AdminTopbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
