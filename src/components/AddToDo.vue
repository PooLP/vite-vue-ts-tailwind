<template>
  <div class="flex mt-4">
    <input
      placeholder="Add Todo"
      class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      v-model="input"
      @keyup="handleEnter"
    />
    <button
      class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      @click="handleMouse"
    >Add</button>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import ToDoFactory from './ToDo';

export default defineComponent({
  setup() {

    const { input, todos, randomId } = ToDoFactory();

    const addTodo = () => {
      if (input.value) {
        todos.active.push({ id: randomId(), value: input.value });
        input.value = "";
      }
    };

    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        addTodo();
      }
    };

    const handleMouse = (event: MouseEvent) => {
      if (event) {
        addTodo();
      }
    };
    
    return {
      input,
      handleEnter,
      handleMouse
    };
  }
});
</script>