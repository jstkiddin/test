import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Box, Button, Card, Typography } from '@mui/material'
import styled from 'styled-components'
import { ProductType } from '../types/ProductType'
import { getProduct } from '../features/productsSlice'
import { useEffect } from 'react'

function Product() {
  const currentProduct: ProductType | undefined = useAppSelector(
    state => state.products.currentProduct
  )
  const location = useLocation().pathname.split('/')[1]

  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('loc', location)
    dispatch(getProduct(parseInt(location)))

    console.log(currentProduct)
  }, [])

  return (
    <Wrapper>
      <StyledBox>
        <StyledCard>
          <Box>
            <ProductInfo>
              <ProductImage
                src={`${currentProduct?.imageUrl ?? ''}`}
                alt={currentProduct?.name}
                loading="lazy"
              />
              <Box>
                <Typography>{currentProduct?.name}</Typography>
                <Typography>Count: {currentProduct?.count}</Typography>
              </Box>
            </ProductInfo>
          </Box>
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
        </StyledCard>
      </StyledBox>
    </Wrapper>
  )
}

export default Product

const StyledBox = styled(Box)`
  width: 50%;
  margin: 1rem;
`

const ProductInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const StyledCard = styled(Card)`
  position: related;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`

export const ProductImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
