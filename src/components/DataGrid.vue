<template>
  <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index" @click="handleColumnClick(column)">
          <span :class="getClass(column)">
            <SortIndicator
              :column="column.name"
              :sort-field="lastSortField"
              :sort-direction="lastSortDirection"
            />
            &nbsp;
            {{ renderColumn(column) }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody v-if="records">
      <tr v-for="record in localRecords" :key="record.id">
        <td v-for="(column, index) in columns" :key="index">{{ getValue(record, column) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import * as _ from 'lodash';
import SortIndicator from './SortIndicator';

export default {
  components: {
    SortIndicator
  },
  props: {
    records: Array,
    columns: Array
  },
  data() {
    return {
      lastSortField: '',
      lastSortDirection: ''
      // localRecords: [...this.records]
    };
  },
  computed: {
    localRecords() {
      return _.orderBy(
        this.records,
        this.lastSortField,
        this.lastSortDirection
      );
    }
  },
  methods: {
    getClass(column) {
      let header = typeof column === 'object' ? column.name : column;
      if (header === this.lastSortField) {
        return this.lastSortDirection === 'asc' ? 'sort-asc' : 'sort-desc';
      } else {
        return '';
      }
    },
    handleColumnClick(column) {
      console.log('You clicked on ', column);
      let sortField = typeof column === 'object' ? column.name : column;
      let sortDirection = 'asc';
      if (
        this.lastSortField === sortField &&
        this.lastSortDirection === 'asc'
      ) {
        sortDirection = 'desc';
      }

      this.lastSortField = sortField;
      this.lastSortDirection = sortDirection;
    },
    getValue(record, column) {
      let path = '';
      if (typeof column === 'object') {
        path = column.name;
      } else {
        path = column;
      }

      return _.get(record, path);
    },
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
th {
  cursor: pointer;
}

p {
  font-family: Courier New
}

.sort-asc::after {
  content: '⏫'
}

.sort-desc::after {
  content: '⏬'
}
</style>
