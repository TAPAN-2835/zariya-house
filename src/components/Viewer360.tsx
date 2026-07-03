import { useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";

interface Props {
  images?: string[]; // ordered angle frames — if only one provided, we simulate rotation via CSS
  primary: string;
  alt?: string;
}

/**
 * Simulated 360° viewer.
 * - If multiple frame images are provided, drag-scrubs through them.
 * - If only one image is available, we apply a subtle rotate/scale on drag
 *   for a premium interactive placeholder that never breaks.
 */
export function Viewer360({ images, primary, alt = "360 view" }: Props) {
  const frames = images && images.length > 1 ? images : [primary];
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startState = useRef(0);
  const ref = useRef<HTMLDivElement>(null);

  const multi = frames.length > 1;

  useEffect(() => {
    const onUp = () => setDragging(false);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const onDown = (clientX: number) => {
    setDragging(true);
    startX.current = clientX;
    startState.current = multi ? index : rotation;
  };
  const onMove = (clientX: number) => {
    if (!dragging || !ref.current) return;
    const width = ref.current.clientWidth || 1;
    const delta = (clientX - startX.current) / width;
    if (multi) {
      const next = (startState.current + Math.round(delta * frames.length * 2)) % frames.length;
      setIndex((next + frames.length) % frames.length);
    } else {
      setRotation(startState.current + delta * 45); // gentle tilt
    }
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-square w-full cursor-grab select-none overflow-hidden border border-border bg-secondary active:cursor-grabbing"
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      role="img"
      aria-label={`${alt} — drag to rotate`}
    >
      <img
        src={frames[index]}
        alt={alt}
        draggable={false}
        className="h-full w-full object-cover transition-transform"
        style={multi ? undefined : { transform: `rotate(${rotation}deg) scale(1.05)` }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-charcoal/70 to-transparent p-4 text-[0.65rem] uppercase tracking-[0.28em] text-ivory">
        <RotateCw size={12} className="animate-spin-slow" />
        Drag to rotate — 360° preview
      </div>
      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin-slow 6s linear infinite}`}</style>
    </div>
  );
}
