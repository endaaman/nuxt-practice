import axios from 'axios'
import cookie from 'cookie'

async function sleep(ms = 3000) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}

export const state = () => ({
  authorized: false,
  memos: [],
  token: null,
})

export const mutations = {
  setMemos(state, items) {
    state.memos = items
  },
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    const cookies = cookie.parse(req.headers.cookie)
    const { token } = cookies
    if (token) {
      commit('setToken', cookies.token)
    }
  },
  async fetchMemos({ commit, getters }) {
    if (getters.hasMemos) {
      return
    }
    const { data } = await axios.get('https://api.endaaman.me/memos')
    data.reverse()
    commit('setMemos', data)
  },
  async login({ getters, commit }, { password }) {
    let error = null
    try {
      const { data: { token } } = await getters.api.post('/sessions', { password })
      commit('setToken', token)
    } catch (e) {
      error = e
    }
    return { error }
  }
}

export const getters = {
  api({ token }) {
    const headers = {}
    if (token) {
      headers['Authorization'] = 'Bearer ' + token
    }
    return axios.create({
      baseURL: process.env.apiRoot,
      headers,
    })
  },
  hasMemos(state) {
    return state.memos.length > 0
  },
  findMemo(state) {
    return (slug) => {
      return state.memos.find(memo => memo.slug === slug)
    }
  }
}
