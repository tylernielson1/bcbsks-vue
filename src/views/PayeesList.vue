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
      let payees = [...this.payees];
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
      let payees = [...this.payees];
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
      console.log('PayeesList filter criteria: ', filterCriteria);
      this.filterCriteria = filterCriteria;
    },
    handleSelectRow(record) {
      this.$router.push(`/payees/details/${record.id}`)
    }
  },
  created() {
    dao.queryPayees().then(payees => (this.payees = payees));
  }
};
</script>

<style>
</style>
