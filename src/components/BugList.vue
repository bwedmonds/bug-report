<template>
  <tbody>
    <tr :class="[bug.closed ? 'table-success' : 'table-hover']">
      <th scope=" row">{{bug._id}}</th>
      <td>{{bug.title}}</td>
      <td>{{bug.description}}</td>
      <td>{{bug.creator}}</td>
      <td>{{bug.createdAt}}</td>
      <td>{{formatClosed(bug.closed)}}</td>
      <td>add closed time here</td>
      <td>
        <router-link :to="{ name: 'bugDetails', params: { id: bug._id}}">
          <button type="button" class="btn btn-info">Get Details</button>
        </router-link>
      </td>
    </tr>
  </tbody>
</template>

<script>
  export default {
    name: " bugList",
    props: ["bug"],
    data() {
      return {
        filter: false
      }
    },
    computed: {
      bugs() {
        return this.$store.getters.Completed(this.filter)
      }
    },
    methods: {
      formatClosed(status) {
        if (!status) {
          return "Open"
        }
        return "Closed"
      },
      filterCompleted(filter) {
        this.filter = !filter

      }
    },
    components: {}
  } </script>
<style>

</style>