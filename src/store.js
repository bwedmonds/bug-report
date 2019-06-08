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
    details: {},
  },
  mutations: {
    setBug(state, data) {
      state.bug = data
    },
    setBugs(state, data) {
      state.bugs = data
    },
    setDetails(state, data) {
      state.details = data
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
    async getDetailsById({ commit, dispatch }, id) {
      try {
        let res = await _api.get('bugs/:id')
        commit('setDetails', res.data.results._id)
        console.log(res.data.results._id)
        router.push({ name: 'details', params: { id: res.data.results._id } })
      }
      catch (e) {
        console.error(e)
      }
    },
  }
})
