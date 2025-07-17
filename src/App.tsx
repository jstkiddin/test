import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/RootRoutes'
import { useAppDispatch } from './app/hooks'
import { useEffect } from 'react'
import { setProductsList } from './features/productsSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        dispatch(setProductsList(data))
      })
  }, [dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
