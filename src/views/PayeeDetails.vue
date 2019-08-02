<template>
  <section>
    <h3>Payee Details</h3>
    <PayeeDetailsCard v-if="payee" :payee="payee" />
    <ErrorCard v-else-if="error" :error="error" />
    <div class="text-center" v-else>
      <Spinner />
    </div>
    <div class="button-bar" v-if="previousRoute">
      <button class="btn btn-info" @click="handleBackClick">Back</button>
    </div>
  </section>
</template>

<script>
import dao from '../common/payees-dao';
import Spinner from '../components/Spinner';
import PayeeDetailsCard from '../components/PayeeDetailsCard';
import ErrorCard from '../components/ErrorCard';

export default {
  components: {
    Spinner,
    PayeeDetailsCard,
    ErrorCard
  },
  props: ['id'],
  data() {
    return {
      payee: null,
      error: null,
      previousRoute: false
    };
  },
  beforeRouteEnter(to, from, next) {
    // console.log('From: ', from);
    const setPreviousRoute = comp => {
      if (from.matched.length === 0 || from.name === null) {
        comp.hasPreviousRoute(false);
      } else {
        comp.hasPreviousRoute(true);
      }
    };
    dao
      .getById(to.params.id)
      .then(payee => {
        next(comp => {
          comp.setPayee(payee);
          setPreviousRoute(comp);
        });
      })
      .catch(error => {
        if (error.status && error.status === 404) {
          next(comp => {
            comp.setError(`Could not find payee #${to.params.id}`);
            setPreviousRoute(comp);
          });
        }
      });
  },
  methods: {
    setPayee(payee) {
      this.payee = payee;
    },
    setError(error) {
      this.error = error;
    },
    hasPreviousRoute(yesNo) {
      if (yesNo) {
        this.previousRoute = true;
      } else {
        this.previousRoute = false;
      }
    },
    handleBackClick() {
      this.$router.back();
    }
  }
};
</script>

<style>
.button-bar {
  margin-top: 15px;
}
</style>
