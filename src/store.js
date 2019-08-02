import Vue from 'vue';
import Vuex from 'vuex';
import dao from './common/payees-dao';
import * as _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    payees: [],
    isLoading: false,
    error: null,
    filterCriteria: {},
    gridSort: {},
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    updateSortCriteria(state, payload) {
      state.gridSort[payload.key] = { ...payload };
    },
    updateFilterCriteria(state, payload) {
      state.filterCriteria = { ...payload.filterCriteria };
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
    filterCriteria(state) {
      return state.filterCriteria;
    },
    getSortCriteria: state => key => state.gridSort[key],
    hasSortCriteria: state => key => _.has(state.gridSort, key),
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
