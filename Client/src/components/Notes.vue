<template>
  <div class="notes col-3 justify-content-center">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bug Note</h5>
        <h6 class="card-subtitle mb-2 text-muted">Created by: {{note.creator}}</h6>
        <p class="card-text">{{note.content}}</p>
        <button type="button" class="btn btn-warning" @click="deleteNote">Delete Note</button>
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
      deleteNote() {
        this.$store.dispatch('deleteNote', this.note)
      },

    }
  }
</script>

<style>

</style>