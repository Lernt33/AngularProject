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
