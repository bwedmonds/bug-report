<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link>
  </div> -->
  <div class="bugDetails container-fluid">
    <div class="row">
      <div class="col-12">
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
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import BugDetails from '@/components/BugDetails.vue'

  export default {
    name: 'bugDetails',
    props: ["id"],
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getBugById', this.id)
    },
    computed: {
      bug() {
        return this.$store.state.bug
      }
    },
    components: {
    }
  }
</script>