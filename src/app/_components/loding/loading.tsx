export default function LoadingProducts() {
  const dotCount = 8;
  const radius = 14;

  return (
    <div className="flex h-30 w-full flex-col items-center justify-center gap-4 bg-white">
      <div
        className="relative h-8 w-8 animate-spin"
        style={{ animationDuration: "1.2s" }}
      >
        {Array.from({ length: dotCount }).map((_, i) => {
          const angle = (i / dotCount) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-emerald-600"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                opacity: 1 - i * 0.11,
              }}
            />
          );
        })}
      </div>
      <p className="text-base text-gray-500">Loading products...</p>
    </div>
  );
}