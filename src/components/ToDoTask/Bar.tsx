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
 * @param {place}: number - Place of the task in the child list *Not Required
 * @param {lengthList}: number - Length of the child list *Not Required
 * @param {handlerDelete}: void - Callback for deleting the task from the list
 */
const Bar : React.FC<TaskBarProps> = (
  { id, place, lengthList, handlerUpdate } : TaskBarProps
) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const HandlerDelete = () => {
    fetch(`/tasks/${id}`, { method: 'DELETE' })
    .then(res => handlerUpdate());
  }
  const HandlerMove = (moveTo : "up" | "down") => {
    fetch(`/tasks`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id, moveTo: moveTo
      })
    })
    .then(res => handlerUpdate());
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
        <IconButton onClick={() => HandlerMove("up")} disabled={place <= 0}>
          <VerticalAlignTopIcon />
        </IconButton>
        <IconButton onClick={() => HandlerMove("down")} disabled={place >= lengthList}>
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