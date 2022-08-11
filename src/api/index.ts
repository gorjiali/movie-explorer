import httpClient from './httpClient';
import { AllowedQueryKeys, FetchMoviesResponse } from '@/types';
import { fetchMoviesPayloadStandardize } from '@/utils/apiHelpers';

export async function fetchMovies(
  payload: AllowedQueryKeys
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
