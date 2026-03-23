import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export const RecentBooks: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#f4c434]" />
          Letzte Bücher
        </h2>
        <Link href="/dashboard/books" className="text-sm font-medium text-white/60 hover:text-[#f4c434] cursor-pointer" aria-label="Alle Bücher in der Bibliothek ansehen">
          Alle ansehen
        </Link>
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
          <Link 
            href="/dashboard/stories/new" 
            className="mt-4 flex h-8 items-center justify-center cursor-pointer rounded-full bg-linear-to-r from-[#f4c434] to-[#e6b52e] text-[#0d0d1a] hover:opacity-90 transition-all font-semibold gap-1.5 px-3 whitespace-nowrap outline-none text-sm"
            aria-label="Erste Geschichte erstellen"
          >
            Geschichte erstellen
          </Link>
        </div>
      </div>
    </section>
  );
};
