import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export default new Vuex.Store ({
  state() {
    return{
      appTheme: 'light',
      todosList: [{
        id: '2324234',
        status: 'Active',
        value: 'Вынести мусор'
      },
        {
          id: '143435353',
          status: 'Active',
          value: 'Прочитать книгу'
        },
        {
          id: '213892741',
          status: 'Active',
          value: 'Посмотреть фильм'
        }
      ],
      activeButton: 'all',
      newTodoValue: ''
    }
  },
  mutations: {
    changeThemeColor(state) {
      if(state.appTheme === 'light') {
        state.appTheme = 'dark'
      } else {
        state.appTheme = 'light'
      }
    },
    changeStatus(state, payload) {
      state.todosList.forEach(e => {
        if(e.id === payload) {
          e.status = e.status === 'Active' ? 'Completed' : 'Active'
        }
      })
    },
    madeActive(state, payload) {
      state.activeButton = payload
    },
    createNewTodo(state) {
      if(state.newTodoValue) {
        let id = Math.floor(Math.random()*100000000).toString()
        state.todosList.push({ id: id, status: 'Active', value: state.newTodoValue})
        state.newTodoValue = ''
      }
    },
    deleteTodo(state, payload) {
      let index
      state.todosList.forEach((e, i) => {
        if(e.id === payload) {
          index = i
        }
      })
      state.todosList.splice(index, 1)
    },
    clearCompleted(state) {
      state.todosList.forEach((e, i) => {
        console.log(e.status)
        if(e.status === 'Completed') {
          state.todosList.splice(i, 1)
        }
      })
    }
  },
  getters: {
    activeTodos: state => {
      return state.todosList.filter(todo => todo.status === 'Active')
    }
  }

})