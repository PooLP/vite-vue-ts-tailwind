<template>
  <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey" @click="restoreTodo()">
    <slot />
  </button>
</template>

<script lang="ts">

import { defineComponent} from 'vue';
import ToDoFactory from './ToDo';

export default defineComponent({
  props: {
    todoId: String
  },
  setup(props) {
    const { todos } = ToDoFactory();

    const restoreTodo = () => {
      const todo = todos.completed.find((todo) => todo.id === props.todoId);
      if (todo) {
        todos.completed = todos.completed.filter((todo) => todo.id !== props.todoId);
        todos.active.push(todo);
      }
    };

    return {
      restoreTodo
    };
  }
});
</script>