import Vue from 'vue';
import Vuex from 'vuex';
import dao from './common/payees-dao';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    payees: [],
    isLoading: false,
    error: null,
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    requestPayees(state) {
      state.isLoading = true;
      state.error = null;
    },
    requestPayeesSuccess(state, payload) {
      state.payees = payload.payees;
      state.isLoading = false;
    },
    requestPayeesError(state, payload) {
      state.error = payload.error;
      state.isLoading = false;
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    payees(state) {
      return state.payees;
    },
  },
  actions: {
    fetchPayees(context) {
      context.commit('requestPayees');
      dao
        .queryPayees()
        .then(payees => context.commit('requestPayeesSuccess', { payees }))
        .catch(error => context.commit('requestPayeesError', { error }));
    },
  },
});
