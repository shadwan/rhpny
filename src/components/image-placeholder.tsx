export function ImagePlaceholder({
  aspect,
  prompt,
  className = "",
}: {
  aspect: string;
  prompt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden rounded-3xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 via-stone-50 to-blue-50/40 ${className}`}
    >
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-blue-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white shadow">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
        Image prompt
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-8">
        <p className="max-w-md text-center text-sm leading-relaxed text-blue-900/70 sm:text-base">
          <span className="block text-xs font-semibold uppercase tracking-widest text-blue-900/50">
            Generate:
          </span>
          <span className="mt-2 block italic">&ldquo;{prompt}&rdquo;</span>
        </p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#034180 1px, transparent 1px), linear-gradient(90deg, #034180 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
