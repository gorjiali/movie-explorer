import { AllowedQueryKeys } from '@/types';

export function fetchMoviesPayloadStandardize(payload: AllowedQueryKeys) {
  const { page, year, vote_average_gte, vote_average_lte } = payload;
  return {
    page,
    year,
    'vote_average.gte': vote_average_gte,
    'vote_average.lte': vote_average_lte,
  };
}
