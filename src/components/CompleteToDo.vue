<template>
  <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green" @click="completeTodo()">
    <slot />
  </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ToDoFactory from './ToDo';

export default defineComponent({
  props: {
    todoId: String
  },
  setup(props) {
    const { todos } = ToDoFactory();

    const completeTodo = () => {
      const todo = todos.active.find((todo) => todo.id === props.todoId);
      if (todo) {
        todos.active = todos.active.filter((todo) => todo.id !== props.todoId);
        todos.completed.push(todo);
      }
    };

    return {
      completeTodo
    };
  }
});
</script>