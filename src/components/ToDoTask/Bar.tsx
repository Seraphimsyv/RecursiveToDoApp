import * as React from "react";
import { TaskBarProps } from "../../types";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

/**
 * React Component - Rendering a Bar for the ToDoTask Component
 * @param {id}: number - ID of the task
 * @param {subTask}: true | undefined - Is the task a subtask *Not Required
 * @param {index}: number - Index of the task in the child list *Not Required
 * @param {lengthList}: number - Length of the child list *Not Required
 * @param {hanlerDelete}: void - Callback for deleting the task from the list
 * @param {handlerMoveUp}: void - Callback for moving the task up in the list
 * @param {handlerMoveDown}: void - Callback for moving the task down in the list
 */
const Bar : React.FC<TaskBarProps> = (
  { id, subTask, index, lengthList, handlerDelete, handleMoveUp, handleMoveDown } : TaskBarProps
) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const HandlerClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const HandlerClose = () => {
    setAnchorEl(null);  
  };

  return (
    <>
      <div className="card_bar">
        <IconButton onClick={handleMoveUp} disabled={index === 0}>
          <VerticalAlignTopIcon />
        </IconButton>
        <IconButton onClick={handleMoveDown} disabled={index === lengthList}>
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
            HandlerClose();
            handlerDelete();
          }}>Delete</MenuItem>
        </Menu>
      </div>
    </>
  )
}

export { Bar }