
export interface IQuest {
    id ?: number;
    name ?: string;
    status ?: string | "Todo" | "In Progress" | "Complete";
}