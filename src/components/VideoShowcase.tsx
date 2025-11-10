import { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = Array(10).fill({
  title: "Generated Video",
  url: "/src/components/generated_video.mp4",
  description: "Auto-generated showcase video"
});

const VideoShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay failed - ignore
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    const videos = document.querySelectorAll('.showcase-video');
    videos.forEach(video => observer.observe(video));

    return () => {
      videos.forEach(video => observer.unobserve(video));
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card">
      {loading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
          <p className="text-lg font-medium">Loading Videos... {loadedVideos}/10</p>
          <div className="w-64 h-2 bg-muted rounded-full mt-4 overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${(loadedVideos / 10) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Website{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inspirations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Explore examples of websites we can create for your business
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('left')}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('right')}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex-none w-[300px] snap-center"
              >
                <div className="rounded-xl overflow-hidden bg-card border border-border shadow-xl">
                  <div className="relative aspect-video bg-muted">
                    <video
                      className="showcase-video absolute inset-0 w-full h-full object-cover"
                      src={video.url}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedData={() => {
                        setLoadedVideos(prev => {
                          const newCount = prev + 1;
                          if (newCount === 10) {
                            setLoading(false);
                          }
                          return newCount;
                        });
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </section>
  );
};

export default VideoShowcase;