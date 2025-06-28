"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCharacter } from "@/hooks/useCharacters";
import MainLayout from "@/components/templates/MainLayout";
import CharacterDetailSkeleton from "@/components/atoms/CharacterDetailSkeleton";
import Button from "@/components/atoms/Button";

const statusColor = {
  Alive: "text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  Dead: "text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
  unknown: "text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700",
};

const genderColor = {
  Male: "text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
  Female: "text-pink-700 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30",
  Genderless:
    "text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
  unknown: "text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700",
};

export default function CharacterPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: character, isLoading, error } = useCharacter(id);

  if (isLoading) {
    return (
      <MainLayout>
        <CharacterDetailSkeleton />
      </MainLayout>
    );
  }

  if (error || !character) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <p className="text-red-600 dark:text-red-400 text-lg mb-4">
            Character not found or failed to load.
          </p>
          <Link href="/">
            <Button>Back to Characters</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline">Back to Characters</Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-full md:h-full">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-contain p-3 rounded-lg"
                  priority
                  sizes="(max-width: 768px) 256px, 33vw"
                />
              </div>
            </div>

            <div className="md:w-2/3 p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h1 
                    className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                    id="character-name"
                  >
                    {character.name}
                  </h1>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      statusColor[character.status]
                    }`}
                  >
                    {character.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">
                    {character.species}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      genderColor[character.gender]
                    }`}
                  >
                    {character.gender}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Origin
                    </h3>
                    <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">
                      {character.origin.name}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Location
                    </h3>
                    <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">
                      {character.location.name}
                    </p>
                  </div>

                  {character.type && (
                    <div className="sm:col-span-2">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Type
                      </h3>
                      <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">
                        {character.type}
                      </p>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Episodes
                    </h3>
                    <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">
                      {character.episode.length} episodes
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Created: {new Date(character.created).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
