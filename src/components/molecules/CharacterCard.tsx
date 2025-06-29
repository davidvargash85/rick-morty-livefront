import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types";

interface CharacterCardProps {
  character: Character;
  priority?: boolean;
}

export default function CharacterCard({
  character,
  priority = false,
}: CharacterCardProps) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  return (
    <Link
      href={`/character/${character.id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg focus:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 transition-all duration-200 focus:outline-none w-full max-w-[360px] mx-auto"
      aria-label={`View details for ${character.name}, ${character.status} ${character.species}`}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute top-2 right-2" aria-hidden="true">
          <div
            className={`w-3 h-3 rounded-full ${statusColor[character.status]}`}
          />
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-100 mb-2 truncate">
          {character.name}
        </h3>
        <div className="space-y-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <p>
            <span className="font-medium">Status:</span> {character.status}
          </p>
          <p>
            <span className="font-medium">Species:</span> {character.species}
          </p>
          <p className="truncate">
            <span className="font-medium">Location:</span>{" "}
            {character.location.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
