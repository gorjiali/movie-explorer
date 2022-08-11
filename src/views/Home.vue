<script setup lang="ts">
import { ref, watch } from 'vue';
import { MovieItem, QueryKeys } from '@/types';
import { fetchMovies } from '@/api';
import useWatchQuery from '@/composables/useWatchQuery';
import MovieList from '@/components/MovieList.vue';
import Pagination from '@/components/Pagination.vue';

const { currentQuery, setQuery } = useWatchQuery(getMovieList);

const queriedData = ref<MovieItem[]>([]);
const totalPages = ref<number>(0);
const page = ref(Number(currentQuery.page) || 1);

watch(page, (newPage) => {
  setQuery({ page: newPage }, 'add');
});

function getMovieList(value: QueryKeys) {
  fetchMovies(value).then(({ results, total_pages }) => {
    queriedData.value = results;
    totalPages.value = total_pages <= 500 ? total_pages : 500; // because of api limitation
  });
}

function handleChangePage(newPage: number) {
  page.value = newPage;
}
</script>

<template>
  <div class="container">
    <MovieList ref="dataTableRef" :list="queriedData" />
    <Pagination
      :currentPage="page"
      :totalPages="totalPages"
      :itemsPerPage="20"
      @onChangePage="handleChangePage"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/home.scss';
</style>
