import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      gender: 0,
      birthday: 0,
      board: {}
    }
  },
  mutations: {
    changeGender(state, payload) {
      state.currentUser.gender = payload.currentUser.gender
    },
    changeBirthday(state, payload) {
      state.currentUser.birthday = payload.currentUser.birthday
    },
    changeBoard(state, payload){
      state.currentUser.board = payload.currentUser.board
    },
  },
  actions: {
    setBoardInfo(state, payload) {
      state.commit('changeGender', payload)
      state.commit('changeBirthday', payload)
      state.commit('changeBoard', payload)
    }
  },
  modules: {
  },
  getters: {
    board: state => {
      return state.currentUser.board
    }
  }
})
