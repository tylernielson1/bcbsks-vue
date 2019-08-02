<template>
  <table class="table table-striped table-hover table-info">
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
      <tr v-for="record in localRecords" :key="record.id" @click="handleRowClick(record)">
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
  created() {
    if (this.$store.getters.hasSortCriteria(this.$route.path)) {
      const { sortField, sortDirection } = this.$store.getters.getSortCriteria(
        this.$route.path
      );
      this.lastSortField = sortField;
      this.lastSortDirection = sortDirection;
      // console.log(`sortField: ${sortField} / sortDirection: ${sortDirection} `);
    }
  },
  methods: {
    handleColumnClick(column) {
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
      this.$store.commit('updateSortCriteria', {
        key: this.$route.path,
        sortField,
        sortDirection
      });
    },
    getClass(column) {
      let header = typeof column === 'object' ? column.name : column;
      if (header === this.lastSortField) {
        return this.lastSortDirection === 'asc' ? 'sort-asc' : 'sort-desc';
      } else {
        return '';
      }
    },
    handleRowClick(record) {
      this.$emit('select-row', record);
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

<style scoped>
th,
td {
  cursor: pointer;
}

.table-info tr:nth-child(odd) {
  background: white;
}

.table-hover.table-info tr:hover {
  background: #007bff;
  color: white;
}

.sort-asc::after {
  content: '⏫';
}

.sort-desc::after {
  content: '⏬';
}
</style>
