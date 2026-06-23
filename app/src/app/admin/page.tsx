import { Metadata } from 'next';
import AdminDashboardClient from './_page';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Sabaaf Skill',
  description: 'Manage student registrations and applications.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboardClient />;
}
