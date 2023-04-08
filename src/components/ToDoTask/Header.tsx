import { Title } from "./Title";
import { TaskHeaderProps} from "../../types";
import { Bar } from "./Bar";

/**
 * React Component - Rendering the Top Component of a Task including
 * <Title />, <Bar />
 * @param {title}: TaskTitleProps - Props for Title component
 * @param {bar}: TaskBarProps - Props for Bar component
 */
const Header : React.FC<TaskHeaderProps> = ({ title, bar } : TaskHeaderProps) => {
  return (
    <>
      <div className="card_header">
        <Title
          text={title.text}
          status={title.status}
        />
        <Bar
          id={bar.id}
          subTask={bar.subTask}
          index={bar.index}
          lengthList={bar.lengthList}
          handlerDelete={bar.handlerDelete}
          handleMoveUp={bar.handleMoveUp}
          handleMoveDown={bar.handleMoveDown}
        />
      </div>
    </>
  )
}

export { Header }