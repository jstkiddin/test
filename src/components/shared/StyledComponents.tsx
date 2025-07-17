import { Box, Card } from '@mui/material'
import styled from 'styled-components'

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }
`
export const StyledBox = styled(Box)`
  width: 100%;
  margin: 2rem;
`

export const ProductInfo = styled(Box)`
  position: relative;
  width: 100%;
`

export const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1rem;
`

export const StyledCard = styled(Card)`
  position: related;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 1s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`
