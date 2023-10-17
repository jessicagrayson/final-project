import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import LinkComponent from './LinkComponent';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function ViewMenu() {
  const [entry, setEntry] = useState();
  const { entryId } = useParams();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  <FontAwesomeIcon icon={faPen} />;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fetches entry by entryId
  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const res = await fetch(`/api/entries/${entryId}`);
        if (!res.ok) {
          throw new Error('Network response was not okay');
        }
        const entryData = await res.json();
        setEntry(entryData);
      } catch (error) {
        console.error(error);
      }
    };
    if (entryId) {
      fetchEntry();
    }
  }, [entryId]);

  async function removeEntry() {
    try {
      const res = await fetch(`/api/delete/${entryId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`Network status not okay: ${res.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRemove() {
    await removeEntry();
    navigate('/list');
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        style={{
          color: '#6366f1',
          fontWeight: 600,
          fontSize: '16px',
        }}
        onClick={handleClick}>
        <FontAwesomeIcon icon={faPen} />
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
            to="/update-entry/:entryId"
            state={entry}
            placeholder="Edit Entry"
            className="text-indigo-500"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkComponent
            onClick={() => handleRemove(entry.entryId)}
            placeholder="Delete"
            className="text-rose-500"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
      </Menu>
    </div>
  );
}
