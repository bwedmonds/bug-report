<template>
  <div class="details container-fluid">
    <div class="row">
      <div class="col-12 bug-details">
        <!-- template goes here -->
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugDetails from '@/components/BugDetails.vue'

  export default {
    name: 'details',
    mounted() {
      this.$store.dispatch('getDetails')
    },
    computed: {
      // bugs() {
      //   return this.$store.state.bugs
    },
    components: {
      BugDetails
    }
  }
</script>