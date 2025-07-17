import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from '@mui/material'
import { ProductType } from '../../types/ProductType'

type ProductModalProps = {
  open: boolean
  handleClose: () => void
  handleChangesConfirm: (product: ProductType) => void
  product?: ProductType
  title?: string
}

function ProductModal({
  open,
  handleClose,
  handleChangesConfirm,
  product,
  title,
}: ProductModalProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      {/* <DialogContent> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
          // width: '100%',
        }}
      >
        <TextField
          label="Name of the product"
          id="outlined-size-small"
          placeholder="Name"
          // defaultValue={product.name??""}
          size="small"
        />
        <TextField
          label="Image URL"
          id="outlined-size-small"
          placeholder="https://"
          // defaultValue="Small"
          size="small"
        />

        <TextField
          label="Count/Rating"
          id="outlined-size-small"
          placeholder="1-5"
          // defaultValue="Small"
          size="small"
        />
        <Box>
          <TextField
            label="width"
            id="outlined-size-small"
            placeholder="1-5"
            // defaultValue="Small"
            size="small"
          />
          <TextField
            label="height"
            id="outlined-size-small"
            placeholder="1-5"
            // defaultValue="Small"
            size="small"
          />
        </Box>
        <TextField
          label="Weight"
          id="outlined-size-small"
          // defaultValue="Small"
          size="small"
        />
      </Box>
      {/* </DialogContent>   */}
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {/* <Button variant="contained" onClick={()=> handleChangesConfirm()} autoFocus>
          Confirm
        </Button> */}
      </DialogActions>
    </Dialog>
  )
}

export default ProductModal
