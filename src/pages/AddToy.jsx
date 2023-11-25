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
    fetch("https://tot-zone-server.vercel.app/toy", {
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
    <div className="bg-[#F4F3F0] px-5 py-10 md:p-24">
      <h2 className="text-3xl font-extrabold text-center mb-10">Add a Toy</h2>
      <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Toy Name
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("toyname", { required: true })}
                name="toyname"
                placeholder="Toy Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Available Quantity
              </span>
            </label>
            <label>
              <input
                type="number"
                {...register("quantity", { required: true })}
                name="quantity"
                placeholder="Available Quantity"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Seller Email
              </span>
            </label>
            <label>
              <input
                type="email"
                {...register("email", { required: true })}
                value={user?.email}
                placeholder="seller email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Category
              </span>
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Seller Name
              </span>
            </label>
            <label>
              <input
                type="text"
                {...register("seller", { required: true })}
                name="seller"
                value={user?.displayName}
                placeholder="seller name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Price
              </span>
            </label>
            <label>
              <input
                type="number"
                {...register("price", { required: true })}
                name="price"
                placeholder="$"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Rating
              </span>
            </label>
            <select
              {...register("rating", { required: true })}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>3</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Detail description
              </span>
            </label>
            <label>
              <input
                type="text"
                {...register("details", { required: true })}
                name="details"
                placeholder="Detail Description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="mb-3 block text-base font-medium text-[#07074D]">
                Photo URL
              </span>
            </label>
            <label>
              <input
                type="text"
                {...register("photo", { required: true })}
                name="photo"
                placeholder="Photo URL"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </label>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 md:w-1/6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {loading ? "Loading.." : "Add Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
