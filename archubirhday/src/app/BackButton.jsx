'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Don't show on the home/root page
  if (pathname === '/') return null;

  return (
    <button
      onClick={() => router.back()}
      style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255,255,255,0.5)',
        borderRadius: '50px',
        padding: '8px 18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.95rem',
        fontWeight: '600',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      ← Back
    </button>
  );
}