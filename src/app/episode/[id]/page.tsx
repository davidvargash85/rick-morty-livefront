"use client";

import { useEpisode } from '@/hooks/useEpisodes';
import { useCharactersByUrls } from '@/hooks/useCharacters';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/templates/MainLayout';
import CharacterCard from '@/components/molecules/CharacterCard';

export default function EpisodeDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: episode, isLoading: loadingEpisode, error: episodeError } = useEpisode(id);
  const {
    data: characters,
    isLoading: loadingCharacters,
  } = useCharactersByUrls(episode?.characters ?? []);

  if (loadingEpisode || loadingCharacters) {
    return (
      <MainLayout>
        <div className="py-12 text-center text-gray-500 dark:text-gray-400">Loading episode...</div>
      </MainLayout>
    );
  }

  if (episodeError || !episode) {
    return (
      <MainLayout>
        <div className="py-12 text-center text-red-500">Episode not found or failed to load.</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{episode.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{episode.episode} • {episode.air_date}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Characters in this episode</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {characters?.map((character, i) => (
              <CharacterCard key={character.id} character={character} priority={i < 6} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
