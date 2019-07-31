<template>
  <form>
    <FilterInput label="Payee Name:" path="payeeName" @update-filter="handleUpdateFilter" />
  </form>
</template>

<script>
import FilterInput from './FilterInput';
export default {
  components: {
    FilterInput
  },
  methods: {
    handleUpdateFilter(path, value) {
      console.log(`FilterForm: ${path} / ${value}`);
    }
  }
};
</script>

<style>
</style>
