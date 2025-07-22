"use client";
import { useEffect } from 'react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const donationOptions = [
  {
    label: 'Mobile Money (MoMo)',
    value: 'momo',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FFD600" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#000">MoMo</text></svg>
    ),
    details: 'N/A (MTN Rwanda)'
  },
  {
    label: 'Bank Account',
    value: 'bank',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2" fill="#1976D2" /><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">BANK</text></svg>
    ),
    details: 'N/A'
  },
  {
    label: 'PayPal',
    value: 'paypal',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2" fill="#003087" /><text x="12" y="17" textAnchor="middle" fontSize="10" fill="#fff">PayPal</text></svg>
    ),
    details: 'N/A'
  }
];

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto rounded-lg bg-white p-6 shadow-2xl z-10 flex flex-col gap-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors z-20"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <h2 className="text-2xl font-bold text-brand-darkblue text-center">Support Our Mission</h2>
        <p className="text-gray-700 text-center">Your donation helps us empower communities in Rwanda. Choose a method below:</p>
        <div className="flex flex-col gap-4 mt-2">
          {donationOptions.map((option) => (
            <div key={option.value} className="flex items-center gap-3 border rounded-lg p-3 hover:shadow-md transition cursor-pointer bg-gray-50">
              <div>{option.icon}</div>
              <div className="flex flex-col">
                <span className="font-semibold text-brand-darkblue">{option.label}</span>
                <span className="text-gray-600 text-sm">{option.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 