export interface IToDo {
    id: string;
    value: string;
}
export interface IToDos {
    active: IToDo[];
    completed: IToDo[];
}