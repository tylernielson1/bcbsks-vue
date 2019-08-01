<template>
  <form>
    <FilterInput
      v-for="field in fields"
      :key="field.path"
      v-bind="field"
      @update-filter="handleUpdateFilter"
    />
  </form>
</template>

<script>
import FilterInput from './FilterInput';
export default {
  components: {
    FilterInput
  },
  props: {
    fields: {
      type: Array
    }
  },
  data() {
    const filter = {};
    this.fields.forEach(field => filter[field.path] = '');

    return {
      filter
    };
  },
  methods: {
    handleUpdateFilter(path, value) {
      // console.log(`FilterForm: ${path} / ${value}`);
      this.filter[path] = value;
      this.$emit('update-filter', this.filter);
    }
  }
};
</script>

<style>
</style>
