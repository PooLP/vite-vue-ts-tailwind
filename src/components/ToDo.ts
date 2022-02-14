import { reactive, ref } from 'vue';
import { IToDos } from './IToDo';

const randomId = (): string => {
    return `_${Math.random().toString(35).slice(2, 11)}`;
};

const todos = reactive<IToDos>({
    active: [
        { id: randomId(), value: "Test 1" },
        { id: randomId(), value: "Test 2" },
    ],
    completed: [{ id: randomId(), value: "Test 3" }],
});

const input = ref("");

export default function () {
    return {
        input,
        todos,        
        randomId
    };
}