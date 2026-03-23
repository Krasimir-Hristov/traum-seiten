'use client';

import React from 'react';
import { PlusCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Hero {
  id: string;
  name: string;
  avatarUrl?: string;
  type: 'child' | 'pet' | 'toy';
}

const mockHeroes: Hero[] = [
  // Leave empty to show the default 'add' flow
  // { id: 'x1', name: 'Lukas', type: 'child', avatarUrl: '...' }
];

export const HeroGallery: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Star className="h-5 w-5 text-[#f4c434]" />
          Meine Helden
        </h2>
        <span className="text-sm text-white/40">Gefährten für deine Abenteuer</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
        {/* Add Hero Button / Card */}
        <button
          onClick={() => { /* to be implemented */ }}
          className="group relative flex h-48 w-40 shrink-0 cursor-pointer snap-start flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#1a1a2e]/50 backdrop-blur-md transition-all hover:bg-[#1a1a2e] hover:ring-2 hover:ring-[rgba(244,196,52,0.5)] focus:outline-none focus:ring-2 focus:ring-[rgba(244,196,52,0.5)]"
          aria-label="Neuen Held hinzufügen"
        >
          <div className="rounded-full bg-[#0d0d1a] p-3 text-white/40 group-hover:text-[#f4c434] glow-gold transition-all duration-300">
            <PlusCircle className="h-8 w-8" />
          </div>
          <span className="font-medium text-white/60 group-hover:text-white transition-all">Neu hinzufügen</span>
        </button>

        {/* Mock Heroes */}
        {mockHeroes.map((hero) => (
          <div
            key={hero.id}
            className="group relative h-48 w-40 shrink-0 cursor-pointer snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#12122a] transition-all hover:ring-2 hover:ring-[rgba(244,196,52,0.5)]"
          >
            {/* Avatar Placeholder / Image */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0d1a] to-transparent z-10" />
            
            <div className="absolute bottom-3 left-3 right-3 z-20 text-center">
              <span className="block font-medium text-white group-hover:text-[#f4c434] transition-colors">
                {hero.name}
              </span>
            </div>
          </div>
        ))}

        {mockHeroes.length === 0 && (
          <div className="flex h-48 w-64 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-white/40 px-6 text-center">
            Hier kannst du später deine Kinder, Kuscheltiere oder Haustiere hinzufügen!
          </div>
        )}
      </div>
    </section>
  );
};
