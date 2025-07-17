import { Box, Button, Card, Link, Typography } from '@mui/material'

import { ProductType } from '../types/ProductType'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'

import { useEffect } from 'react'
import { setProductsList } from '../features/productsSlice'

function ProductList() {
  const productList = useAppSelector(state => state.products.poductList)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        dispatch(setProductsList(data))
      })
  }, [dispatch])

  return (
    <Wrapper>
      <StyledBox>
        <Button variant="contained">Add new</Button>
      </StyledBox>

      <StyledBox>
        {productList.map((product: ProductType) => (
          <StyledCard>
            <Box>
              <ProductInfo>
                <ProductImage
                  src={`${product.imageUrl}`}
                  alt={product.name}
                  loading="lazy"
                />
                <Box>
                  <StyledLink onClick={() => navigate(product.id)}>
                    {product.name}
                  </StyledLink>
                  <Typography>Count: {product.count}</Typography>
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
                Delete
              </Button>
            </Box>
          </StyledCard>
        ))}
      </StyledBox>
    </Wrapper>
  )
}

export default ProductList

const StyledBox = styled(Box)`
  width: 50%;
  margin: 1rem;
`

const StyledLink = styled(Link)`
  &:hover {
    cursor: pointer;
  }
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
