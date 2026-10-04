export default function CheckoutSkeleton() {
  return (
    <div
      className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8"
      aria-busy="true"
      aria-label="Loading checkout"
    >
      <div className="container mx-auto px-4 animate-pulse">
        <div className="h-4 w-48 bg-gray-200 rounded mb-6" />

        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-200" />
            <div className="space-y-2">
              <div className="h-7 w-56 bg-gray-200 rounded" />
              <div className="h-4 w-72 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 bg-white rounded-2xl p-6 shadow-sm">
            <div className="h-6 w-40 bg-gray-200 rounded" />
            <div className="h-12 bg-gray-200 rounded-lg" />
            <div className="h-12 bg-gray-200 rounded-lg" />
            <div className="h-12 bg-gray-200 rounded-lg" />
            <div className="h-24 bg-gray-200 rounded-lg" />
          </div>

          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-sm h-fit">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
            <div className="h-12 bg-gray-200 rounded-xl mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}