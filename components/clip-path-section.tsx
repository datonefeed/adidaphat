// demo.tsx
import ClippedMediaGallery from '@/components/ui/clip-path-image';
import React from 'react';

const ClipPathSection: React.FC = () => {
  const mediaContent = [
    {
      src: 'https://images.unsplash.com/photo-1727889490721-4f27ef9b6673?q=80&w=870&auto=format&fit=crop',
      alt: 'Abstract Squiggle Art',
      clipId: 'clip-squiggle',
      type: 'image' as const,
    },
    {
      src: 'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
      alt: 'Abstract Rectangular Video',
      clipId: 'clip-rect',
      type: 'video' as const,
    },
    {
      src: '/assets/hoa-clip.jpg',
      alt: 'Abstract Another Clip',
      clipId: 'clip-another',
      type: 'image' as const,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center dark:bg-black min-h-[500px] py-16 lg:py-24">
      <div className="w-full bg-white dark:bg-black">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight">
              Phong Cách
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary/80 mx-auto"></div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              Những khoảnh khắc được ghi lại qua ống kính và tác phẩm nghệ thuật 
              được tạo ra bằng tâm hồn
            </p>
          </div>
        </div>

        <ClippedMediaGallery />
      </div>
    </div>
  );
};

export { ClipPathSection as DemoOne };