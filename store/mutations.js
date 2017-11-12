const mutations = {
  increment(state) {
    state.counter++
  },
  setMd(state, md) {
    console.log('aa')
    state.md = md
  }
}

export default mutations
