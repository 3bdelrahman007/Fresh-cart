import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import CartItem from "../CartItem/CartItem";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    getUserCart,
    updateCountItem,
    deleteItem,
    clearCart,
    cartItems,
    setCartItems,
  } = useContext(cartContext);
  const [cartDetails, setCartDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getLoggedUser() {
    const response = await getUserCart();
    if (response.data.status == "success") {
      setCartDetails(response.data.data);
    }
  }

  async function updateQuantity(id, count) {
    setIsLoading(true);
    try {
      const response = await updateCountItem(id, count);
      if (response.data.status == "success") {
        setCartDetails(response.data.data);
        toast.success("Updated");
        console.log(cartDetails);
      }
    } catch (error) {
      toast.error("An error occurred while updating quantity");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteItemFromCart(id) {
    const response = await deleteItem(id);
    if (response.data.status == "success") {
      setCartDetails(response.data.data);
      setCartItems(response.data.numOfCartItems);
      toast.success("Deleted");
    }
  }

  async function clearUserCart() {
    const response = await clearCart();
    if (response.data.message == "success") {
      setCartDetails(null);
      setCartItems(0);
      toast.success("Cart cleared");
    }
  }

  useEffect(() => {
    getLoggedUser();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <p className="p-2 text-green-600 font-semibold">
          Total price : {cartDetails?.totalCartPrice}
        </p>
        <button
          onClick={clearUserCart}
          className="bg-green-500 hover:bg-green-700 duration-500 p-2 rounded-lg text-white flex items-center gap-3"
        >
          <p>Clear Cart</p>
          <FaTrashAlt />
        </button>
      </div>
      <div className="relative shadow-md overflow-x-auto sm:rounded-lg my-7">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartDetails?.products.map((item) => (
              <CartItem
                key={item._id}
                count={item.count}
                price={item.price}
                product={item.product}
                updateQuantity={updateQuantity}
                deleteItemFromCart={deleteItemFromCart}
                isLoading={isLoading}
                setCartItems={setCartItems}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-10">
        {cartItems == 0 ? (
          "Cart Empty"
        ) : (
          <Link
            className="bg-green-600 text-white p-2 rounded-lg"
            to={"/checkout/" + cartDetails?._id}
          >
            CheckOut Session
          </Link>
        )}
      </div>
    </>
  );
}
