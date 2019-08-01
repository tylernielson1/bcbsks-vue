<template>
  <div>
    <h1>The Playground</h1>
    <p>A place to test a variety of bits of code out.</p>
    <hr />
    <VuexCounter />
    <hr />
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
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Inheriting attributes</h3>
        <h4>Inheritance of attributes</h4>
        <DeepField class="red-background" maxlength="5" />
        <h4>No inheritance of attributes</h4>
        <DeepFieldBetter class="red-background" maxlength="5" pattern="[0-9]+" />
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Greeter from '../components/Greeter';
import DeepField from '../components/DeepField';
import DeepFieldBetter from '../components/DeepFieldBetter';
import Spinner from '../components/Spinner';
import VuexCounter from '../components/VuexCounter';

export default {
  components: {
    Greeter,
    DeepField,
    DeepFieldBetter,
    Spinner,
    VuexCounter
  },
  data() {
    return {
      name: 'Matteo'
    };
  },
  methods: {
    handleButtonClick(event) {
      console.log('You clicked on the button');
      // event.preventDefault();
      console.log('Event: ', event);
    }
  }
};
</script>

<style>
.red-background {
  background: red;
}
</style>
