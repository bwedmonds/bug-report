<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1><img alt="Vue logo" src="../assets/logo.png" height="25vh">ermin <img alt="Vue logo"
            src="../assets/logo.png" height="25vh">anisher</h1>
      </div>
    </div>
    <div class="row">
      <bug-entry />
    </div>
    <div class="row">
      <!-- <bug-list /> -->
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
              <th scope="col">Details</th>
            </tr>
          </thead>
          <bug-list v-for="bug in bugs" :key="bug._id" :bug="bug"></bug-list>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugEntry from '@/components/BugEntry.vue'
  import BugList from '@/components/BugList.vue'

  export default {
    name: 'home',
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    components: {
      BugEntry,
      BugList
    }
  }
</script>