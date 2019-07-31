<template>
  <div class="row">
    <div class="col">
      <p>Other text</p>
      <!-- Class is not affected by inheritAttrs! -->
      <label for="foo" :class="$attrs.class">Test:</label>
      <input type="text" id="foo" v-bind="$attrs" />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<style>
</style>
