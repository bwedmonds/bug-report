<template>
  <tbody>
    <tr>
      <th scope="row">
      </th>
      <td>{{bug.title}}</td>
      <td>{{bug.description}}</td>
      <td>{{bug.creator}}</td>
      <td>{{bug.closed}}</td>
      <td>{{bug.createdAt}}</td>
      <td>for closed date later</td>
      <td>
        <router-link :to="{ name: 'bugDetails', params: { id: bug._id}}">
          <button type="button" class="btn btn-info">Get Details</button>
        </router-link>
      </td>
    </tr>
  </tbody>
</template>

<script>
  // import Details from '@/components/Details.vue'


  export default {
    name: " bugList",
    props: ["bug"],
    data() { return {} },
    computed: {},
    methods: {},
    components: {}
  } </script>
<style>

</style>