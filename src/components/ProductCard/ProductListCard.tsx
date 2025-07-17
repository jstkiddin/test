import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Rating, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductType } from '../../types/ProductType'
import {
  ProductImage,
  ProductInfo,
  StyledCard,
} from '../shared/StyledComponents'
import DeleteModal from '../modals/DeleteModal'
import { useCallback, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { deleteProduct } from '../../features/productsSlice'

type ProductListCardProps = {
  product: ProductType
}

function ProductListCard({ product }: ProductListCardProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)

  const toggleDeleteModal = useCallback(
    () => setIsDeleteOpen(!isDeleteOpen),
    [isDeleteOpen]
  )
  const handleDeleteConfirm = useCallback(() => {
    fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'DELETE',
    }).then(res => {
      console.log(res)
      if (res.ok) {
        dispatch(deleteProduct(product.id))
        setIsDeleteOpen(!isDeleteOpen)
      }
    })
  }, [isDeleteOpen, dispatch, product.id])

  return (
    <>
      <DeleteModal
        open={isDeleteOpen}
        handleClose={toggleDeleteModal}
        handleDeleteConfirm={handleDeleteConfirm}
      />

      <StyledCard key={product.id}>
        <Box>
          <ProductImage
            src={`${product.imageUrl}`}
            alt={product.name}
            loading="lazy"
            onClick={() => navigate(`/${product.id}`)}
          />
        </Box>
        <ProductInfo>
          <Box sx={{ padding: '1rem' }}>
            <Typography>{product.name}</Typography>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Rating
                name="half-rating"
                size="small"
                defaultValue={product.count}
                precision={0.5}
                readOnly
              />
              <IconButton aria-label="delete" onClick={toggleDeleteModal}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </ProductInfo>
      </StyledCard>
    </>
  )
}

export default ProductListCard
