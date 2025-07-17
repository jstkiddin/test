import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Box, Button, Typography } from '@mui/material'
import { ProductType } from '../types/ProductType'
import { getProduct } from '../features/productsSlice'
import { useEffect } from 'react'
import {
  ProductImage,
  ProductInfo,
  StyledBox,
  StyledCard,
  Wrapper,
} from '../components/shared/StyledComponents'

function Product() {
  const currentProduct: ProductType | undefined = useAppSelector(
    state => state.products.currentProduct
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const location = useLocation().pathname.split('/')[1]

  useEffect(() => {
    dispatch(getProduct(parseInt(location)))
  }, [])

  return (
    <Wrapper>
      <StyledBox>
        <Button
          variant="contained"
          onClick={() => {
            navigate(-1)
          }}
        >
          Go back
        </Button>
      </StyledBox>

      <StyledBox>
        <ProductImage
          src={`${currentProduct?.imageUrl ?? ''}`}
          alt={currentProduct?.name}
          loading="lazy"
        />
        <StyledCard>
          <Box>
            <ProductInfo>
              <Box>
                <Typography>{currentProduct?.name}</Typography>
                <Typography>Count: {currentProduct?.count}</Typography>
              </Box>
            </ProductInfo>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <Button sx={{ height: 50 }} variant="outlined">
                Edit
              </Button>
            </Box>
          </Box>
        </StyledCard>
      </StyledBox>
    </Wrapper>
  )
}

export default Product
