import "./App.css";
import Home from "./Components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import LayOut from "./Components/LayOut/LayOut";
import NotFound from "./Components/NotFound/NotFound";
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContextProvider from "./Context/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import CheckOut from "./Components/CheckOut/CheckOut";
import Allorders from "./Components/Allorders/Allorders";
import WishList from "./Components/WishList/WishList";

const routing = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            {" "}
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            {" "}
            <Products />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "productDetails/:id",
        element: (
          <ProtectedRoute>
            {" "}
            <ProductDetails />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            {" "}
            <Categories />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            {" "}
            <Brands />{" "}
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            {" "}
            <Cart />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout/:cartId",
        element: (
          <ProtectedRoute>
            {" "}
            <CheckOut />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            {" "}
            <Allorders />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            {" "}
            <WishList />{" "}
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const myClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={myClient}>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={routing}></RouterProvider>
        </CartContextProvider>
      </UserContextProvider>
      <Toaster position="top-right" />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
