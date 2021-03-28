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
      tenYearsBoard: {},
      monthBoard : {},
    }
  },
  mutations: {
    modifyGender(state, gender) {
      state.currentUser.gender = gender
    },
    modifyBirthday(state, payload) {
      state.currentUser.birthYear =  payload.birthYear
      state.currentUser.birthMonth =  payload.birthMonth
      state.currentUser.birthDate = payload.birthDate
      state.currentUser.birthHour =  payload.birthHour
    },
    modifyOriginBoard(state, payload) {
      state.currentUser.originBoard = payload
    },
    modifyYearBoard(state, payload) {
      state.currentUser.yearBoard = payload
    },
    modifyMonthBoard(state, payload) {
      state.currentUser.monthBoard = payload
    },
    modifyTenYearsBoard(state, payload) {
      state.currentUser.tenYearsBoard = payload
    },
    modifyBoard(state, payload) {
      state.currentUser.board = payload.board
      state.currentUser.boardType = payload.boardType
    },
  },
  actions: {
    setBoardInfo(state, payload) {
      state.commit('modifyGender', payload.gender)
      state.commit('modifyBirthday', payload)
      return Vue.axios.get('board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        timezone: (new Date()).getTimezoneOffset(),
      }}).then((resp)=>{
        state.commit('modifyOriginBoard', resp.data)
        state.commit('modifyBoard', {
          board: resp.data,
          boardType: BoardType.OriginBoard,
      })
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    },
    setOriginBoard(state) {
      state.commit('modifyBoard', {
        board: this.getters.originBoard,
        boardType: BoardType.OriginBoard,
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
        state.commit('modifyYearBoard', resp.data)
        state.commit('modifyBoard', {
          board: resp.data,
          boardType: BoardType.YearBoard,
      })
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    },
    setMonthBoard(state, payload) {
      return Vue.axios.get('month-board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        timezone: (new Date()).getTimezoneOffset(),
        index: payload.index -1,
      }}).then((resp)=>{
        state.commit('modifyMonthBoard', resp.data)
        state.commit('modifyBoard', {
          board: resp.data,
          boardType: BoardType.MonthBoard,
      })
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    },
    setTenYearsBoard(state, payload) {
      return Vue.axios.get('ten-board', {params: {
          gender: payload.gender,
          birthYear: payload.birthYear,
          birthMonth: payload.birthMonth,
          birthDate: payload.birthDate,
          birthHour: payload.birthHour,
          timezone: (new Date()).getTimezoneOffset(),
          index: payload.index -1,
        }}).then((resp)=>{
          state.commit('modifyTenYearsBoard', resp.data)
          state.commit('modifyBoard', {
            board: resp.data,
            boardType: BoardType.TenYearsBoard,
        })
        }).catch((err) => {
          console.log(err)
          state.error = err
        })
    },
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
