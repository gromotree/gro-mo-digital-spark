import { useEffect, useState } from "react";
import { Sparkles, Heart, Star, Coffee } from "lucide-react";

// Small visual celebration that triggers canvas-confetti (loaded from CDN)
// and shows a falling icon rain for a short duration.
const ICONS = [Sparkles, Heart, Star, Coffee];

const loadConfettiScript = () => {
  return new Promise<void>((resolve, reject) => {
    if ((window as any).confetti) return resolve();
    const existing = document.querySelector('script[data-confetti]') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Failed to load confetti script')));
      return;
    }

    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    s.async = true;
    s.setAttribute('data-confetti', 'true');
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load confetti script'));
    document.head.appendChild(s);
  });
};

const Celebration = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    loadConfettiScript()
      .then(() => {
        if (!mounted) return;
        const confetti = (window as any).confetti;
        if (confetti) {
          // Fire a few bursts
          confetti({ particleCount: 60, spread: 70, origin: { y: 0.3 } });
          confetti({ particleCount: 40, spread: 100, origin: { y: 0.2 } });
          confetti({ particleCount: 20, spread: 160, origin: { y: 0.1 } });
        }
      })
      .catch(() => {
        /* ignore if confetti failed to load */
      });

    const hideTimer = setTimeout(() => setVisible(false), 5000);
    return () => {
      mounted = false;
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  // Render a bunch of absolutely positioned icons that fall using CSS keyframes
  const drops = Array.from({ length: 14 }).map((_, i) => {
    const Icon = ICONS[i % ICONS.length];
    const left = Math.floor(Math.random() * 100); // vw
    const delay = Math.random() * 1.5; // seconds
    const size = 14 + Math.floor(Math.random() * 18); // px
    const duration = 3 + Math.random() * 3; // seconds
    const colorVariants = ["#F97316", "#60A5FA", "#34D399", "#F472B6", "#F59E0B"];
    const color = colorVariants[i % colorVariants.length];

    return (
      <div
        key={i}
        style={{
          position: 'fixed',
          left: `${left}vw`,
          top: '-6vh',
          zIndex: 60,
          animation: `fall ${duration}s linear ${delay}s forwards`,
          pointerEvents: 'none',
        }}
      >
        <Icon style={{ width: size, height: size, color }} />
      </div>
    );
  });

  return (
    <>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      {drops}
    </>
  );
};

export default Celebration;
