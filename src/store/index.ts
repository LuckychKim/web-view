import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['auth']
    })
  ],
  modules: {
    auth
  }
})

export default store
