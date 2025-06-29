"use client";

import { useState } from "react";
import { useCharacters } from "@/hooks/useCharacters";
import CharacterCard from "@/components/molecules/CharacterCard";
import Pagination from "@/components/molecules/Pagination";
import CardSkeleton from "@/components/atoms/CardSkeleton";

export default function CharacterGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useCharacters(currentPage);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          role="status"
          aria-label="Loading character grid, please wait"
          aria-live="polite"
          aria-busy="true"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12" role="alert" aria-live="assertive">
        <p className="text-red-600 dark:text-red-400 text-lg">
          Error loading characters. Please try again later.
        </p>
      </div>
    );
  }

  if (!data || !data.results.length) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No characters found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        role="grid"
        aria-label={`Character grid showing ${data.results.length} characters on page ${currentPage} of ${data.info.pages}`}
        aria-live="polite"
      >
        {data.results.map((character, index) => (
          <CharacterCard
            key={character.id}
            character={character}
            priority={index < 6}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={data.info.pages}
        onPageChange={setCurrentPage}
        hasNext={!!data.info.next}
        hasPrev={!!data.info.prev}
      />
    </div>
  );
}
