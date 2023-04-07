import * as React from "react";
import { TaskContentProps } from "../../types";

/**
 * React Component - Отрисовка контента задачи
 * @param {description} : string - Описание задачи
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