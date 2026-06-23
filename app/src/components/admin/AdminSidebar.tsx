"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  MessageSquareQuote, 
  Image as ImageIcon, 
  BarChart3, 
  Settings,
  LogOut,
  X
} from 'lucide-react';

export function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Registrations', href: '/admin/registrations', icon: Users },
    { name: 'Students', href: '/admin/students', icon: GraduationCap },
    { name: 'Courses', href: '/admin/courses', icon: BookOpen },
    { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem('sabaaf_admin_auth');
    router.push('/admin/login');
  };

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-64 bg-[#0B1120] border-r border-white/5 transform transition-transform duration-300 ease-in-out flex flex-col
    md:translate-x-0 md:static md:w-64
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={sidebarClasses}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 shrink-0">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="relative w-8 h-8 overflow-hidden rounded-md">
              <Image src="/images/logo/sabaafskilllogo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white">SABAAF ADMIN</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-white/50 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-primary' : 'text-white/40'} />
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5 shrink-0">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut size={18} className="text-white/40" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
