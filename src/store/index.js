import Vue from 'vue'
import Vuex from 'vuex'
import BoardType from '@/enum/boardType'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: "",
    currentUser: {
      gender: 0,
      birthYear: 0,
      birthMonth: 0,
      birthDate: 0,
      birthHour: 0,
      boardType: "",
      board: {},
      originBoard: {},
      yearBoard: {},
    }
  },
  mutations: {
    changeGender(state, gender) {
      state.currentUser.gender = gender
    },
    changeBirthday(state, payload) {
      state.currentUser.birthYear =  payload.birthYear
      state.currentUser.birthMonth =  payload.birthMonth
      state.currentUser.birthDate = payload.birthDate
      state.currentUser.birthHour =  payload.birthHour
    },
    changeOriginBoard(state, payload) {
        state.currentUser.originBoard = payload
    },
    changeYearBoard(state, payload) {
      state.currentUser.yearBoard = payload
  },
    changeBoard(state, payload){
      state.currentUser.board = payload.board
      state.currentUser.boardType = payload.boardType
    },
  },
  actions: {
    setBoardInfo(state, payload) {
      state.commit('changeGender', payload.gender)
      state.commit('changeBirthday', payload)
      return Vue.axios.get('board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        timezone: (new Date()).getTimezoneOffset(),
      }}).then((resp)=>{
        state.commit('changeOriginBoard', resp.data)
        state.commit('changeBoard', {
          board: resp.data,
          boardType: BoardType.originBoard,
      })
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    },
    setOriginBoard(state) {
      state.commit('changeBoard', {
        board: this.getters.originBoard,
        boardType: BoardType.originBoard,
      })
    }, 
    setYearBoard(state, payload) {
      return Vue.axios.get('year-board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        timezone: (new Date()).getTimezoneOffset(),
        index: payload.index -1,
      }}).then((resp)=>{
        state.commit('changeYearBoard', resp.data)
        state.commit('changeBoard', {
          board: resp.data,
          boardType: BoardType.yearBoard,
      })
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    }
  },
  modules: {
  },
  getters: {
    boardType: state=>{
      return state.currentUser.boardType
    },
    originBoard: state=>{
      return state.currentUser.originBoard
    },
    yearBoard: state=>{
      return state.currentUser.yearBoard
    },
    gender: state => {
      return state.currentUser.gender
    },
    birthday: state => {
      return {
        birthYear: state.currentUser.birthYear,
        birthMonth: state.currentUser.birthMonth,
        birthDate: state.currentUser.birthDate,
        birthHour: state.currentUser.birthHour,
      }
    },
    board: state => {
      return state.currentUser.board
    }
  }
})
