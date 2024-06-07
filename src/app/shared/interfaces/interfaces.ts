export interface movie {
  cinemas: cinemas[];
  id: string;
  name: string;
  poster: string;
  trailer: string;
}

interface cinemas {
  id: string;
  name: { eng: string; geo: string };
  sessions: MovieSession[];
}

interface MovieSession {
  lang: string;
  is_3d: boolean;
  subs: boolean;
  name: string;
  title: string;
  prices: string[];
  id: string;
  imax: boolean;
}

export interface Quote {
  id: number;
  quote: string;
  movie_title: string;
  actor_name: string;
  category: string;
  publish_date: string;
  source: string | null;
  context: string | null;
  rating: string;
  language: string;
  author: string;
  author_bio: string;
}
