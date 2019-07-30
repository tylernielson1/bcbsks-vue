<template>
  <div>
    <h1>Payees List</h1>
    <DataGrid v-bind:columns="columns" v-bind:records="payees"/>
  </div>
</template>

<script>
import DataGrid from '../components/DataGrid';
import dao from '../common/payees-dao';

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
      ],
      payees: []
    };
  },
  created() {
    dao.queryPayees().then(payees => (this.payees = payees));
  }
};
</script>

<style>
</style>
