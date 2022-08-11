<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { AllowedQueryKeys } from '@/types';
import { LocationQueryRaw } from 'vue-router';
import { FILTER_FIELDS_DATA } from '@/constants/filterForms';

const props = defineProps<{
  currentQuery: AllowedQueryKeys;
}>();

const emit = defineEmits<{
  (e: 'onChangeFilter', value: LocationQueryRaw): void;
}>();

const form = ref({ year: '', vote_average_lte: '', vote_average_gte: '' });
const isDisabledButtons = computed(() =>
  Object.values(form.value).every((value) => value === '')
);

onMounted(() => {
  const { page, year, vote_average_lte, vote_average_gte } = props.currentQuery;
  form.value = {
    ...form.value,
    year: year || '',
    vote_average_lte: vote_average_lte || '',
    vote_average_gte: vote_average_gte || '',
  };
});

function formSubmit() {
  const nonEmptyFields = Object.fromEntries(
    Object.entries(form.value).filter(([_, v]) => v != '')
  );
  emit('onChangeFilter', nonEmptyFields);
}

function handleResetForm() {
  form.value = { year: '', vote_average_lte: '', vote_average_gte: '' };
  emit('onChangeFilter', {});
}
</script>
<template>
  <form class="search-form" @submit.prevent="formSubmit">
    <input
      v-for="field in FILTER_FIELDS_DATA"
      :key="field.key"
      class="search-form__input"
      :type="field.type"
      v-model="form[field.key]"
      :placeholder="field.placeholder"
      v-bind="{ ...field.attrs }"
    />
    <button
      :disabled="isDisabledButtons"
      class="search-form__btn search-form__btn--submit"
      type="submit"
    >
      Search
    </button>
    <button
      :disabled="isDisabledButtons"
      class="search-form__btn search-form__btn--reset"
      @click="handleResetForm"
    >
      Reset
    </button>
  </form>
</template>

<style lang="scss" scoped>
@import '@/styles/filterForm.scss';
</style>
