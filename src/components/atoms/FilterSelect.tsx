"use client";

import React from "react";

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  id?: string;
}

// could evolve even more in the future ... 
// instead of using the browser select build our own so we always display a consistent UX regardless of consumer

export default function FilterSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Any",
  id,
}: FilterSelectProps) {
  const selectId = id ?? `filter-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="w-full sm:w-auto">
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`${label} filter`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
