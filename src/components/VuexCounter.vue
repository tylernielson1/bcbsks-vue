<template>
  <div class="row">
    <div class="col">
      <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
      </div>
      <p>Counter: {{ counter }}</p>
      <div>
        <button class="btn btn-warning" @click="handleDecrement">Decrement</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    counter() {
      return this.$store.getters.counter;
    }
  },
  methods: {
    ...mapMutations({increment: 'increment', handleDecrement: 'decrement'})
  }
};
</script>

<style>
</style>
