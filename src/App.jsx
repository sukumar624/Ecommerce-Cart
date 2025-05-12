import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home, NotFound, ProductDetails, Products } from "./pages"
import RootLayout from "./layout/RootLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from "./contexts/CartProvider";
// create router
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="product-details" element={<ProductDetails />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))
const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App