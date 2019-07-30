<template>
  <div>
    <h1>Payees List</h1>
    <DataGrid v-bind:columns="columns" />
  </div>
</template>

<script>
import DataGrid from '../components/DataGrid';

export default {
  components: {
    DataGrid
  },
  data() {
    return {
      columns: [
        { name: 'payeeName' },
        { name: 'address.city', label: 'City' },
        { name: 'address.state', label: 'State' }
      ]
    };
  }
};
</script>

<style>
</style>
