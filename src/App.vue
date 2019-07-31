<template>
  <div id="app" class="container">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/playground">Playground</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|
      <router-link to="/payees-list">Payees List</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('./assets/bootstrap/bootstrap.css');
</style>
