<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1><img alt="Vue logo" src="../assets/logo.png" height="25vh">ermin <img alt="Vue logo"
            src="../assets/logo.png" height="25vh">anisher</h1>
      </div>
    </div>
    <div class="row">
      <!-- //bug list goes here -->
      <bug-entry />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugEntry from '@/components/BugEntry.vue'

  export default {
    name: 'home',
    components: {
      BugEntry
    }
  }
</script>