import { createBrowserRouter, Outlet } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import Product from '../pages/Product'

const About = () => <h2>About Page</h2>
const NotFound = () => <h2>404: Page Not Found</h2>

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ProductList /> },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: ':id',
        element: <Product />,
      },
    ],
  },
])

function BaseLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default BaseLayout
