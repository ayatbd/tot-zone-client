import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-unused-vars
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://b7a11-toy-marketplace-server-side-ayatbd.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "The Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setLoading(false);
          reset(); // Reset the form
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Add a Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("toyname", { required: true })}
                name="toyname"
                placeholder="Toy Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                {...register("quantity", { required: true })}
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                {...register("email", { required: true })}
                value={user?.email}
                placeholder="seller email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled selected>
                Select Category
              </option>
              <option>Plush Teddy</option>
              <option>Classic Teddy</option>
              <option>Giant Teddy</option>
              <option>Mini Teddy</option>
              <option>Vintage Teddy</option>
            </select>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("seller", { required: true })}
                name="seller"
                value={user?.displayName}
                placeholder="seller name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                {...register("price", { required: true })}
                name="price"
                placeholder="$"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                {...register("rating", { required: true })}
                name="rating"
                placeholder="Ratings"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("details", { required: true })}
                name="details"
                placeholder="Detail Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                {...register("photo", { required: true })}
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 w-1/6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {loading ? "Loading.." : "Add Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
