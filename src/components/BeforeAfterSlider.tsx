import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[3/4] overflow-hidden select-none cursor-ew-resize rounded-sm"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Base) */}
      <img
        src={afterImage}
        alt="After procedure"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-mono px-2 py-1 pointer-events-none rounded-[1px]">
        After
      </div>

      {/* Before Image (Overlay clipped by slider position) */}
      <div 
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before procedure"
          className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw' }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-mono px-2 py-1 pointer-events-none rounded-[1px]">
          Before
        </div>
      </div>

      {/* Slider Divider Line */}
      <div 
        className="absolute inset-y-0 w-[1px] bg-white pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Central interactive handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xs select-none shadow-lg">
          <span className="text-[10px] font-mono tracking-tighter">{"⟨⟩"}</span>
        </div>
      </div>
    </div>
  );
}
