import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

type Position = 'top' | 'bottom' | 'left' | 'right';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState<Position>('bottom');
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomPosition = (): Position => {
    const positions: Position[] = ['top', 'bottom', 'left', 'right'];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const getRandomDelay = (): number => {
    return Math.floor(Math.random() * 9000) + 1000; // 1-10 seconds
  };

  const hideBanner = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  const showBanner = () => {
    setPosition(getRandomPosition());
    setIsVisible(true);
  };

  const handleDeny = () => {
    hideBanner();
    setTimeout(() => {
      showBanner();
    }, getRandomDelay());
  };

  const handleAccept = () => {
    hideBanner();
    // Store acceptance in localStorage to prevent showing on reload
    localStorage.setItem('cookieConsent', 'accepted');
  };

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent') === 'accepted';
    if (hasAccepted) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const getPositionClasses = () => {
    const baseClasses = "fixed z-50 transform transition-all duration-500 ease-out";
    const animationClasses = isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100";
    
    switch (position) {
      case 'top':
        return `${baseClasses} ${animationClasses} top-4 left-1/2 -translate-x-1/2 animate-bounce-in-top`;
      case 'bottom':
        return `${baseClasses} ${animationClasses} bottom-4 left-1/2 -translate-x-1/2 animate-bounce-in-bottom`;
      case 'left':
        return `${baseClasses} ${animationClasses} left-4 top-1/2 -translate-y-1/2 animate-bounce-in-left`;
      case 'right':
        return `${baseClasses} ${animationClasses} right-4 top-1/2 -translate-y-1/2 animate-bounce-in-right`;
      default:
        return `${baseClasses} ${animationClasses} bottom-4 left-1/2 -translate-x-1/2`;
    }
  };

  return (
    <div className={getPositionClasses()}>
      <div className="bg-white/95 backdrop-blur-lg border-2 border-rose-200 rounded-2xl shadow-2xl p-6 max-w-md mx-4 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 pointer-events-none"></div>
        
        {/* Close button (decorative, doesn't actually close) */}
        <button className="absolute top-3 right-3 text-rose-400 hover:text-rose-600 transition-colors duration-200">
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Cookie className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-rose-800">Cookie Notice</h3>
          </div>

          <p className="text-sm text-rose-600 mb-4 leading-relaxed">
            We use cookies to enhance your piano learning experience and track your practice sessions. 
            By continuing, you agree to our use of cookies for analytics and personalization.
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Accept All
            </button>
            <button
              onClick={handleDeny}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Deny
            </button>
          </div>

          <p className="text-xs text-rose-500 mt-3 text-center italic">
          Denying won't make this go away... 😈
          </p>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 opacity-20 animate-pulse pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CookieBanner;