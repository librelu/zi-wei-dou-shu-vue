import Vue from 'vue'
import Vuex from 'vuex'

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
      tianBoard: {},
      yearBoard: {},
      tenYearsBoard: {},
      monthBoard : {},
      dateBoard : {},
    }
  },
  mutations: {
    modifyBoardType(state, payload) {
      state.currentUser.boardType = payload.boardType
    },
    modifyGender(state, gender) {
      state.currentUser.gender = gender
    },
    modifyBirthday(state, payload) {
      state.currentUser.birthYear =  payload.birthYear
      state.currentUser.birthMonth =  payload.birthMonth
      state.currentUser.birthDate = payload.birthDate
      state.currentUser.birthHour =  payload.birthHour
    },
    modifyTianBoard(state, payload) {
      state.currentUser.tianBoard = payload
    },
    modifyYearBoard(state, payload) {
      state.currentUser.yearBoard = payload
    },
    modifyMonthBoard(state, payload) {
      state.currentUser.monthBoard = payload
    },
    modifyDateBoard(state, payload) {
      state.currentUser.dateBoard = payload
    },
    modifyTenYearsBoard(state, payload) {
      state.currentUser.tenYearsBoard = payload
    },
  },
  actions: {
    setBoardType(state, payload) {
      return state.commit('modifyBoardType', {
        boardType: payload.boardType
      })
    },
    setTianBoard(state, payload) {
      return Vue.axios.get('board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        timezone: (new Date()).getTimezoneOffset(),
      }}).then((resp)=>{
        state.commit('modifyTianBoard', resp.data)
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    }, 
    setYearBoard(state, payload) {
      return Vue.axios.get('year-board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        targetYear: payload.targetYear,
        timezone: (new Date()).getTimezoneOffset(),
        index: payload.index -1,
      }}).then((resp)=>{
        state.commit('modifyYearBoard', resp.data)
      }).catch((err) => {
        console.log(err)
        state.error = err
      })
    },
    setDateBoard(state, payload) {
      return Vue.axios.get('date-board', {params: {
        gender: payload.gender,
        birthYear: payload.birthYear,
        birthMonth: payload.birthMonth,
        birthDate: payload.birthDate,
        birthHour: payload.birthHour,
        targetYear: payload.targetYear,
        targetMonth: payload.targetMonth,
        targetDate: payload.targetDate,
        timezone: (new Date()).getTimezoneOffset(),
        index: payload.index -1,
      }}).then((resp)=>{
        state.commit('modifyDateBoard', resp.data)
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
        targetYear: payload.targetYear,
        targetMonth: payload.targetMonth,
        timezone: (new Date()).getTimezoneOffset(),
        index: payload.index -1,
      }}).then((resp)=>{
        state.commit('modifyMonthBoard', resp.data)
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
        }).catch((err) => {
          console.log(err)
          state.error = err
        })
    },
    async setBoardInfo(state, payload) {
      let dateNow = new Date
      payload.targetYear = dateNow.getFullYear()
      payload.targetMonth = dateNow.getMonth() + 1
      payload.targetDate = dateNow.getDate()
      payload.index = 0
      await state.commit('modifyGender', payload.gender)
      await state.commit('modifyBirthday', payload)
      await state.dispatch('setTianBoard', payload)
      await state.dispatch('setYearBoard', payload)
      await state.dispatch('setDateBoard', payload)
      await state.dispatch('setMonthBoard', payload)
      await state.dispatch('setTenYearsBoard', payload)
      return 
    },
  },
  modules: {
  },
  getters: {
    boardType: state => {
      return state.currentUser.boardType
    },
    tianBoard: state => {
      return state.currentUser.tianBoard
    },
    yearBoard: state => {
      return state.currentUser.yearBoard
    },
    monthBoard: state => {
      return state.currentUser.monthBoard
    },
    tenYearsBoard: state => {
      return state.currentUser.tenYearsBoard
    },
    dateBoard: state => {
      return state.currentUser.dateBoard
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
        date: new Date(state.currentUser.birthYear, state.currentUser.birthMonth - 1, state.currentUser.birthDate, state.currentUser.birthHour),
      }
    },
  }
})
