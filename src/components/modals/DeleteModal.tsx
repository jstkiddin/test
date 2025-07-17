import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

type DeleteModalProps = {
  open: boolean
  handleClose: () => void
  handleDeleteConfirm: () => void
}

function DeleteModal({
  open,
  handleClose,
  handleDeleteConfirm,
}: DeleteModalProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {' Do you want to delete this item?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          By clicking on "Confirm" button the item will be deleted. You cannot
          revert this action
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleDeleteConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal
