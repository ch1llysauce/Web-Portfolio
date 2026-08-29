import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail, MessageSquare, MapPin, Send, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [shakeKey, setShakeKey] = useState(0);

    const validate = () => {
        const errors: { name?: string; email?: string; message?: string } = {};
        if (!formData.name.trim()) {
            errors.name = 'Please enter your name.';
        }
        if (!formData.email.trim()) {
            errors.email = 'Please enter your email.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Please enter your message.';
        }
        return errors;
    };

    const handleInputChange = (field: 'name' | 'email' | 'subject' | 'message', value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (fieldErrors[field as keyof typeof fieldErrors]) {
            setFieldErrors(prev => ({ ...prev, [field]: undefined }));
        }
        if (errorMessage) setErrorMessage(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setShakeKey(prev => prev + 1);
            return;
        }

        setIsSubmitting(true);

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

        if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
            setErrorMessage('Web3Forms Access Key is not configured in .env yet. Please paste your key into the .env file!');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
                    message: formData.message,
                    from_name: `${formData.name}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setFieldErrors({});
            } else {
                setErrorMessage(result.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your internet connection or try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="space-y-6 pb-0 md:pb-4">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 uppercase">
                    Contact
                </span>
            </div>

            {/* 3 Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-start">
                {/* Column 1: Left Connect Info */}
                <ScrollReveal className="lg:col-span-4 h-full">
                    <div className="rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-xl dark:shadow-2xl h-full flex flex-col justify-between backdrop-blur-xl hover:border-cyan-500/25 transition-all duration-500">
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                                Let's Connect
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Have a project in mind, a question, or just want to chat?
                                I'd love to hear from you!
                            </p>

                            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2 font-mono text-xs">
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                    <div className="p-2 rounded-lg bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-cyan-600 dark:text-cyan-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span>info@chilly.dev</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                    <div className="p-2 rounded-lg bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-indigo-600 dark:text-indigo-400">
                                        <MessageSquare className="w-4 h-4" />
                                    </div>
                                    <span>Contact Form Only</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                    <div className="p-2 rounded-lg bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-emerald-600 dark:text-emerald-400">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <span>Chilly.dev</span>
                                </div>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-black/10 dark:border-white/5">
                            <a href="https://github.com/ch1llysauce" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/40 transition-colors" title="GitHub">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors" title="LinkedIn">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors" title="Twitter">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-colors" title="Instagram">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Column 2: Middle Form */}
                <ScrollReveal className="lg:col-span-5 h-full">
                    <div className="rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-4 sm:p-6 shadow-xl dark:shadow-2xl backdrop-blur-xl hover:border-indigo-500/25 transition-all duration-500">
                        {submitted ? (
                            <div className="text-center py-10 sm:py-12 space-y-3">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
                                    ✓
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white" style={{ fontFamily: "'Urbanist', sans-serif" }}>Message sent!</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="mt-2">
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <motion.form
                                key={shakeKey}
                                animate={shakeKey > 0 ? { x: [-6, 6, -4, 4, -2, 2, 0] } : {}}
                                transition={{ duration: 0.35 }}
                                noValidate
                                onSubmit={handleSubmit}
                                className="space-y-3 sm:space-y-3.5"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                    <div>
                                        <label className="block text-[11px] font-mono text-slate-500 mb-1 tracking-wider">Your Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className={`w-full rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none transition-colors ${
                                                fieldErrors.name
                                                    ? 'border-rose-500 ring-1 ring-rose-500/30'
                                                    : 'border-black/10 dark:border-white/[0.08] focus:border-indigo-500/60'
                                            }`}
                                        />
                                        {fieldErrors.name && (
                                            <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center gap-1 mt-1">
                                                <AlertCircle className="w-3 h-3 shrink-0" />
                                                {fieldErrors.name}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-mono text-slate-500 mb-1 tracking-wider">Your Email *</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className={`w-full rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none transition-colors ${
                                                fieldErrors.email
                                                    ? 'border-rose-500 ring-1 ring-rose-500/30'
                                                    : 'border-black/10 dark:border-white/[0.08] focus:border-indigo-500/60'
                                            }`}
                                        />
                                        {fieldErrors.email && (
                                            <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center gap-1 mt-1">
                                                <AlertCircle className="w-3 h-3 shrink-0" />
                                                {fieldErrors.email}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-500 mb-1 tracking-wider">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="What is this about? (optional)"
                                        value={formData.subject}
                                        onChange={(e) => handleInputChange('subject', e.target.value)}
                                        className="w-full rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-mono text-slate-500 mb-1 tracking-wider">Message *</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Type your message here..."
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        className={`w-full rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                                            fieldErrors.message
                                                ? 'border-rose-500 ring-1 ring-rose-500/30'
                                                : 'border-black/10 dark:border-white/[0.08] focus:border-indigo-500/60'
                                        }`}
                                    />
                                    {fieldErrors.message && (
                                        <span className="text-[10px] text-rose-500 dark:text-rose-400 font-mono flex items-center gap-1 mt-1">
                                            <AlertCircle className="w-3 h-3 shrink-0" />
                                            {fieldErrors.message}
                                        </span>
                                    )}
                                </div>

                                {errorMessage && (
                                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium text-center">
                                        {errorMessage}
                                    </div>
                                )}

                                <Button type="submit" variant="primary" size="md" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-1.5">
                                            <Send className="w-3.5 h-3.5" />
                                            Send Message
                                        </span>
                                    )}
                                </Button>
                            </motion.form>
                        )}
                    </div>
                </ScrollReveal>

                {/* Column 3: Quick Status Sidebar */}
                <ScrollReveal className="lg:col-span-3 h-full">
                    <div className="rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-4 sm:p-5 shadow-xl dark:shadow-2xl space-y-3.5 backdrop-blur-xl hover:border-emerald-500/25 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider" style={{ fontFamily: "'Fira Code', monospace" }}>
                                Quick Status
                            </span>
                        </div>
                        <div className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-1">
                            <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Available for Opportunities</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Open to full-time, part-time, or freelance roles.</div>
                        </div>
                        <div className="p-3 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 space-y-1">
                            <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">Typical Response Time</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">Within 24 hours on weekdays.</div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

