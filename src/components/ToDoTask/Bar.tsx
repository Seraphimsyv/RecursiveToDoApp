import * as React from "react";
import { TaskBarProps } from "../../types";

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

const Bar : React.FC<TaskBarProps> = ({ id, subTask, index, lengthList, handlerDelete, handleMoveUp, handleMoveDown } : TaskBarProps) => {
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