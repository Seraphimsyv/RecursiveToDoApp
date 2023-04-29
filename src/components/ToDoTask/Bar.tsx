import * as React from "react";
import { TaskService } from "../../service/TaskService";
import { TaskBarProps } from "../../types";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

/**
 * React Component - Rendering a Bar for the ToDoTask Component
 * @param id ID of the task
 * @param place Place of the task in the child list
 * @param lengthList Length of the child list
 * @param handlerUpdate Data update function.
 */
const Bar : React.FC<TaskBarProps> = ( props : TaskBarProps ) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const HandlerDelete = () => {
    TaskService.delete( props.id, props.handlerUpdate );
  }
  const HandlerMove = ( moveTo: 0 | 1 ) => {
    TaskService.swapp( { id: props.id, moveTo: moveTo }, props.handlerUpdate );
  }
  const HandlerClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const HandlerClose = () => {
    setAnchorEl(null);  
  };

  return (
    <>
      <div className="card_bar">
        <IconButton
          onClick={() => HandlerMove(0)}
          disabled={props.place === 0 || props.lengthList === 1}
        >
          <VerticalAlignTopIcon />
        </IconButton>
        <IconButton
          onClick={() => HandlerMove(1)}
          disabled={props.place === props.lengthList || props.lengthList === 1}
        >
          <VerticalAlignBottomIcon />
        </IconButton>
        <IconButton
          aria-label="more"
          onClick={HandlerClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={HandlerClose}
        >
          <MenuItem onClick={() => {
            HandlerDelete();
            HandlerClose();
          }}>Delete</MenuItem>
        </Menu>
      </div>
    </>
  )
}

export { Bar }