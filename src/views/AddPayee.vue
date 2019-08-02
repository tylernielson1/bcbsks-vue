<template>
  <form>
    <!-- .form-group>label+input.form-control -->
    <div class="form-group">
      <label for>Payee Name:</label>
      <input type="text" class="form-control" v-model="payee.payeeName" />
    </div>
    <div class="form-group">
      <label for>Street:</label>
      <input type="text" class="form-control" v-model="payee.address.street" />
    </div>
    <div class="form-group">
      <label for>City:</label>
      <input type="text" class="form-control" v-model="payee.address.city" />
    </div>
    <div class="form-group">
      <label for>State:</label>
      <input type="text" class="form-control" v-model="payee.address.state" />
    </div>
    <div class="form-group">
      <label for>Zip:</label>
      <input type="text" class="form-control" v-model="payee.address.zip" />
    </div>
    <div class="form-group">
      <label for>Category ID:</label>
      <input type="text" class="form-control" v-model="payee.categoryId" />
    </div>
    <div class="form-group">
      <label for>Motto:</label>
      <input type="text" class="form-control" v-model="payee.motto" />
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" @click="handleAddPayee">Add Payee</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      payee: {
        payeeName: '',
        address: {
          street: '',
          city: '',
          state: ''
        }
      }
    };
  },
  methods: {
    handleAddPayee() {
      this.$store.dispatch('addPayee', { payee: this.payee }).then(results => {
        console.log('Dispatch results: ', results);
        this.$router.push(`/payees/details/${results}`);
      });
    }
  }
};
</script>

<style>
</style>
