<template>
  <section>
    <div class="text-center">
      <h2>Payees</h2>
    </div>
    <nav class="text-center">
      <ul class="list-inline">
        <li class="list-inline-item">
          <router-link to="/payees/list">List</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/payees/add">Add</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
