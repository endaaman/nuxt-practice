import axios from 'axios'

export const state = () => ({
  authorized: false,
  memos: [],
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setMemos(state, items) {
    state.memos = items
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
  },
  async fetchMemos({ commit, getters }) {
    if (getters.hasMemos) {
      return
    }
    const { data } = await axios.get('https://api.endaaman.me/memos')
    data.reverse()
    commit('setMemos', data)
  },
}

export const getters = {
  hasMemos(state) {
    return state.memos.length > 0
  },
  findMemo(state) {
    return (slug) => {
      return state.memos.find(memo => memo.slug === slug)
    }
  }
}
