'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a placeholder until mounted
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-sunrise-orange dark:hover:text-sunrise-orange transition-colors ${className}`}
      aria-label="Toggle Theme"
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
}