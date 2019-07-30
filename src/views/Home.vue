<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Blue Cross Blue Shield of Kansas says hi."/> -->
    <!-- <Greeter :name="name" /> -->
    <!-- <p>Original name: {{ name }}</p> -->

    <button class="btn btn-primary" @click="handleButtonClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Greeter from '@/components/Greeter.vue';

export default {
  name: 'home',
  methods: {
    handleButtonClick(event) {
      console.log('You clicked on the button');
      console.log('Event: ', event);
    }
  },
  data() {
    return {
      name: 'Matteo'
    };
  },
  components: {
    HelloWorld,
    Greeter
  }
};
</script>
