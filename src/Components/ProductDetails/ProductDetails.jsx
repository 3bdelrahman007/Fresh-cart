import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import Alert from "../Alert/Alert";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { addItemToCard, setCartItems } = useContext(cartContext);
  async function addItem(id) {
    const response = await addItemToCard(id);
    if (response.data.status == "success") {
      setCartItems(response.data.numOfCartItems)
      toast.success('Product added to cart');
    }
  }

  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () =>
      axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id),
    select: (data) => data.data.data,
  });

  if (isError) {
    return <Alert />;
  }
  
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-4 py-5">
            <img className="w-full" src={data.imageCover} alt="" />
          </div>
          <div className="col-span-12 sm:col-span-8 py-5 self-center">
            <h2 className="dark:text-white my-4 text-center sm:text-left">
              {data.title}
            </h2>
            <p className="dark:text-white text-center sm:text-left font-light">
              {data.description}
            </p>
            <div className="flex justify-between my-4">
              <span className="dark:text-white text-center sm:text-left">
                {data.price} EGP
              </span>
              <span className="flex items-center gap-1 dark:text-white text-center sm:text-left">
                <FaStar className="text-yellow-400" />
                {data.ratingsAverage}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  addItem(data.id);
                }}
                className="w-3/4 bg-green-500 hover:bg-green-700 duration-500 py-2 rounded-lg mx-auto text-white"
              >
                + Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
