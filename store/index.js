import axios from 'axios'
import cookieParser from 'cookie'
import browserCookie from 'browser-cookies'

function isClient() {
  return typeof window !== 'undefined'
}

async function sleep(ms = 3000) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}

export const state = () => ({
  authorized: false,
  articles: [],
  token: null,
  isClient: true,
})


export const mutations = {
  setArticles(state, items) {
    state.articles = items
  },
  setToken(state, token) {
    state.token = token
    if (isClient()) {
      browserCookie.set('token', token, { expires: 365 })
    }
  },
  clearToken(state) {
    state.token = null
    if (isClient()) {
      browserCookie.erase('token')
    }
  },
  setAuthorized(state, authorized) {
    state.authorized = authorized
  }
}


export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    if (!req.headers.cookie) {
      return
    }
    const { token } = cookieParser.parse(req.headers.cookie)
    if (token) {
      commit('setToken', token)
      await dispatch('checkAuth')
    }
  },
  async fetchArticles({ commit, getters }) {
    if (getters.hasArticles) {
      return
    }
    const { data } = await axios.get('https://api.endaaman.me/memos')
    data.reverse()
    commit('setArticles', data)
  },
  async login({ getters, commit }, { password }) {
    let error = null
    try {
      const { data: { token } } = await getters.api.post('/sessions', { password })
      commit('setToken', token)
      commit('setAuthorized', true)
    } catch (e) {
      error = e
    }
    return { error }
  },
  async checkAuth({ getters, commit, token }) {
    let error = null
    try {
      await getters.api.get('/sessions')
    } catch (e) {
      error = e
      commit('clearToken')
    }
    commit('setAuthorized', !error)
  },
  async logout({ getters, commit }) {
    commit('clearToken')
    commit('setAuthorized', false)
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
  hasArticles(state) {
    return state.articles.length > 0
  },
  findArticle(state) {
    return (slug) => {
      return state.articles.find(article => article.slug === slug)
    }
  }
}
