"use client";

import React, { useState, useEffect } from 'react';
import { Download, Search, Trash2, Phone, MapPin, Loader2, Users } from 'lucide-react';
import { Registration } from '@/types';

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [courseFilter, setCourseFilter] = useState<string>('all');

  useEffect(() => {
    // Load from localStorage
    const loadData = () => {
      try {
        const stored = localStorage.getItem('sabaaf-registrations');
        if (stored) {
          setRegistrations(JSON.parse(stored));
        }
      } catch (err) {
        console.error("Failed to load registrations", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  const saveToStorage = (newData: Registration[]) => {
    localStorage.setItem('sabaaf-registrations', JSON.stringify(newData));
    setRegistrations(newData);
  };

  const updateStatus = (id: string, newStatus: Registration['status']) => {
    const updated = registrations.map(reg => 
      reg.id === id ? { ...reg, status: newStatus } : reg
    );
    saveToStorage(updated);
  };

  const deleteRegistration = (id: string) => {
    if (window.confirm('Are you sure you want to delete this registration?')) {
      const updated = registrations.filter(reg => reg.id !== id);
      saveToStorage(updated);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Phone', 'City', 'Course', 'Status', 'Message'];
    const csvContent = [
      headers.join(','),
      ...registrations.map(r => [
        r.id,
        new Date(r.submittedAt).toLocaleDateString(),
        `"${r.fullName}"`,
        r.phone,
        `"${r.city}"`,
        `"${r.course}"`,
        r.status,
        `"${r.message.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `sabaaf_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Derived state
  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          reg.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || reg.status === statusFilter;
    const matchesCourse = courseFilter === 'all' || reg.course === courseFilter;
    
    return matchesSearch && matchesStatus && matchesCourse;
  });

  // Get unique courses for filter
  const uniqueCourses = Array.from(new Set(registrations.map(r => r.course)));

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3 tracking-tight">
            <Users className="w-8 h-8 text-primary" />
            Registration Management
          </h1>
          <p className="text-white/50 text-sm">Review, update, and export student applications.</p>
        </div>
        <button 
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-[#080C16] hover:bg-primary/10 border border-white/10 hover:border-primary/30 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg"
        >
          <Download className="w-4 h-4" />
          Export to CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#0B1120] border border-white/5 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search by name or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#080C16] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/30"
            />
          </div>
          
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#080C16] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors lg:w-48 appearance-none"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="registered">Registered</option>
            <option value="completed">Completed</option>
          </select>

          <select 
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="bg-[#080C16] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors lg:w-56 appearance-none"
          >
            <option value="all">All Courses</option>
            {uniqueCourses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0B1120] border border-white/5 rounded-2xl shadow-lg overflow-hidden">
        {filteredRegistrations.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white/20" />
            </div>
            <p className="text-white/60 font-medium">No registrations found</p>
            <p className="text-white/40 text-sm mt-1">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#080C16] text-white/50 text-xs uppercase tracking-wider border-b border-white/5">
                  <th className="px-6 py-4 font-medium">Applicant</th>
                  <th className="px-6 py-4 font-medium">Course</th>
                  <th className="px-6 py-4 font-medium">Date Applied</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-white mb-1.5">{reg.fullName}</div>
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-white/30" /> {reg.phone}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-white/30" /> {reg.city}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {reg.course}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/60">
                      {new Date(reg.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={reg.status}
                        onChange={(e) => updateStatus(reg.id, e.target.value as Registration['status'])}
                        className={`text-xs font-bold rounded-lg px-3 py-1.5 appearance-none border border-transparent hover:border-white/20 transition-all cursor-pointer focus:outline-none ${
                          reg.status === 'new' ? 'bg-blue-500/10 text-blue-400' :
                          reg.status === 'contacted' ? 'bg-yellow-500/10 text-yellow-400' :
                          reg.status === 'registered' ? 'bg-green-500/10 text-green-400' :
                          'bg-white/5 text-white/60'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="registered">Registered</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => deleteRegistration(reg.id)}
                        className="p-2 text-white/30 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete Registration"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
