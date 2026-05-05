export function LetterAvatar({
  letter,
  className = "",
}: {
  letter: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-blue-900 text-sm font-semibold uppercase tracking-wide text-white ${className}`}
      aria-hidden="true"
    >
      {letter.charAt(0)}
    </div>
  );
}
