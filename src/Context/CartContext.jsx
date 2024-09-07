import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const token = localStorage.getItem("token");
  const headers = { token };

  const [cartItems, setCartItems] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  // Function to fetch user cart
  function getUserCart() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .then((data) => data)
      .catch((error) => error);
  }

  // Function to add item to cart
  function addItemToCard(pId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId: pId },
        { headers }
      )
      .then((data) => data)
      .catch((error) => error);
  }

  // Function to update item count in cart
  function updateCountItem(id, count) {
    return axios
      .put(
        "https://ecommerce.routemisr.com/api/v1/cart/" + id,
        { count },
        { headers }
      )
      .then((data) => data)
      .catch((error) => error);
  }

  // Function to delete item from cart
  function deleteItem(id) {
    return axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart/" + id, { headers })
      .then((data) => data)
      .catch((error) => error);
  }

  // Function to clear cart
  function clearCart() {
    return axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .then((data) => data)
      .catch((error) => error);
  }

  // Function to fetch wishlist
  function getWishList() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", { headers })
      .then((data) => data)
      .catch((error) => error);
  }

  // Function to add item to wishlist
  async function addToWishlist(productId) {
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      { productId },
      { headers }
    );
    if (response?.data?.status === "success") {
      setWishlist((prev) => {
        const newWishlist = [...prev, productId];
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        return newWishlist;
      });
    }
    return response;
  }

  // Function to remove item from wishlist
  async function removeItemFromWishlist(id) {
    const response = await axios.delete(
      "https://ecommerce.routemisr.com/api/v1/wishlist/" + id,
      { headers }
    );
    if (response?.data?.status === "success") {
      setWishlist((prev) => {
        const newWishlist = prev.filter((item) => item !== id);
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        return newWishlist;
      });
    }
    return response;
  }

  // Function to handle checkout session
  function checkOutSession(cartId, shippingAddress) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        { shippingAddress },
        { headers }
      )
      .then((data) => data)
      .catch((error) => error);
  }

  // Fetch and set cart items on mount
  async function getCart() {
    const response = await getUserCart();
    if (response.data.status === "success") {
      setCartItems(response.data.numOfCartItems);
    }
  }

  // Fetch wishlist from localStorage on mount
  useEffect(() => {
    getCart();
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  return (
    <cartContext.Provider
      value={{
        getUserCart,
        addItemToCard,
        updateCountItem,
        deleteItem,
        clearCart,
        cartItems,
        setCartItems,
        checkOutSession,
        addToWishlist,
        getWishList,
        removeItemFromWishlist,
        wishlist,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
