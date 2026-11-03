'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  IconMapPin, 
  IconPhone, 
  IconMail, 
  IconHeartHandshake, 
  IconBrandFacebook, 
  IconBrandInstagram,
  IconMailbox,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube
} from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="bg-deep-river text-white border-t border-river-teal/30 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-river-teal/30">
        
        {/* Column 1: Brand & Tagline */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 border border-sunrise-orange flex items-center justify-center shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="HRHYCBO Logo" 
                fill 
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Horizon Rivers of Hope</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            &ldquo;Inspiring futures, changing lives by connecting clean rivers, strong youth, and global cultures.&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-2 text-slate-300">
            <a href="https://www.facebook.com/share/17iTEv4jM2/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-river-teal/40 hover:bg-sunrise-orange transition-colors" aria-label="Facebook">
              <IconBrandFacebook size={18} />
            </a>
            <a href="https://youtube.com/@horizonriversofhopeyouthcbo?si=6haou3q2tPstLpPP" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-river-teal/40 hover:bg-sunrise-orange transition-colors" aria-label="YouTube">
              <IconBrandYoutube size={18} />
            </a>
            <a href="https://www.instagram.com/horizonriversofhope" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-river-teal/40 hover:bg-sunrise-orange transition-colors" aria-label="Instagram">
              <IconBrandInstagram size={18} />
            </a>
            <a href="https://www.tiktok.com/@horizonriversofhope" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-river-teal/40 hover:bg-sunrise-orange transition-colors" aria-label="TikTok">
              <IconBrandTiktok size={18} />
            </a>
            <a href="http://www.linkedin.com/in/horizon-rivers-youth-cbo" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-river-teal/40 hover:bg-sunrise-orange transition-colors" aria-label="LinkedIn">
              <IconBrandLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg text-sunrise-orange">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link href="/" className="hover:text-sunrise-orange transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-sunrise-orange transition-colors">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-sunrise-orange transition-colors">Projects &amp; Initiatives</Link></li>
            <li><Link href="/news" className="hover:text-sunrise-orange transition-colors">News &amp; Updates</Link></li>
            <li><Link href="/gallery" className="hover:text-sunrise-orange transition-colors">Media Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-sunrise-orange transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Postal Details */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg text-sunrise-orange">Contact Details</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <IconMapPin size={20} className="text-sunrise-orange shrink-0 mt-0.5" />
              <span>Eldoret, Uasin Gishu County, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone size={20} className="text-sunrise-orange shrink-0" />
              <a href="tel:+254111222343" className="hover:underline">+254111222343</a>
            </li>
            <li className="flex items-start gap-3">
              <IconMailbox size={20} className="text-sunrise-orange shrink-0 mt-0.5" />
              <span>P.O. Box 2868-30100, Eldoret</span>
            </li>
            <li className="flex items-center gap-3">
              <IconMail size={20} className="text-sunrise-orange shrink-0" />
              <a href="mailto:info@horizonrivers.org" className="hover:underline">info@horizonrivers.org</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Support Our Cause */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg text-sunrise-orange">Support Our Work</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your support empowers youth leaders to protect our rivers and drive sustainable community action.
          </p>
          <a
            href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all shadow-md"
          >
            <IconHeartHandshake size={18} />
            <span>Donate via PayPal</span>
          </a>
        </div>

      </div>

      {/* Bottom Copyright, Centered Legal Links & Far-Right Credit */}
      <div className="max-w-7xl mx-auto pt-8 grid grid-cols-1 md:grid-cols-3 items-center justify-between text-xs text-slate-400 gap-4 text-center md:text-left">
        {/* Far Left: Copyright */}
        <p className="md:text-left">&copy; {new Date().getFullYear()} Horizon Rivers of Hope Youth CBO. All Rights Reserved.</p>
        
        {/* Centered: Privacy & Terms */}
        <div className="flex justify-center items-center gap-6">
          <Link href="/privacy" className="hover:underline hover:text-white transition-colors">Privacy Policy</Link>
          <span className="text-slate-600">•</span>
          <Link href="/terms" className="hover:underline hover:text-white transition-colors">Terms of Service</Link>
        </div>

        {/* Far Right: Obbie Concepts Credit */}
        <p className="md:text-right">
          Designed &amp; Developed by{' '}
          <a 
            href="https://obbieconcepts.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sunrise-orange font-semibold hover:underline"
          >
            Obbie Concepts
          </a>
        </p>
      </div>
    </footer>
  );
}