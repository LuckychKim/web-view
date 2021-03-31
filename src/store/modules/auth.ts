import { Module } from 'vuex'

interface AuthState {
  auth: boolean
}

const auth: Module<AuthState, any> = {
  namespaced: true,
  state: {
    auth: false
  },
  getters: {
    auth: state => state.auth
  },
  mutations: {
    SET_AUTH (state: AuthState, auth: boolean) {
      state.auth = auth
    }
  },
  actions: {
    async login ({ commit }) {
      await commit('SET_AUTH', true)
    },
    async logout ({ commit }) {
      await commit('SET_AUTH', false)
    }
  }
}

export default auth
