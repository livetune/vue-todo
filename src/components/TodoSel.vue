<template>
  <div class="todo-sel">

    <button @click='changeType("all")'>ALL</button>
    <button @click='changeType("active")'>ACTIVE</button>
    <button @click='changeType("completed")'>COMPLETED</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['changeType'])
  }
}
</script>

<style lang="less">
.todo-sel {
  button {
    background: skyblue;
    color: #fff;
  }
}
</style>
