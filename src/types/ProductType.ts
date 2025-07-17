export type ProductType = {
  id: number
  imageUrl: string
  name: string
  count: number
  size: {
    width: number
    height: number
  }
  weight: string
  comments: Coment[]
}

type Coment = {
  id: number
  productId: number
  description: string
  date: string
}
