import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail, Send, AlertCircle, ExternalLink } from 'lucide-react';
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

            {/* 3 Column Grid with Equal Heights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 items-stretch">
                {/* Column 1: Left Connect Info */}
                <ScrollReveal className="lg:col-span-4 h-full flex flex-col">
                    <div className="rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-xl dark:shadow-2xl h-full flex flex-col justify-between backdrop-blur-xl hover:border-cyan-500/25 transition-all duration-500">
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                                Let's Connect
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Have a project in mind, a question, or just want to chat?
                                I'd love to hear from you!
                            </p>

                            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2 text-xs sm:text-sm">
                                {/* 1. Email */}
                                <a
                                    href="mailto:chillrigel05@gmail.com"
                                    className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.07] hover:border-cyan-500/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-300 shadow-sm"
                                    title="Send an email"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Email</p>
                                            <p className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                                                chillrigel05@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                                </a>

                                {/* 2. LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/chilldon-paul-carreon/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.07] hover:border-blue-500/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-300 shadow-sm"
                                    title="Connect on LinkedIn"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/></svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">LinkedIn</p>
                                            <p className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors truncate">
                                                Connect on LinkedIn
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                                </a>

                                {/* 3. GitHub */}
                                <a
                                    href="https://github.com/ch1llysauce"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.07] hover:border-indigo-500/50 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-300 shadow-sm"
                                    title="View GitHub Repositories"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">GitHub</p>
                                            <p className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors truncate">
                                                github.com/ch1llysauce
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Column 2: Middle Form */}
                <ScrollReveal className="lg:col-span-5 h-full flex flex-col">
                    <div className="rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-4 sm:p-6 shadow-xl dark:shadow-2xl backdrop-blur-xl hover:border-indigo-500/25 transition-all duration-500 h-full flex flex-col justify-between">
                        {submitted ? (
                            <div className="text-center py-10 sm:py-12 space-y-3 my-auto">
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
                                className="space-y-3 sm:space-y-3.5 h-full flex flex-col justify-between"
                            >
                                <div className="space-y-3 sm:space-y-3.5">
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
                                                <span className="flex items-center gap-1 text-[10px] text-rose-500 mt-1 font-mono">
                                                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
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
                                                <span className="flex items-center gap-1 text-[10px] text-rose-500 mt-1 font-mono">
                                                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
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
                                            <span className="flex items-center gap-1 text-[10px] text-rose-500 mt-1 font-mono">
                                                <AlertCircle className="w-3 h-3 flex-shrink-0" />
                                                {fieldErrors.message}
                                            </span>
                                        )}
                                    </div>

                                    {errorMessage && (
                                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium text-center">
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>

                                <Button type="submit" variant="primary" size="md" className="w-full mt-2" disabled={isSubmitting}>
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
                <ScrollReveal className="lg:col-span-3">
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

