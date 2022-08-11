<script setup lang="ts">
import { MovieItem } from '@/types';
import MovieListItem from '@/components/MovieListItem.vue';

defineProps<{ list: MovieItem[] }>();
</script>

<template>
  <ul class="movie-list">
    <MovieListItem v-for="item in list" :key="item.id" :movie="item" />
  </ul>
</template>

<style lang="scss" scoped>
@import '@/styles/movieList.scss';
</style>
