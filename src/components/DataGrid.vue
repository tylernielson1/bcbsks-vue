<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ renderColumn(column) }}</th>
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
</template>

<script>
import * as _ from 'lodash';

export default {
  props: {
    records: Array,
    columns: Array
  },
  methods: {
    renderColumn(column) {
      // return _.startCase(column);
      // return _.last(_.startCase(column).split(' '));
      if (typeof column === 'object') {
        if (_.has(column, 'label')) {
          return column.label;
        } else {
          return _.startCase(column.name);
        }
      } else {
        return _.startCase(column);
      }
    }
  }
};
</script>

<style>
</style>
