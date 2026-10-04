
const DOT_COUNT = 8;
const RADIUS = 16;

interface OrdersLoadingProps {
  title?: string;
  subtitle?: string;
}

export default function OrdersLoading({
  title = "Loading your orders...",
  subtitle = "Please wait",
}: OrdersLoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center bg-white"
    >
      <div className="flex h-25 w-25 items-center justify-center rounded-3xl bg-green-50">
        <div className="relative h-10 w-10 animate-[spin_1.2s_linear_infinite] motion-reduce:animate-none">
          {Array.from({ length: DOT_COUNT }).map((_, i) => {
            const angle = (360 / DOT_COUNT) * i;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-1.75 w-1.75 rounded-full bg-green-600"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${RADIUS}px)`,
                  opacity: 0.35 + (0.65 * i) / (DOT_COUNT - 1),
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-medium text-gray-900">{title}</p>
      <p className="mt-1 text-base text-gray-500">{subtitle}</p>
    </div>
  );
}