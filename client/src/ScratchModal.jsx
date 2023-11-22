import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ header, text, className }) {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Remove button after testing */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        className={className}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {header}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {text}
            </Typography>
            <CustomButton
              className={
                'h-9 text-white bg-indigo-500 rounded-sm w-65 hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-400'
              }
              type="submit"
              label="Demo Feed"
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
