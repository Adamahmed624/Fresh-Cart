export default function AddressCardSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm animate-pulse">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-11 h-11 rounded-xl bg-gray-200 shrink-0" />

              <div className="flex-1 min-w-0">
                <div className="h-4 w-1/3 rounded bg-gray-200 mb-2" />
                <div className="h-3 w-full rounded bg-gray-100 mb-1.5" />
                <div className="h-3 w-2/3 rounded bg-gray-100 mb-4" />
                <div className="flex items-center gap-4">
                  <div className="h-3 w-24 rounded bg-gray-100" />
                  <div className="h-3 w-16 rounded bg-gray-100" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gray-200" />
              <div className="w-9 h-9 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm animate-pulse">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-11 h-11 rounded-xl bg-gray-200 shrink-0" />

              <div className="flex-1 min-w-0">
                <div className="h-4 w-1/3 rounded bg-gray-200 mb-2" />
                <div className="h-3 w-full rounded bg-gray-100 mb-1.5" />
                <div className="h-3 w-2/3 rounded bg-gray-100 mb-4" />
                <div className="flex items-center gap-4">
                  <div className="h-3 w-24 rounded bg-gray-100" />
                  <div className="h-3 w-16 rounded bg-gray-100" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gray-200" />
              <div className="w-9 h-9 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
