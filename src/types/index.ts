export interface MovieItem {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_count: number;
  vote_average: number;
}

export interface FilterKeys {
  year?: number;
  vote_average_lte?: number;
  vote_average_gte?: number;
}

export interface QueryKeys extends FilterKeys {
  page?: number;
}
