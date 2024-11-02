'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Moon, Sun } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey && event.key === 'k') ||
        (event.ctrlKey && event.key === 'k')
      ) {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-stone-950">
      <header className="bg-neutral-100 dark:bg-neutral-900 shadow-sm">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recipe Book
            </h1>

            <div className="flex flex-row gap-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ShadCN Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="top-1/4">
          <DialogHeader>
            <DialogTitle>Search Recipes</DialogTitle>
          </DialogHeader>
          <Input
            type="search"
            placeholder="Search recipes..."
            className="w-full mt-4"
          />
        </DialogContent>
      </Dialog>

      <main className="flex-grow bg-neutral-100 dark:bg-neutral-900 flex justify-center">
        {children}
      </main>

      <footer className="bg-white dark:bg-neutral-950 shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2024 Recipe Book. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
