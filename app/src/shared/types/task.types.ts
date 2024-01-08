import { ePriority } from "../enum/priority.enum";

export type tTask = {
  id: string,
  text: string,
  date: Date,
  priority: keyof typeof ePriority,
}