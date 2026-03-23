import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RecentBooks: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#f4c434]" />
          Letzte Bücher
        </h2>
        <Button variant="link" className="text-white/60 hover:text-[#f4c434] cursor-pointer">
          Alle ansehen
        </Button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
        {/* Empty State Card */}
        <div className="group relative flex h-64 w-52 shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-[#12122a] p-6 text-center backdrop-blur-md">
          <div className="text-4xl">📚</div>
          <div>
            <h3 className="font-semibold text-white/80">Noch keine Bücher</h3>
            <p className="mt-2 text-xs text-white/40 leading-relaxed">
              Dein Regal wartet auf das erste magische Abenteuer!
            </p>
          </div>
          <Button 
            className="mt-4 cursor-pointer rounded-full bg-linear-to-r from-[#f4c434] to-[#e6b52e] text-[#0d0d1a] hover:opacity-90 transition-all font-semibold"
            aria-label="Erste Geschichte erstellen"
          >
            Geschichte erstellen
          </Button>
        </div>
      </div>
    </section>
  );
};
