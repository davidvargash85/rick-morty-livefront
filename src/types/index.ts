export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: string,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string,
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ApiResponse<T> {
  info: Info;
  results: T[];
}

export type CharactersResponse = ApiResponse<Character>;
export type EpisodeResponse = ApiResponse<Episode>; 