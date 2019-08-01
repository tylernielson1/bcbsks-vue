<template>
  <div id="app" class="container">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/playground">Playground</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|
      <router-link to="/categories">Categories</router-link>&nbsp;|
      <router-link to="/payees">Payees</router-link>&nbsp;|
      <router-link to="/people">People</router-link>&nbsp;|
      <router-link to="/tx">Transactions</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('./assets/bootstrap/bootstrap.css');
#nav {
  border-bottom: 2px black solid;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
</style>
