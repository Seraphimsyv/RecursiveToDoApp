import * as React from "react";
import { TaskContentProps } from "../../types";

/**
 * React Component - Rendering the Content of a Task
 * @param {description}: string - Description of the task
 */
const Content : React.FC<TaskContentProps> = ({ description } : TaskContentProps ) => {
  return (
    <>
      <div className="card_content">
        <p>{description}</p>
      </div>
    </>
  )
}

export { Content }