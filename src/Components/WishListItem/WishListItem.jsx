import React, { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { toast } from "react-hot-toast";
import { LiaSpinnerSolid } from "react-icons/lia";

export default function WishListItem({ item, setWishData }) {
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const { removeItemFromWishlist, getWishList, addItemToCard, setCartItems } =
    useContext(cartContext);

  async function removeItem(id) {
    setSpinner(true);
    try {
      const data = await removeItemFromWishlist(id);
      const response = await getWishList();

      if (data?.data?.status === "success") {
        setWishData(response.data);
        toast.error("Product removed from wishlist");
        setSpinner(false);
      }
    } catch (error) {
      toast.error(
        "An error occurred while removing the product from the wishlist"
      );
    }
  }

  async function addProductToCart(id) {
    setLoading(true);
    try {
      const data = await addItemToCard(id);
      if (data?.data.status === "success") {
        toast.success("Product added successfully");
        setCartItems(data?.data.numOfCartItems);
        setLoading(false);
      }
    } catch (error) {
      toast.error(
        "An error occurred while removing the product from the wishlist"
      );
    }
  }

  return (
    <div className="w-full p-2 flex items-center justify-start gap-8 border-b border-[#dcdada]">
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8">
          <img
            className="w-[100px] object-cover"
            src={item?.imageCover}
            alt=""
          />
          <div>
            <p>{item?.title}</p>
            <div className="text-[#0aad0a] my-2">Price : {item?.price} EGP</div>
            <button
              onClick={() => removeItem(item?._id)}
              disabled={spinner}
              className="rounded-md py-[2.5px] px-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500"
            >
              {spinner ? (
                <LiaSpinnerSolid className="animate-spin" />
              ) : (
                "Remove"
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <button
          onClick={() => addProductToCart(item?._id)}
          disabled={loading}
          className="rounded-md py-2 px-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white duration-500"
        >
          {loading ? (
            <LiaSpinnerSolid className="animate-spin" />
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
}
