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
  },
  mutations: {
    setBug(state, data) {
      state.bug = data
    },
    // setBugs(state, data) {
    //   state.buglist = data
    // }
  },
  actions: {
    async createBug({ commit, dispatch }, data) {
      try {
        let res = await _api.post('bugs', data)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
