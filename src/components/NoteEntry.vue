<template>
  <div>
    <form @submit.prevent="createNote" @reset="onReset" v-if="show">
      <div id="input-group-1" label="Note Creator" label-for="input-1">
        <input id="input-1" v-model="note.creator" type="text" required placeholder="Your name">
        </input>
      </div>

      <div id="input-group-2" label="Note Content" label-for="input-2">
        <input id="input-2" type="text" v-model="note.content" required placeholder="Note details"></input>
      </div>
      <button type="submit" variant="primary">Submit</button>
      <button type="reset" variant="danger">Reset</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "note",
    data() {
      return {
        note: {
          content: '',
          creator: '',
          flagged: 'pending',
          bug: this.$route.params.id
        },
        show: true
      }
    },
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.note)
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset form values
        this.note.content = ''
        this.note.creator = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>