import { Dispatch, SetStateAction } from "react"
import { Task } from "../types";

export class TaskService {
  /**
   * Sending a request to get data to update the status
   * @param callback Status update function
   */
  static update( callback: ( data : Task[] ) => void, parentId?: number ) : void {
    fetch( parentId ? `/tasks/${parentId}` : "/tasks" )
    .then( res => res.json() )
    .then( res => callback(res) );
  }
  /**
   * Sending a request to create a new task
   * @param body New task data
   * @param callback Status update function
   */
  static upload( body: {
    title: string,
    description: string,
    status: number,
    parentId?: number
  }, callback: Dispatch<SetStateAction<Task[]>> ) : void {
    fetch( "/tasks/create", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then( res => TaskService.update( callback, body.parentId ) );
  }
  /**
   * Sending a request to delete a task
   * @param id Task ID
   * @param callback Status update function
   */
  static delete( id: number, callback: Dispatch<SetStateAction<Task[]>> ) : void {
    fetch( `/tasks/${id}`, { method: 'DELETE' } )
    .then( res => this.update( callback ) );
  }
  /**
   * Sending a request to change the display position of a task
   * @param body Task data to be moved
   * @param callback Status update function
   */
  static swapp( body: { id: number, moveTo: 0 | 1 }, callback: Dispatch<SetStateAction<Task[]>> ) : void {
    fetch( "/tasks/swapp", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then( res => this.update( callback ) );
  }
}