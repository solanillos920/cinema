import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listeFavoris:[],
  },
  mutations: {
    ADD_LISTE(state, newTask){
      const index = state.taskList.length +1
      state.taskList.push({
        id: index,
        task: newTask
      })
    },
  },
  actions: {

  }
})
