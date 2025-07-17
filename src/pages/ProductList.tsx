import styled from 'styled-components'
import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { ProductType } from '../types/ProductType'
import { useAppDispatch, useAppSelector } from '../app/hooks'

import { StyledBox, Wrapper } from '../components/shared/StyledComponents'
import ProductListCard from '../components/ProductCard/ProductListCard'
import { useCallback, useState } from 'react'
import { addProduct } from '../features/productsSlice'
import ProductModal from '../components/modals/ProductModal'

function ProductList() {
  const productList = useAppSelector(state => state.products.poductList)
  const dispatch = useAppDispatch()
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false)

  const toggleAddModal = useCallback(
    () => setIsAddOpen(!isAddOpen),
    [isAddOpen]
  )
  const handleAddConfirm = useCallback(
    (product: ProductType) => {
      fetch(`http://localhost:3001/products`, {
        method: 'Post',
      }).then(res => {
        console.log(res)
        if (res.ok) {
          dispatch(addProduct(product))
          setIsAddOpen(!isAddOpen)
        }
      })
    },
    [isAddOpen, dispatch]
  )

  return (
    <Wrapper>
      <ProductModal
        open={isAddOpen}
        handleClose={toggleAddModal}
        handleChangesConfirm={handleAddConfirm}
        title="Adding the item"
      />
      <StyledBox>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={toggleAddModal}
        >
          Add new
        </Button>
      </StyledBox>

      {productList.length && (
        <ProductGrid>
          {productList.map((product: ProductType) => (
            <ProductListCard product={product} />
          ))}
        </ProductGrid>
      )}

      {!productList.length && (
        <Typography>There's no elements. Add one</Typography>
      )}
    </Wrapper>
  )
}

export default ProductList

const ProductGrid = styled(Box)`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 1rem;
`
