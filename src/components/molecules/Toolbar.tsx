"use client";

import { useState } from "react";
import FilterSelect from "@/components/atoms/FilterSelect";

interface FilterProps {
  onFilter: (filters: Record<string, string>) => void;
}

// This is just a simple toolbar with filters 
// in more mature apps the components will have better UX

export default function Toolbar({ onFilter }: FilterProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [expanded, setExpanded] = useState(true);

  const handleApply = () => {
    onFilter({ name, status, gender });
  };

  const handleClear = () => {
    setName("");
    setStatus("");
    setGender("");
    onFilter({});
  };

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <section
      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow"
      aria-label="Character filters"
    >
      <button
        type="button"
        onClick={toggleExpanded}
        className="hover:cursor-pointer flex items-center justify-between w-full text-left font-medium text-gray-700 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        aria-expanded={expanded}
        aria-controls="filters-panel"
      >
        <span>Filters</span>
        <span className="text-lg font-bold">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div
          id="filters-panel"
          className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-end gap-4"
        >
          <div className="w-full sm:w-auto">
            <label
              htmlFor="filter-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="filter-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rick"
              className="p-2 border border-gray-300 dark:border-gray-600 rounded w-full sm:w-48 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <FilterSelect
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: "alive", label: "Alive" },
              { value: "dead", label: "Dead" },
              { value: "unknown", label: "Unknown" },
            ]}
          />

          <FilterSelect
            label="Gender"
            value={gender}
            onChange={setGender}
            options={[
              { value: "female", label: "Female" },
              { value: "male", label: "Male" },
              { value: "genderless", label: "Genderless" },
              { value: "unknown", label: "Unknown" },
            ]}
          />

          <div className="flex gap-2 w-full sm:w-auto sm:ml-auto">
            <button
              onClick={handleApply}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Apply character filters"
            >
              Apply Filters
            </button>

            <button
              onClick={handleClear}
              className="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Clear all character filters"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
