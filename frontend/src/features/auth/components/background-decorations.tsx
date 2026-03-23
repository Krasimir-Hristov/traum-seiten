import React from 'react';
import { STATIC_AUTH_STARS } from '@/lib/constants';

export const BackgroundDecorations: React.FC = () => {
  return (
    <>
      {/* ============================================================
          GLOBAL BACKGROUND DECORATIONS (cover entire page)
          ============================================================ */}

      {/* Atmospheric nebula gradients */}
      <div
        className='absolute inset-0 pointer-events-none'
        aria-hidden='true'
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 15% 90%, rgba(60,30,160,0.15) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 50% 40% at 30% 10%, rgba(80,50,180,0.10) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 40% 50% at 85% 60%, rgba(50,30,140,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Moon — top right of the ENTIRE page */}
      <div
        className='absolute pointer-events-none z-0'
        aria-hidden='true'
        style={{
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 38% 38%, #fff5a0 0%, #f4c434 25%, #d4a010 55%, rgba(244,196,52,0.20) 75%, transparent 100%)',
          boxShadow:
            '0 0 60px 20px rgba(244,196,52,0.22), 0 0 120px 50px rgba(244,196,52,0.10)',
        }}
      />
      {/* Moon halo */}
      <div
        className='absolute pointer-events-none z-0'
        aria-hidden='true'
        style={{
          top: '-90px',
          right: '-90px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(244,196,52,0.08) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Stars scattered across the whole page */}
      {STATIC_AUTH_STARS.map((star, i) => (
        <div
          key={i}
          className='absolute rounded-full pointer-events-none z-0 animate-heartbeat'
          aria-hidden='true'
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'white',
            opacity: star.opacity,
            animationDelay: `${(i % 5) * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`,
            boxShadow:
              star.size >= 2.5
                ? `0 0 ${star.size * 2}px rgba(255,255,255,0.9)`
                : 'none',
          }}
        />
      ))}
    </>
  );
};
