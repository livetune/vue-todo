<template>
  <div class="todo">
    <h1>Vue Todo List</h1>
    <input type="text" v-model="input_text" @keyup.enter="add">
    <button @click='add'>add</button>
    <todo-list></todo-list>
    <todo-sel></todo-sel>
  </div>
</template>
<script>
import TodoList from './TodoList.vue'
import TodoSel from './TodoSel.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    TodoList,
    TodoSel
  },
  data () {
    return {
      input_text: ''
    }
  },

  methods: {
    ...mapMutations(['addTodo']),
    add () {
      if (this.input_text === '') {
        return
      }
      this.addTodo(this.input_text)

      this.input_text = ''
    }
  }
}
</script>

<style lang="less">
.todo {
  margin: auto;
  width: 600px;
  font-size: 35px;
  button {
    padding: 10px 20px;
    font-size: 30px;
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    display: inline-block;
  }
}
input {
  font-size: 35px;
}
ul {
  list-style-type: none;
}
</style>
