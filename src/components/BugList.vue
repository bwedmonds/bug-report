<template>
  <tbody>
    <tr>
      <th scope="row">{{bug._id}}</th>
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