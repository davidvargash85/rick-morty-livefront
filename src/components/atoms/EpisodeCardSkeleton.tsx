export default function EpisodeCardSkeleton() {
  return (
    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse">
      <div className="w-32 h-20 bg-gray-200 dark:bg-gray-700 rounded" />

      <div className="flex flex-col gap-2 w-full">
        <div className="h-5 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-1/6 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>

      <div className="hidden sm:block w-1/2 space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      </div>
    </div>
  );
}
