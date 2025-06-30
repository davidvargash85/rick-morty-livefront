"use client";

import { useEpisodes } from "@/hooks/useEpisodes";
import EpisodeCard from "@/components/molecules/EpisodeCard";
import EpisodeCardSkeleton from "@/components/atoms/EpisodeCardSkeleton";

// TODO: consider adding auto loading when scrolling at the bottom! that would be a neat trick 
// the logic goes soemthing like ... add an interceptor observer that fires events on scroll ... 
// use builting react-query to fetch the next page of episodes and merge into the current collection of episodes on response

export default function EpisodeList() {
  const { data, isLoading, error } = useEpisodes();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <EpisodeCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12" role="alert" aria-live="assertive">
        <p className="text-red-600 dark:text-red-400 text-lg">
          Error loading episodes. Please try again later.
        </p>
      </div>
    );
  }

  if (!data || !data.results.length) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No episodes found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.results.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
}
