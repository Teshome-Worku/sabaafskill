import React from 'react';
import { AdminLayoutClient } from '@/components/admin/AdminLayoutClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Sabaaf Skill',
  robots: {
    index: false,
    follow: false,
  }
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
