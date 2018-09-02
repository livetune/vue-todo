<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key=todo.id @click="toggleTodo(todo.id)" :class="todo.isCheck?'check':'uncheck'">
        <button @click="removeTodo(todo.id)">x</button>{{todo.text}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(v => !v.isCheck),
  completed: todos => todos.filter(v => v.isCheck)
}

export default {
  name: 'todo-list',
  methods: {
    ...mapMutations(['toggleTodo', 'removeTodo'])
  },
  computed: {
    ...mapState({
      todos: state => {
        return filters[state.visibilty](state.todos)
      }
    })
  }
}
</script>

<style lang="less">
.todo-list {
  text-align: left;
  ul {
    display: inline-block;
    white-space: nowrap;
    .check {
      color: #e0e0e0;
      text-decoration: line-through;
    }
    li {
      margin-top: 5px;
      overflow: hidden;
      width: 500px;
      text-overflow: ellipsis;
    }
    button {
      margin-right: 20px;
    }
  }
}
</style>
