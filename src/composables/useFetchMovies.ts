import { MovieItem, AllowedQueryKeys } from '@/types';
import { fetchMovies } from '@/api';
import { ref } from 'vue';

export default function useFetchMovies() {
  const loading = ref(false);
  const error = ref<null | string>(null);
  const movies = ref<MovieItem[]>([]);
  const totalPages = ref<number>(0);

  function getMovieList(value: AllowedQueryKeys) {
    error.value = null;
    loading.value = true;
    fetchMovies(value)
      .then(({ results, total_pages }) => {
        movies.value = results;
        totalPages.value = total_pages <= 500 ? total_pages : 500; // because of api limitation
      })
      .catch((err) => {
        error.value =
          err?.response?.data?.errors[0] || 'Something went wrong...';
      })
      .finally(() => {
        loading.value = false;
      });
  }

  return { getMovieList, loading, error, movies, totalPages };
}
