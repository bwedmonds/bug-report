<template>
  <div class="notes">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bug Note</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{note.creator}}</h6>
        <p class="card-text">{{note.content}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'notes',
    props: ['note'],
    data() {
      return {}
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      // createBug() {
      //   this.$store.dispatch('createBug', this.bug)
      // },

    }
  }
</script>

<style>

</style>