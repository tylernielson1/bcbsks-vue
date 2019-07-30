<template>
  <div>
    <h1>Payees List</h1>
    <p>There are {{ payeesCount }} payees.</p>
    <!-- <ol v-if="payeesCount > 0">
      <li v-for="payee in payees" v-bind:key="payee.id">{{ payee.payeeName }}</li>
    </ol> -->

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Payee Name</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="payee in payees" :key="payee.id">
          <td>{{ payee.payeeName }}</td>
          <td>{{ payee.address && payee.address.city }}</td>
          <td>{{ payee.address && payee.address.state }}</td>
        </tr>
      </tbody>
      </table>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      payeesCount: 0,
      payees: []
    };
  },
  methods: {
    getData() {
      /*
      const p1 = fetch('http://localhost:8000/payees');

      const p2 = p1.then(function(results) {
        console.log('Results: ', results);
        return results.json();
      });
      p2.then((data) => {
        console.log('Data: ', data);
        this.payeesCount = data.length;
      });
      */

      fetch('http://localhost:8000/payees')
        .then(response => response.json())
        .then(payees => {
          this.payeesCount = payees.length;
          this.payees = payees;
        });
    },
    getKey(payee) {
      return payee.id + ' ' + payee.payeeName;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
</style>
