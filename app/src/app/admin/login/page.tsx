"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Lock, Mail } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@sabaafskill.demo');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      if (email === 'admin@sabaafskill.demo' && password === 'password123') {
        localStorage.setItem('sabaaf_admin_auth', 'true');
        router.push('/admin/dashboard');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#080C16]">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="w-full max-w-md bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative z-10 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 relative rounded-xl overflow-hidden mb-4 shadow-[0_0_20px_rgba(26,107,240,0.3)]">
            <Image src="/images/logo/sabaafskilllogo.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-sm text-white/50 mt-1">Sign in to the Admin Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg text-center animate-in fade-in slide-in-from-top-1">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/70">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#080C16] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/70">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#080C16] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="rounded border-white/10 bg-[#080C16] text-primary focus:ring-primary/50" />
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full h-11 text-base font-medium shadow-[0_0_15px_rgba(26,107,240,0.3)]" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3 font-semibold">Demo Credentials</p>
          <div className="bg-[#080C16] rounded-lg p-3.5 text-sm text-left border border-white/5 flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-white/60">
              <span>Email:</span>
              <span className="text-white font-medium select-all">admin@sabaafskill.demo</span>
            </div>
            <div className="flex justify-between items-center text-white/60">
              <span>Password:</span>
              <span className="text-white font-medium select-all">password123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
