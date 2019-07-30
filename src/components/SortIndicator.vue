<template>
  <!-- <span>{{ indicator }}</span> -->
  <span v-html="indicator"></span>
</template>

<script>
export default {
  props: {
    column: String,
    sortField: String,
    sortDirection: String
  },
  computed: {
    indicator() {
      if (this.column === this.sortField) {
        return this.sortDirection === 'asc' ? '&#8593;' : '&#8595;';
        // return this.sortDirection === 'asc' ? '⏫' : '⏬';
      } else {
        return '';
      }
    }
  }
};
</script>

<style>
</style>
