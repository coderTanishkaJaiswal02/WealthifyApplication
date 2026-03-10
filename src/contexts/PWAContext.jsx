import React, { useEffect, useState } from 'react';
import { usePWA } from '../hooks/usePWA';
import { PWAContext } from './PWAContextDefinition';

export const PWAProvider = ({ children }) => {
  const pwaState = usePWA();

  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [hasSeenInstallPrompt, setHasSeenInstallPrompt] = useState(false);

  // Show install prompt after a delay
  useEffect(() => {
    if (pwaState.canInstall && !hasSeenInstallPrompt) {
      const timer = setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [pwaState.canInstall, hasSeenInstallPrompt]);

  // Dismiss install prompt
  const dismissInstallPrompt = () => {
    setShowInstallPrompt(false);
    setHasSeenInstallPrompt(true);

    // Save dismissal for WealthifyApplication
    localStorage.setItem('wealthify-install-dismissed', 'true');
  };

  // Allow showing install prompt again
  const showInstallPromptAgain = () => {
    setShowInstallPrompt(true);
  };

  // Check previous dismissal
  useEffect(() => {
    const dismissed = localStorage.getItem('wealthify-install-dismissed');

    if (dismissed === 'true') {
      setHasSeenInstallPrompt(true);
    }
  }, []);

  const value = {
    ...pwaState,
    showInstallPrompt,
    dismissInstallPrompt,
    showInstallPromptAgain,
    appName: 'WealthifyApplication',
  };

  return (
    <PWAContext.Provider value={value}>
      {children}
    </PWAContext.Provider>
  );
};