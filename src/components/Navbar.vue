<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary text-white">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" exact-active-class="active" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/playground">Playground</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/categories">Categories</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/payees">Payees</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/people">People</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/tx">Transactions</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
