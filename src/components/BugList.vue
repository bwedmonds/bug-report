<template>
  <tbody>
    <tr v-for="bug in details">
      <th scope="row">
        <router-link :to="'/bugs/' + bug._id" @click="getDetailsById">{{bug._id}}</router-link>
      </th>
      <td>{{bug.title}}</td>
      <td>{{bug.description}}</td>
      <td>{{bug.creator}}</td>
      <td>{{bug.closed}}</td>
      <td>{{bug.createdAt}}</td>
      <td>for closed date later</td>
    </tr>
  </tbody>
</template>

<script>
  import Details from '@/components/Details.vue'


  export default {
    name: "bugList",
    props: ["bug"],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style>

</style>