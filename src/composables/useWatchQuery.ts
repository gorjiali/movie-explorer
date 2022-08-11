import { watch } from 'vue';
import {
  LocationQuery,
  LocationQueryRaw,
  useRoute,
  useRouter,
} from 'vue-router';

export default function useWatchQuery(
  onChangeQuery: (value: LocationQuery) => void
) {
  const route = useRoute();
  const router = useRouter();

  function setQuery(query: LocationQueryRaw, type: 'replace' | 'add') {
    let newQuery;
    if (type === 'replace') {
      newQuery = query;
    } else if (type === 'add') {
      newQuery = { ...route.query, ...query };
    }
    router.replace({ query: newQuery });
  }

  watch(
    () => route.query,
    (value) => {
      onChangeQuery(value);
    },
    { immediate: true }
  );

  return { setQuery, currentQuery: route.query };
}
