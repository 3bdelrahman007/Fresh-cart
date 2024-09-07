import React, { useContext, useEffect, useState } from "react";
import WishListItem from "../WishListItem/WishListItem";
import { cartContext } from "../../Context/CartContext";
import Loading from "./../Loading/Loading";

export default function WishList() {
  const { getWishList } = useContext(cartContext);
  const [wishData, setWishData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getUserWishlist() {
    const response = await getWishList();
    if (response.data.status === "success") {
      const data = response?.data;
      setWishData(data);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserWishlist();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className=" min-h-screen bg-white">
      <div className="hero-content">
        <div className="max-w-full container bg-[#f0f3f2] py-5 px-3">
          <div className="flex items-center justify-center">
            <h1>Wishlist</h1>
          </div>

          {wishData?.data?.map((item) => (
            <WishListItem
              item={item}
              setWishData={setWishData}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
