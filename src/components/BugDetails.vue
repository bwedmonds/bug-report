<template>
  <div class="card">
    <h5 class="card-header">{{bug.title}}</h5>
    <div class="card-body">
      <h5 class="card-title">{{bug.description}}</h5>
      <p class="card-text">{{bug.creator}}</p>
      <a href="#" class="btn btn-primary">Add note</a>
      <a href="#" class="btn btn-primary">Created by</a>
      <!-- add form syntax for notes here  -->
    </div>
  </div>

</template>

<script>
  export default {
    name: "bugDetails",
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