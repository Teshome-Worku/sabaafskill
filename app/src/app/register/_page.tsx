"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { courses } from '@/data/courses';
import { Registration } from '@/types';

export default function RegisterPageClient() {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    fullName: '', phone: '', city: '', course: '', message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const labels = {
    title: language === 'om' ? 'Galmee Barattootaa' : 'Student Registration',
    subtitle: language === 'om' ? "Guca kana guutuun galmaa'aa. Yeroo gabaabaa keessatti isin quunnamna." : 'Fill out this form to register. We will contact you shortly.',
    fullName: language === 'om' ? 'Maqaa Guutuu' : 'Full Name',
    phone: language === 'om' ? 'Lakkoofsa Bilbilaa' : 'Phone Number',
    city: language === 'om' ? 'Magaalaa' : 'City',
    course: language === 'om' ? 'Barnoota Filattan' : 'Select Course',
    coursePlaceholder: language === 'om' ? '-- Barnoota Filadhu --' : '-- Select a Course --',
    message: language === 'om' ? 'Ergaa (Filannoo)' : 'Message (Optional)',
    submit: language === 'om' ? 'Galmee Xumuri' : 'Submit Registration',
    submitting: language === 'om' ? 'Ergamaa Jira...' : 'Submitting...',
    successTitle: language === 'om' ? "Galmeen Milkaa'eera!" : 'Registration Successful!',
    successMsg: language === 'om' ? "Galmeen keessan sirriitti raawwateera. Yeroo gabaabaa keessatti karaa bilbilaa isin quunnamna. Galatoomaa!" : 'Your registration has been received. We will contact you shortly by phone. Thank you!',
    errorMsg: language === 'om' ? 'Rakkoon uumameera. Irra deebiin yaadaa.' : 'An error occurred. Please try again.',
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = language === 'om' ? 'Maqaan guutuun dirqama' : 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = language === 'om' ? 'Lakkoofsi bilbilaa dirqama' : 'Phone number is required';
    else if (!/^[0-9+]{9,13}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = language === 'om' ? 'Lakkoofsi sirrii miti' : 'Invalid phone number';
    if (!formData.city.trim()) newErrors.city = language === 'om' ? 'Magaan dirqama' : 'City is required';
    if (!formData.course) newErrors.course = language === 'om' ? 'Barnoota filadhu' : 'Please select a course';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      const newReg: Registration = { id: `reg-${Date.now()}`, ...formData, status: 'new', submittedAt: new Date().toISOString() };
      const existing = localStorage.getItem('sabaaf-registrations');
      const list = existing ? JSON.parse(existing) : [];
      localStorage.setItem('sabaaf-registrations', JSON.stringify([newReg, ...list]));
      setSubmitStatus('success');
      setFormData({ fullName: '', phone: '', city: '', course: '', message: '' });
    } catch { setSubmitStatus('error'); }
    finally { setIsSubmitting(false); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const inputClass = (field: string) =>
    `w-full bg-background border ${errors[field] ? 'border-destructive' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`;

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <SectionHeader title={labels.title} subtitle={labels.subtitle} className="mb-12 mt-6" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(26,107,240,0.1)]">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">{labels.successTitle}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{labels.successMsg}</p>
              <Button onClick={() => setSubmitStatus('idle')} variant="outline" className="border-white/10">
                {language === 'om' ? 'Galmee Haaraa' : 'Register Another'}
              </Button>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              onSubmit={handleSubmit} className="bg-card border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6">
              {submitStatus === 'error' && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" /><p>{labels.errorMsg}</p>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-white/90">{labels.fullName} <span className="text-primary">*</span></label>
                <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} className={inputClass('fullName')} placeholder="E.g. Tolasaa Magarsaa" autoComplete="name" />
                {errors.fullName && <p className="text-destructive text-sm">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/90">{labels.phone} <span className="text-primary">*</span></label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="0911223344" autoComplete="tel" />
                  {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-white/90">{labels.city} <span className="text-primary">*</span></label>
                  <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} className={inputClass('city')} placeholder="Nekemte" autoComplete="address-level2" />
                  {errors.city && <p className="text-destructive text-sm">{errors.city}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-medium text-white/90">{labels.course} <span className="text-primary">*</span></label>
                <div className="relative">
                  <select id="course" name="course" value={formData.course} onChange={handleChange}
                    className={`w-full appearance-none ${inputClass('course')}`}>
                    <option value="" disabled>{labels.coursePlaceholder}</option>
                    {courses.map(c => (
                      <option key={c.id} value={c.name.en}>{language === 'om' ? c.name.om : c.name.en}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                {errors.course && <p className="text-destructive text-sm">{errors.course}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/90">{labels.message}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="..." />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />{labels.submitting}</>) : labels.submit}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
