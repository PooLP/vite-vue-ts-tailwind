<template>
  <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    <div class="mb-4">
      <h1 class="text-grey-darkest">Vue 3 TODO App</h1>

      <AddToDo />
    </div>
    <ul>
      <li class="flex mb-4 items-center" v-for="todo in todos.active" :key="todo.id">
        <span class="w-full text-grey-darkest">{{ todo.value }}</span>
        <RemoveToDo :todo-id="todo.id" :from-active="true">Remove</RemoveToDo>
        <CompleteToDo :todo-id="todo.id">Done</CompleteToDo>
      </li>
    </ul>

    <h2 class="subheader" v-if="todos.completed.length > 0">Completed</h2>
    <ul>
      <li class="flex mb-4 items-center" v-for="todo in todos.completed" :key="todo.id">
        <span class="w-full line-through text-green">{{ todo.value }}</span>
        <RestoreToDo :todo-id="todo.id">Restore</RestoreToDo>
        <RemoveToDo :todo-id="todo.id" :from-active="false">Remove</RemoveToDo>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ToDoFactory from './ToDo';
import AddToDo from './AddToDo.vue';
import RemoveToDo from './RemoveToDo.vue';
import RestoreToDo from './RestoreToDo.vue';
import CompleteToDo from './CompleteToDo.vue';

export default defineComponent({
  components: {
    AddToDo: AddToDo,
    RemoveToDo: RemoveToDo,
    RestoreToDo: RestoreToDo,
    CompleteToDo: CompleteToDo
  },
  setup() {
    const { todos } = ToDoFactory();

    return {
      todos
    };
  },
});
</script>
<style>
</style>