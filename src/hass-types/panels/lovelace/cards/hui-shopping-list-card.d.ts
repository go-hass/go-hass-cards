import { HuiTodoListCard } from "./hui-todo-list-card";
declare class HuiShoppingListCard extends HuiTodoListCard {
    checkConfig(): void;
    getEntityId(): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-shopping-list-card": HuiShoppingListCard;
    }
}
export {};
