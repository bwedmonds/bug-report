import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

const _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/bdawgtest'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bug: {},
    bugs: [],
    notes: [],
  },
  mutations: {
    setBug(state, data) {
      state.bug = data
    },
    setBugs(state, data) {
      state.bugs = data
    },
    setNotes(state, data) {
      state.notes = data
    }
  },
  actions: {
    async createBug({ commit, dispatch }, data) {
      try {
        let res = await _api.post('bugs', data)
        dispatch('getBugs')
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBugs({ commit, dispatch }) {
      try {
        let res = await _api.get('bugs')
        commit('setBugs', res.data.results)
      }
      catch (e) {
        console.error(e)
      }
    },
    async getBugById({ commit, dispatch }, id) {
      try {
        let res = await _api.get('bugs/' + id)
        commit('setBug', res.data.results)
        console.log(res.data.results)
      }
      catch (e) {
        console.error(e)
      }
    },
    async completeBug({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('bugs/' + id)
        commit('setBug', res.data.results)
        console.log(res.data.results)
      }
      catch (e) {
        console.error(e)
      }
    },
    // Note stuff starts here
    async createNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('bugs/' + payload.bug + '/notes', payload)
        dispatch('getNotes', payload.bug)
        console.log('successfully added note', res)
      }
      catch (e) {
        console.error(e)
      }
    },
    async getNotes({ commit, dispatch }, id) {
      try {
        let res = await _api.get('bugs/' + id + '/notes')
        dispatch('setNotes', res.data.results)
        console.log('successfully added note', res)
      }
      catch (e) {
        console.error(e)
      }
    },
  },
  getters: {
    Completed: (state) => (status) => {
      if (status) {
        return state.bugs.filter(b => b.closed == status)
      }
      return state.bugs
    }
  }
})
