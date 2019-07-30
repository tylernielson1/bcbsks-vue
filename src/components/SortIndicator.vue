<template>
  <span>{{ indicator() }}</span>
</template>

<script>
export default {
  props: {
    column: String,
    'sort-field': String,
    'sort-direction': String
  },
  methods: {
    indicator() {
      console.log('Column: ', this.column);
      console.log('Sort Field', this['sort-field']);
      if (this.column === this['sort-field']) {
        return this['sort-direction'] === 'asc' ? 'Up' : 'Down'
      }

      return '';
    }
  },
  updated() {
    console.log('Updated.')
  }
}
</script>

<style>

</style>
