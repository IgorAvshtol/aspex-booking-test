import { Box, Modal } from '@mui/material';
import { CustomModalProps } from '@interfaces/index.ts';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ModalContainer({ open, children }: CustomModalProps) {
  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
}
