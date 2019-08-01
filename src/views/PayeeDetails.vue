<template>
  <section>
    <h3>Payee Details</h3>
    <div class="card" v-if="payee">
      <div class="card-header bg-primary text-white">{{ payee.payeeName}}</div>
      <ul class="list-group">
        <li class="list-group-item" v-if="payee.address">{{ payee.address.street }}</li>
        <li
          class="list-group-item"
          v-if="payee.address"
        >{{ payee.address.city}}, {{ payee.address.state }}</li>
        <li class="list-group-item">Category: {{ payee.categoryId }}</li>
      </ul>
    </div>
    <div class="card" v-else-if="error">
      <div class="card-header bg-danger text-white">Error!</div>
      <div class="card-body">{{ error }}</div>
    </div>
    <div class="text-center" v-else>
      <Spinner />
    </div>
  </section>
</template>

<script>
import dao from '../common/payees-dao';
import Spinner from '../components/Spinner';

export default {
  components: {
    Spinner
  },
  props: ['id'],
  data() {
    return {
      payee: null,
      error: null
    };
  },
  beforeRouteEnter(to, from, next) {
    dao
      .getById(to.params.id)
      .then(payee => {
        next(comp => comp.setPayee(payee));
      })
      .catch(error => {
        if (error.status && error.status === 404) {
          next(comp => comp.setError(`Could not find payee #${to.params.id}`));
        }
      });
  },
  methods: {
    setPayee(payee) {
      this.payee = payee;
    },
    setError(error) {
      this.error = error;
    }
  }
  /*
  created() {
    dao
      .getById(this.id)
      .then(payee => (this.payee = payee))
      .catch(error => {
        if (error.status && error.status === 404) {
          this.error = `Could not find payee #${this.id}`
        }
      });
  }*/
};
</script>

<style>
</style>
