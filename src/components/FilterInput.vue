<template>
  <div class="form-group row">
    <label :for="fieldId" class="col-2 col-form-label">{{ label }}</label>
    <div class="col">
      <input type="text" :id="fieldId" :name="path" class="form-control" @input="handleInput" />
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash';

export default {
  props: {
    label: String,
    path: String
  },
  computed: {
    fieldId() {
      return _.kebabCase(this.path);
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('update-filter', this.path, event.target.value);
    }
  }
};
</script>

<style>
</style>
