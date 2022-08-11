<script setup lang="ts">
import { MovieItem } from '@/types';

defineProps<{ movie: MovieItem }>();

function getPosterSrc(posterPath: string) {
  return `${import.meta.env.VITE_IMAGE_BASE_URL}/w185${posterPath}`;
}
</script>

<template>
  <li class="card">
    <div class="card__header">
      <img
        class="card__header__image"
        :src="getPosterSrc(movie.poster_path)"
        :alt="`${movie.title} poster`"
      />
    </div>

    <div class="card__content">
      <div class="card__content__head">
        <h3 class="card__title">{{ movie.title }}</h3>
        <div class="card__ratings">
          <span>{{ movie.vote_average }}</span
          >({{ movie.vote_count }})
        </div>
      </div>
      <div class="card__release-date">
        <label>Release Date</label>
        <span>{{ movie.release_date }}</span>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import '@/styles/movieListItem.scss';
</style>
