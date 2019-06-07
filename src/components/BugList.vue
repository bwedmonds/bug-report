<template>
  <div class="bug-list table-responsive">
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Bug</th>
          <th scope="col">Description</th>
          <th scope="col">Created By</th>
          <th scope="col">Open/Closed</th>
          <th scope="col">Created On:</th>
          <th scope="col">Closed On:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: "bugList",
    props: [],
    data() {
      return {}
    },
    computed: {},
    methods: {

    },
    components: {}
  }
</script>


<style>

</style>