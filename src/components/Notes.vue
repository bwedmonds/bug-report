<template>

</template>

<script>
  export default {
    name: "notes",
    props: ["note"],
    data() {
      return {
        note: {
          title: '',
          content: '',
          creator: '',
        },
        show: true
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes
      }
    },
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.bug)
      },

    }
  }
</script>

<style>

</style>