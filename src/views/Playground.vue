<template>
  <div>
    <h1>The Playground</h1>
    <p>A place to test a variety of bits of code out.</p>
    <div class="row">
      <div class="col">
        <h2>Event handling with a button</h2>
        <button class="btn btn-primary" @click="handleButtonClick">Click me</button>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>One-way data binding</h2>
        <Greeter :name="name" />
        <p>Original name: {{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Greeter from '../components/Greeter';

export default {
  components: {
    Greeter
  },
  data() {
    return {
      name: 'Matteo'
    };
  },
  methods: {
    handleButtonClick(event) {
      console.log('You clicked on the button');
      console.log('Event: ', event);
    }
  }
};
</script>

<style>
</style>
