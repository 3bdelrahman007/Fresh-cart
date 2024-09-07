import React, { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { FaHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductItem({ product }) {
  const {
    addItemToCard,
    setCartItems,
    addToWishlist,
    removeItemFromWishlist,
    wishlist,
  } = useContext(cartContext);
  const [isLoading, setIsLoading] = useState(false);

  const isInWishlist = wishlist.includes(product._id);

  async function handleAddToWishlist() {
    setIsLoading(true);
    const response = isInWishlist
      ? await removeItemFromWishlist(product._id)
      : await addToWishlist(product._id);

    if (response?.data?.status === "success") {
      toast.success(
        isInWishlist ? "Removed from wishlist" : "Added to wishlist"
      );
    } else {
      toast.error("Failed to update wishlist");
    }
    setIsLoading(false);
  }

  async function handleAddToCart() {
    setIsLoading(true);
    try {
      const response = await addItemToCard(product._id);
      if (response?.data?.status === "success") {
        setCartItems(response.data.numOfCartItems);
        toast.success("Product added to cart");
      } else {
        toast.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("An error occurred while adding the product to the cart");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="shadow hover:shadow-lg hover:shadow-green-600 duration-500 rounded-lg p-4">
      <button
        className="block ms-auto m-2"
        onClick={handleAddToWishlist}
        disabled={isLoading}
      >
        <FaHeart
          className={`text-4xl hover:animate-pulse ${
            isInWishlist ? "text-[#ff0033]" : "text-yellow-400"
          }`}
        />
      </button>
      <Link to={`/productDetails/${product._id}`}>
        <img
          className="w-full object-cover object-center"
          src={product.imageCover}
          alt=""
        />
        <p className="mt-3 text-green-600">{product.category.name}</p>
        <h5 className="dark:text-white my-3 font-semibold">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h5>
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm dark:text-white">
            {product.price} EGP
          </p>
          <p className="flex items-center gap-1 dark:text-white">
            <FaStar className="text-yellow-400" /> {product.ratingsAverage}
          </p>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className={`w-full bg-green-600 text-white py-2 mt-2 rounded-md duration-500 hover:bg-green-700 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        Add To Cart
      </button>
    </div>
  );
}
