import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import LinkComponent from './LinkComponent';
import { useNavigate } from 'react-router-dom';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  function handleSignOut() {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        Options
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}>
        <MenuItem onClick={handleClose}>
          <LinkComponent
            to="/create-entry"
            placeholder="Create New Entry"
            className="text-indigo-500"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkComponent
            to="/list"
            placeholder="Feed"
            className="text-indigo-500"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkComponent
            onClick={handleSignOut}
            to="/"
            placeholder="Sign Out"
            className="text-rose-400"
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
