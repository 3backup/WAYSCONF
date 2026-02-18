"use client";

import React, { createContext, useContext, useState } from "react";

type SearchContextValue = {
  query: string;
  setQuery: (value: string) => void;
  projectsCount: number;
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const SearchProvider = ({
  children,
  projectsCount,
}: {
  children: React.ReactNode;
  projectsCount: number;
}) => {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery, projectsCount }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextValue => {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return ctx;
};
