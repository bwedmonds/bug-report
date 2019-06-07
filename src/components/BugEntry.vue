<template>
  <div>
    <form @submit.prevent="createBug" @reset="onReset" v-if="show">
      <div id="input-group-1" label="" label-for="input-1">
        <input id="input-1" v-model="bug.title" type="text" required placeholder="Enter short bug type">
        </input>
      </div>

      <div id="input-group-2" label="Bug Details" label-for="input-2">
        <input id="input-2" type="text" v-model="bug.description" required placeholder="Bug details"></input>
      </div>

      <div id="input-group-3" label="Created by:" label-for="input-3">
        <input id="input-3" type="text" v-model="bug.creator" required placeholder="Your name"></input>
      </div>

      <button type="submit" variant="primary">Submit</button>
      <button type="reset" variant="danger">Reset</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "bug",
    data() {
      return {
        bug: {
          title: '',
          description: '',
          creator: '',
        },
        show: true
      }
    },
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.bug)
      },

      onReset(evt) {
        evt.preventDefault()
        // Reset form values
        this.bug.title = ''
        this.bug.description = ''
        this.bug.creator = ''
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