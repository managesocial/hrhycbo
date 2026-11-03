'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX, IconHeartHandshake } from '@tabler/icons-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'News', href: '/news' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-deep-river text-white shadow-md border-b border-river-teal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Image Placeholder */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 border border-sunrise-orange flex items-center justify-center shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="Horizon Rivers of Hope Logo" 
              fill 
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
            Horizon Rivers of Hope
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sunrise-orange ${
                  isActive ? 'text-sunrise-orange font-semibold' : 'text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Side: Theme Toggle + PayPal CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md hover:shadow-lg"
          >
            <IconHeartHandshake size={18} />
            <span>Donate</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-river-teal/40 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation (Framer Motion Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-deep-river/95 backdrop-blur-lg border-b border-river-teal/30 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-river-teal text-white'
                        : 'text-slate-200 hover:bg-river-teal/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-river-teal/30 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Switch Theme</span>
                <ThemeToggle />
              </div>

              <div className="pt-2">
                <a
                  href="https://www.paypal.com/ncp/payment/PRPA22PX46YBN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-sunrise-orange hover:bg-sunrise-orange/90 text-white font-semibold py-3 rounded-lg text-base shadow-md transition-all"
                >
                  <IconHeartHandshake size={20} />
                  <span>Donate via PayPal</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}