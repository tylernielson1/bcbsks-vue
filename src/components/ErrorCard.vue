<template>
  <div class="card">
    <div class="card-header bg-danger text-white">Error!</div>
    <div class="card-body">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
