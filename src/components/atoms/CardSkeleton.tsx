export default function CardSkeleton() {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse w-full max-w-[360px] mx-auto"
      aria-label="Loading character information, please wait"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="aspect-square bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>
      <div className="p-3 sm:p-4 space-y-3" aria-hidden="true">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
} 