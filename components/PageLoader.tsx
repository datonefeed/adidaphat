'use client';

import React, { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/ui/four-leaf-clover-loader';

interface PageLoaderProps {
  children: React.ReactNode;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimum 1.5s for smooth experience)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen text="Đang tải..." />;
  }

  return <>{children}</>;
};
