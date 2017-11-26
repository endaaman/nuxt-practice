export const state = () => ({
  counter: 0,
  memo: {
    items: [],
  }
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setMemoItems(state, items) {
    state.memo.items = items
  },
}
