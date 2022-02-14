<template>
  <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" @click="removeTodo()">
    <slot />
  </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ToDoFactory from './ToDo';

export default defineComponent({
  props: {
    todoId: String,
    fromActive: Boolean
  },
  setup(props) {
    const { todos } = ToDoFactory();

    const removeTodo = () => {
      if (props.fromActive) {
        todos.active = todos.active.filter((todo) => todo.id !== props.todoId);
      } else {
        todos.completed = todos.completed.filter((todo) => todo.id !== props.todoId);
      }
    };

    return {
      removeTodo
    };
  }
});
</script>