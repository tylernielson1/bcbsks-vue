<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ payee.payeeName }}</div>
    <ul class="list-group">
      <li class="list-group-item" v-if="payee.address">{{ payee.address.street }}</li>
      <li
        class="list-group-item"
        v-if="payee.address"
      >{{ payee.address.city }}, {{ payee.address.state }}</li>
      <li class="list-group-item">Category: {{ payee.categoryId }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    payee: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
