import axios from 'axios';

interface FetchMoviesPayload {
  page?: number;
  year?: number;
  vote_average_gte?: number;
  vote_average_lte?: number;
}

interface Movie {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_count: number;
  vote_average: number;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export async function fetchMovies(
  payload: FetchMoviesPayload
): Promise<FetchMoviesResponse> {
  const params = fetchMoviesPayloadStandardize(payload);
  const data = await httpClient.get('/discover/movie', {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      ...params,
    },
  });
  return data.data;
}

function fetchMoviesPayloadStandardize(payload: FetchMoviesPayload) {
  const { page, year, vote_average_gte, vote_average_lte } = payload;
  return {
    page,
    year,
    'vote_average.gte': vote_average_gte,
    'vote_average.lte': vote_average_lte,
  };
}
