import type { TodoItem } from "../../data/todo";
export interface TodoItemEditDialogParams {
    entity: string;
    item?: TodoItem;
}
export declare const loadTodoItemEditDialog: () => Promise<typeof import("./dialog-todo-item-editor")>;
export declare const showTodoItemEditDialog: (element: HTMLElement, detailParams: TodoItemEditDialogParams) => void;
