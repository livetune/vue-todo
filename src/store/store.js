import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const initData = JSON.parse(window.localStorage.getItem('todo'))
export default new Vuex.Store({
  state: {
    todos: initData.todos || [],
    ids: initData.ids || 0,
    visibilty: 'all'
  },
  plugins: [
    store => {
      store.subscribe((mutations, state) => {
        window.localStorage.setItem('todo', JSON.stringify(state))
      })
    }
  ],
  mutations: {
    addTodo: (state, payload) => {
      const todoData = {
        id: ++state.ids,
        text: payload,
        isCheck: false
      }
      state.todos = [...state.todos, todoData]
    },
    toggleTodo: (state, id) => {
      state.todos = state.todos.map(v => {
        if (v.id === id) {
          v.isCheck = !v.isCheck
        }
        return v
      })
    },
    changeType: (state, payload) => {
      state.visibilty = payload
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter(v => v.id !== id)
    }
  }
})
