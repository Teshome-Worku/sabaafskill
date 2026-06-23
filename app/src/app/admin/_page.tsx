"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Search, Trash2, CheckCircle2, Clock, Phone, MapPin, Mail, Loader2, LayoutDashboard } from 'lucide-react';
import { Registration } from '@/types';

export default function AdminDashboardClient() {
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

  const stats = {
    total: registrations.length,
    new: registrations.filter(r => r.status === 'new').length,
    contacted: registrations.filter(r => r.status === 'contacted').length,
    registered: registrations.filter(r => r.status === 'registered').length,
  };

  // Get unique courses for filter
  const uniqueCourses = Array.from(new Set(registrations.map(r => r.course)));

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header & Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-primary" />
              Registration Dashboard
            </h1>
            <p className="text-muted-foreground">Manage and track student applications</p>
          </div>
          <button 
            onClick={exportToCSV}
            className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary border border-white/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Export to CSV
          </button>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Apps', value: stats.total, color: 'text-white' },
            { label: 'New', value: stats.new, color: 'text-blue-400' },
            { label: 'Contacted', value: stats.contacted, color: 'text-yellow-400' },
            { label: 'Registered', value: stats.registered, color: 'text-green-400' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-card border border-white/5 rounded-xl p-5 shadow-lg">
              <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
              <p className={`text-3xl font-heading font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-card border border-white/5 rounded-2xl p-4 md:p-6 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search by name or phone..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-background border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-primary/50 transition-all md:w-48 appearance-none"
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
              className="bg-background border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-primary/50 transition-all md:w-56 appearance-none"
            >
              <option value="all">All Courses</option>
              {uniqueCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table / List */}
        <div className="bg-card border border-white/5 rounded-2xl shadow-xl overflow-hidden">
          {filteredRegistrations.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <p>No registrations found matching your filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-secondary/50 text-muted-foreground text-sm border-b border-white/5">
                    <th className="px-6 py-4 font-medium">Applicant</th>
                    <th className="px-6 py-4 font-medium">Course</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((reg) => (
                    <tr key={reg.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-medium text-white mb-1">{reg.fullName}</div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {reg.phone}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {reg.city}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {reg.course}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(reg.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={reg.status}
                          onChange={(e) => updateStatus(reg.id, e.target.value as Registration['status'])}
                          className={`text-xs font-bold rounded-md px-2 py-1 appearance-none border border-transparent hover:border-white/20 transition-all cursor-pointer ${
                            reg.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                            reg.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-400' :
                            reg.status === 'registered' ? 'bg-green-500/20 text-green-400' :
                            'bg-white/10 text-white/70'
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
                          className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
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
    </div>
  );
}
