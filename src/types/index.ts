export interface MovieItem {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_count: number;
  vote_average: number;
}

export interface AllowedQueryKeys {
  page?: string;
  year?: string;
  vote_average_lte?: string;
  vote_average_gte?: string;
}

export interface FetchMoviesResponse {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
}

export interface FilterFormsItemData {
  type: string;
  key: 'year' | 'vote_average_gte' | 'vote_average_lte';
  placeholder: string;
  attrs: { [key: string]: string };
}
