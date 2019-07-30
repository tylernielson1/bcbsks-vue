<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Blue Cross Blue Shield of Kansas says hi."/>
    <Greeter />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Greeter from '@/components/Greeter.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Greeter
  }
}
</script>
