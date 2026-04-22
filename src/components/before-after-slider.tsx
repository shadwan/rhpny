"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  aspect?: string;
  caption?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  aspect = "aspect-[3/4]",
  caption,
}: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let shown = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !shown) {
            shown = true;
            const start = performance.now();
            const duration = 1400;
            const from = 50;
            const to = 50;
            const peak = 75;
            const raf = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased =
                t < 0.5
                  ? from + (peak - from) * (t / 0.5)
                  : peak + (to - peak) * ((t - 0.5) / 0.5);
              setPos(eased);
              if (t < 1) requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKey}
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-label="Drag to compare before and after"
        className={`relative w-full ${aspect} overflow-hidden rounded-3xl bg-gray-100 select-none touch-none ${dragging ? "cursor-grabbing" : "cursor-ew-resize"}`}
      >
        {/* After image — full */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before image — clipped */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${pos}%` }}
        >
          <div
            className="absolute inset-0"
            style={{ width: `${(100 / pos) * 100}%` }}
          >
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          Before
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-blue-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          After
        </div>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white"
          style={{ left: `${pos}%`, boxShadow: "0 0 12px rgba(0,0,0,0.35)" }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5"
          style={{ left: `${pos}%` }}
          animate={{ scale: dragging ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="h-5 w-5 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </motion.div>
      </div>

      {caption && (
        <figcaption className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
