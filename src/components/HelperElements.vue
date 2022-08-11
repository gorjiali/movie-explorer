<script setup lang="ts">
defineProps<{
  loading: boolean;
  error: null | string;
  moviesLength: number;
}>();
</script>

<template>
  <div class="helperElements">
    <p v-if="loading">Loading ...</p>
    <p v-else-if="error" class="helperElements__errorMsg">{{ error }} 🚨</p>
    <p v-else>No Data, please search with another parameters 👆</p>
  </div>
</template>

<style lang="scss" scoped>
.helperElements {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 3rem;

  &__errorMsg {
    color: orangered;
  }
}
</style>
