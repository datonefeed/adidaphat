'use client';

import React from 'react';

interface FourLeafCloverLoaderProps {
  size?: number;
  className?: string;
}

export const FourLeafCloverLoader: React.FC<FourLeafCloverLoaderProps> = ({
  size = 80,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Loading"
        role="img"
      >
        <defs>
          {/* Gradient cho lá xanh dương (top-left) */}
          <radialGradient id="gradient-blue" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>
          
          {/* Gradient cho lá vàng (top-right) */}
          <radialGradient id="gradient-yellow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </radialGradient>
          
          {/* Gradient cho lá hồng (bottom-left) */}
          <radialGradient id="gradient-pink" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#EC4899" />
          </radialGradient>
          
          {/* Gradient cho lá tím (bottom-right) */}
          <radialGradient id="gradient-purple" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#A855F7" />
          </radialGradient>
        </defs>

        <style>
          {`
            @keyframes leafGrow {
              0% { 
                opacity: 0;
                transform: scale(0);
              }
              50% {
                opacity: 1;
                transform: scale(1.1);
              }
              100% { 
                opacity: 1;
                transform: scale(1);
              }
            }

            .leaf {
              animation: leafGrow 1.2s ease-out infinite;
            }

            .leaf-1 { 
              animation-delay: 0s; 
              transform-origin: 50px 30px;
            }
            .leaf-2 { 
              animation-delay: 0.3s;
              transform-origin: 70px 50px;
            }
            .leaf-3 { 
              animation-delay: 0.6s;
              transform-origin: 50px 70px;
            }
            .leaf-4 { 
              animation-delay: 0.9s;
              transform-origin: 30px 50px;
            }
          `}
        </style>

        {/* Tâm cỏ 4 lá */}
        <circle cx="50" cy="50" r="6" fill="#FFF" opacity="0.9" />

        {/* 4 lá hình trái tim với gradient màu - xếp thành hình cỏ 4 lá */}
        
        {/* Lá xanh dương - TOP */}
        <g className="leaf leaf-1">
          <path
            d="M 50,50 Q 38,25 30,25 Q 25,25 25,30 Q 25,38 35,45 Q 42,50 50,50 Q 58,50 65,45 Q 75,38 75,30 Q 75,25 70,25 Q 62,25 50,50"
            fill="url(#gradient-blue)"
          />
        </g>
        
        {/* Lá vàng - RIGHT */}
        <g className="leaf leaf-2" transform="rotate(90 50 50)">
          <path
            d="M 50,50 Q 38,25 30,25 Q 25,25 25,30 Q 25,38 35,45 Q 42,50 50,50 Q 58,50 65,45 Q 75,38 75,30 Q 75,25 70,25 Q 62,25 50,50"
            fill="url(#gradient-yellow)"
          />
        </g>
        
        {/* Lá hồng - BOTTOM */}
        <g className="leaf leaf-3" transform="rotate(180 50 50)">
          <path
            d="M 50,50 Q 38,25 30,25 Q 25,25 25,30 Q 25,38 35,45 Q 42,50 50,50 Q 58,50 65,45 Q 75,38 75,30 Q 75,25 70,25 Q 62,25 50,50"
            fill="url(#gradient-pink)"
          />
        </g>
        
        {/* Lá tím - LEFT */}
        <g className="leaf leaf-4" transform="rotate(270 50 50)">
          <path
            d="M 50,50 Q 38,25 30,25 Q 25,25 25,30 Q 25,38 35,45 Q 42,50 50,50 Q 58,50 65,45 Q 75,38 75,30 Q 75,25 70,25 Q 62,25 50,50"
            fill="url(#gradient-purple)"
          />
        </g>
      </svg>
    </div>
  );
};

interface LoadingScreenProps {
  text?: string;
  showText?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  text = 'Đang tải...',
  showText = true,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      <FourLeafCloverLoader size={100} />
      {showText && (
        <p className="mt-6 text-lg font-medium text-foreground/80 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};
