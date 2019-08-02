<template>
  <div>
    <h1>Payees List</h1>
    <FilterForm @update-filter="handleUpdateFilter" :fields="filterConfig" />
    <hr />
    <DataGrid
      v-bind:columns="columns"
      v-bind:records="altFilteredPayees"
      @select-row="handleSelectRow"
    />
  </div>
</template>

<script>
import DataGrid from '../components/DataGrid';
import FilterForm from '../components/FilterForm';
import dao from '../common/payees-dao';
import * as _ from 'lodash';

export default {
  components: {
    DataGrid,
    FilterForm
  },
  data() {
    const filterConfig = [
      { path: 'payeeName', label: 'Payee Name' },
      { path: 'address.city', label: 'City' },
      { path: 'address.state', label: 'State', maxlength: 2 }
    ];

    const filterCriteria = {};
    filterConfig.forEach(config => (filterCriteria[config.path] = ''));

    return {
      columns: [
        { name: 'payeeName' },
        { name: 'address.city', label: 'City' },
        { name: 'address.state', label: 'State' }
      ],
      payees: [],
      filterConfig,
      filterCriteria
    };
  },
  computed: {
    altFilteredPayees() {
      let payees = [...this.$store.getters.payees];
      return payees.filter(payee =>
        Object.entries(this.filterCriteria).every(
          ([path, value]) =>
            value === '' ||
            _.get(payee, path, '')
              .toUpperCase()
              .includes(value.toUpperCase())
        )
      );
    },
    filteredPayees() {
      let payees = [...this.$store.getters.payees];
      const filterKeys = Object.keys(this.filterCriteria);
      payees = payees.filter(payee => {
        let success = true;
        for (let key of filterKeys) {
          if (this.filterCriteria[key] === '') continue;
          if (
            !_.get(payee, key, '')
              .toUpperCase()
              .includes(this.filterCriteria[key].toUpperCase())
          ) {
            success = false;
            break;
          }
        }

        return success;
      });
      return payees;
    }
  },
  methods: {
    handleUpdateFilter(filterCriteria) {
      this.filterCriteria = filterCriteria;
    },
    handleSelectRow(record) {
      this.$router.push(`/payees/details/${record.id}`);
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('updateFilterCriteria', {
      filterCriteria: this.filterCriteria
    });
    next();
  },
  created() {
    const filterCriteria = this.$store.getters.filterCriteria;
    if (! _.isEmpty(filterCriteria)) {
      this.filterCriteria = {...this.filterCriteria, ...filterCriteria};
      this.filterConfig = this.filterConfig.map(config => {
        if(_.has(filterCriteria, config.path)) {
          config.value = filterCriteria[config.path];
        }
        return config;
      })
    }
  }
};
</script>

<style>
</style>
