<template>
  <h2>Hello, {{ name }}</h2>
</template>

<script>
export default {
  // props: ['name']
  // props: {
  // name: String
  // }
  props: {
    name: {
      type: String,
      required: true
      // default: 'Tyler'
    }
  },
};
</script>

<style>
</style>
