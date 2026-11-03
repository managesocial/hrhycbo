'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IconMapPin, 
  IconPhone, 
  IconMail, 
  IconClock, 
  IconSend, 
  IconCheck, 
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram
} from '@tabler/icons-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'a873e714-2769-45e7-83d5-d453936953b1', // Replace with your Web3Forms Access Key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[HRHYCBO Website] ${formData.subject}`,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
        });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Info & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-river-teal dark:text-sunrise-orange">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-deep-river dark:text-white">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about our youth eco-enterprises, partnership opportunities, or upcoming community cleanups in Eldoret? Reach out today.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-river-teal/10 dark:bg-river-teal/20 text-river-teal dark:text-sunrise-orange shrink-0">
                <IconMapPin size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-deep-river dark:text-white">
                  Headquarters Location
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Eldoret Town, Uasin Gishu County, Kenya
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-river-teal/10 dark:bg-river-teal/20 text-river-teal dark:text-sunrise-orange shrink-0">
                <IconMail size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-deep-river dark:text-white">
                  Email Address
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  info@horizonrivers.org
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-river-teal/10 dark:bg-river-teal/20 text-river-teal dark:text-sunrise-orange shrink-0">
                <IconPhone size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-deep-river dark:text-white">
                  Phone &amp; WhatsApp
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  +254 111 222 343
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-river-teal/10 dark:bg-river-teal/20 text-river-teal dark:text-sunrise-orange shrink-0">
                <IconClock size={22} />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-deep-river dark:text-white">
                  Working Hours
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Monday – Friday: 8:00 AM – 5:00 PM EAT
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6"
        >
          <div className="space-y-2">
            <h3 className="font-heading font-extrabold text-2xl text-deep-river dark:text-white">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Fill in the form below and our leadership team will respond within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-leaf-green/10 border border-leaf-green/30 text-leaf-green space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-leaf-green text-white flex items-center justify-center mx-auto">
                <IconCheck size={24} />
              </div>
              <h4 className="font-heading font-bold text-lg">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Thank you for reaching out to Horizon Rivers of Hope. We have received your inquiry.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-river-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-river-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 700 000 000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-river-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-river-teal"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership & Sponsorship">Partnership &amp; Sponsorship</option>
                    <option value="Youth Volunteering">Youth Volunteering</option>
                    <option value="Eco-Enterprise Products">Eco-Enterprise Products</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-river-teal"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-river-teal hover:bg-deep-river text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <IconSend size={18} />
                    <span>Submit Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Embedded Map Section */}
      <div className="space-y-4">
        <h3 className="font-heading font-extrabold text-xl text-deep-river dark:text-white text-center">
          Our Location in Eldoret
        </h3>
        <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <iframe
            title="Horizon Rivers of Hope Eldoret Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.267885376173!2d35.2697802!3d0.5142775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0x4c2195f19385317f!2sEldoret%2C%20Kenya!5e0!2m3!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}