import { Task } from "../types";
import { replaceTasks } from "../utils/replaceTasks";

export class TaskManager {
  
  static data : Task[] = [];
  
  public static Load() : Task[] {
    return TaskManager.data;
  }

  public static Upload(task : Task) {
    TaskManager.data.push(task);
  }

  public static RecursiveDelete(parentId : number) {
    for(let i = 0; i < TaskManager.data.length; i++) {
      if(TaskManager.data[i].parentId === parentId) {
        TaskManager.RecursiveDelete(TaskManager.data[i].id);
        TaskManager.data.splice(i, 1);
      }
    }
  }

  public static Delete(task_id: number) {
    if(TaskManager.data.length > 0) {
      for(let i = 0; i < TaskManager.data.length; i++) {
        if(TaskManager.data[i].id === task_id) {
          TaskManager.RecursiveDelete(task_id);
          TaskManager.data.splice(i, 1);
        }
      }
    }
  }

  public static Move(task: Task, moveTo: "up" | "down", parentId?: number) {
    this.data = replaceTasks(TaskManager.data, task, moveTo, parentId)
  }
}