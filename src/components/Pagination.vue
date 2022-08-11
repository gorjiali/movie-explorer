<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';
import {
  checkShowPageNumber,
  checkShowLeftDots,
  checkShowRightDots,
} from '@/utils/paginationHelpers';

const props = defineProps<{
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'onChangePage', pageNumber: number): void;
}>();

function setPage(pageNumber: number) {
  emit('onChangePage', pageNumber);
}

const allowedPageNumbers = computed(() => {
  const allNumbers = Array.from({ length: props.totalPages }, (_, i) => i + 1);
  return allNumbers.filter((num) =>
    checkShowPageNumber(num, props.currentPage, props.totalPages)
  );
});
</script>

<template>
  <ul class="pagination">
    <li v-for="pageNumber in allowedPageNumbers" class="pagination__item">
      <span v-if="checkShowLeftDots(pageNumber, currentPage, totalPages)"
        >...</span
      >
      <button
        @click="setPage(pageNumber)"
        class="pagination__item__btn"
        :class="{ 'pagination__item__btn--active': currentPage === pageNumber }"
      >
        {{ pageNumber }}
      </button>
      <span v-if="checkShowRightDots(pageNumber, currentPage)">...</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/styles/pagination.scss';
</style>
