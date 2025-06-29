import { Episode } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <Link
      href={`episode/${episode.id}`}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
      aria-label={`Episode ${episode.name}, aired on ${episode.air_date}`}
    >
      <div
        className="relative w-full h-40 sm:w-32 sm:h-20 flex-shrink-0 rounded overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/movie_clip_art.svg"
          alt="Film reel illustration"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, 128px"
        />
      </div>

      <section
        aria-labelledby={`episode-title-${episode.id}`}
        className="flex flex-col sm:flex-row justify-between w-full gap-2"
      >
        <div className="flex-1">
          <h2
            id={`episode-title-${episode.id}`}
            className="text-base sm:text-lg font-bold text-gray-900 dark:text-white"
          >
            {episode.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {episode.episode} &bull; {episode.air_date}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {episode.characters.length} characters
          </p>
        </div>

        <div className="hidden sm:block sm:w-1/2 text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
          <p className="line-clamp-3">
            Rick and Morty go on adventure to a new universe ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
      </section>
    </Link>
  );
}
