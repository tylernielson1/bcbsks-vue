<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Blue Cross Blue Shield of Kansas says hi." />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Greeter from '@/components/Greeter.vue';

export default {
  name: 'home',
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
