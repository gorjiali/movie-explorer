<script setup lang="ts">
import { ref } from 'vue';
import useWatchQuery from '@/composables/useWatchQuery';
import useFetchMovies from '@/composables/useFetchMovies';
import MovieList from '@/components/MovieList.vue';
import Pagination from '@/components/Pagination.vue';
import FilterForm from '@/components/FilterForm.vue';
import { LocationQueryRaw } from 'vue-router';
import HelperElements from '@/components/HelperElements.vue';

const { getMovieList, loading, error, movies, totalPages } = useFetchMovies();
const { currentQuery, setQuery } = useWatchQuery(getMovieList);

const page = ref(Number(currentQuery.page) || 1);

function handleChangePage(newPage: number) {
  page.value = newPage;
  setQuery({ page: newPage }, 'add');
}

function handleChangeFilter(filters: LocationQueryRaw) {
  page.value = 1;
  setQuery({ page: 1, ...filters }, 'replace');
}
</script>

<template>
  <div class="container">
    <FilterForm
      :currentQuery="currentQuery"
      @onChangeFilter="handleChangeFilter"
    />
    <HelperElements
      v-if="loading || error || !movies.length"
      :moviesLength="movies.length"
      :loading="loading"
      :error="error"
    />
    <div v-else>
      <MovieList ref="dataTableRef" :list="movies" />
      <Pagination
        :currentPage="page"
        :totalPages="totalPages"
        :itemsPerPage="20"
        @onChangePage="handleChangePage"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/home.scss';
</style>
