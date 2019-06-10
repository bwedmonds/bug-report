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
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="!bug.closed">
        <button @click="completeBug" class="btn btn-warning">Vermin Vanished</button>
      </div>
    </div>
    <div class="row bg-light justify-content-center" v-if="!bug.closed">
      <form @submit.prevent="createNote" class="form-inline">
        <input type="text" placeholder="Add a note" v-model="addedNote.content" class="form-control mx-1">
        <input type="text" placeholder="Created By" v-model="addedNote.creator" class="form-control mx-1">
        <button type="submit" class="btn btn-primary">Add Note</button>
      </form>
    </div>
    <div class="row">
      <!-- add edit bug here  -->
    </div>
    <div class="row">
      <!-- add form syntax for notes here  -->
      <notes v-for="note in notes" :note="note"></notes>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import Notes from '@/components/Notes.vue'

  export default {
    name: 'bugDetails',
    props: ["id"],
    data() {
      return {
        addedNote: {
          content: '',
          creator: '',
          bug: this.id
        }
      }
    },
    mounted() {
      this.$store.dispatch('getBugById', this.id)
    },
    methods: {
      completeBug() {
        this.$store.dispatch('completeBug', this.id)
      },
      createNote() {
        this.$store.dispatch('createNote', this.note)
      },
    },
    computed: {
      bug() {
        return this.$store.state.bug
      },
      notes() {
        return this.$store.state.notes
      }
    },
    components: {
      // Notes
    }
  }
</script>