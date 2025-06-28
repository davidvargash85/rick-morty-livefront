export default function CharacterDetailSkeleton() {
  return (
    <div 
      className="max-w-4xl mx-auto animate-pulse"
      role="status"
      aria-live="polite"
      aria-label="Loading character details, please wait"
      aria-busy="true"
    >
      <div className="mb-6">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-40" aria-hidden="true"></div>
      </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden" aria-hidden="true">
          <div className="md:flex">
                        <div className="md:w-1/3 flex justify-center md:justify-start">
               <div className="w-64 h-64 md:w-full md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              </div>

            <div className="md:w-2/3 p-6 md:p-8">
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"></div>

              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-12"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-36"></div>
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-14"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 