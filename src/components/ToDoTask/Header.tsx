import { Title } from "./Title";
import { TaskHeaderProps} from "../../types";
import { Bar } from "./Bar";

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