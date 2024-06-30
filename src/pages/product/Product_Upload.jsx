import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


const Product_upload = () => {
    const { register, handleSubmit, formState,control } = useForm();
    const { errors } = formState;
    const onSubmit = async (data) => {
      // Create a FormData object and append the fields from the form
      const formData = new FormData();
      Object.keys(data).forEach(key=>{
        formData.append(key, data[key])
      })
  
      // Assuming you have a file input registered with React Hook Form
      // and the file input's name is 'image'
      if (data.image && data.image.length > 0) {
        formData.append('image', data.image[0]);
      }
  
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/product/add`, {
          method: 'POST',
          body: formData,
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('token')}`
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const responseData = await response.json();
        console.log('Success:', responseData);
        // Handle success scenario
      } catch (error) {
        console.error('Error:', error);
        // Handle error scenario
      }
    };



  return (
    <div className="bg-white border-4 rounded-lg shadow relative m-10">
  <div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold">Upload Product</h3>
    <button
      type="button"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
      data-modal-toggle="product-modal"
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
  <div className="p-6 space-y-6">
    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="product-name"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            name="product-name"
            id="product-name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="Apple Imac 27”"
            {...register("name", {
                required: "Requires Name",
                minLength: {value:3,message:" Min length 3"
              }
              })}
          />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="Electronics"
            required=""
            {...register("category", {
                required: "Category Required",
                minLength: {value:3,message:" Min length 3"
              }
              })}
          />
          <p className="text-red-500">{errors.category?.message}</p>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Condition
          </label>
          <input
            type="text"
            name="Condition"
            id="Condition"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="Good"
            required=""
            {...register("condition", {
                required: "Condition Required",
                minLength: {value:3,message:" Min length 3"
              }
              })}
          />
          <p className="text-red-500">{errors.condition?.message}</p>
        </div>
        
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Buying Price
          </label>
          <input
            type="number"
            name="Buying price"
            id="price"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="₹2300"
            required=""
            {...register("costPrice", {
                required: "requires Buying Price",
              })}
          />
          <p className="text-red-500">{errors.costPrice?.message}</p>
        </div>
        
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Selling Price
          </label>
          <input
            type="number"
            name="Selling price"
            id="price"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
            placeholder="₹2300"
            required=""
            {...register("sellingPrice", {
                required: " Selling Price Required",
              })}
          />
          <p className="text-red-500">{errors.sellingPrice?.message}</p>
        </div>
        <div className="col-span-6 sm:col-span-3">
        <label for="example1" class="mb-1 block text-sm font-medium text-gray-700">Upload Image</label>
        <input id="example1" type="file" class="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" accept='image/*' {...register("image", {
                required: "Image required",
              })} />
              <p className="text-red-500">{errors.image?.message}</p>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="product-details"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Product Details
          </label>
          <textarea
            id="product-details"
            rows={6}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
            placeholder="Details"
            defaultValue={""}
            {...register("description", {
                required: "Description Required",
                minLength: {value:3,message:" Min length 3"
              }
              })}
          />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
    <button
      className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      type="submit"
    >
      Upload
    </button>
  </div>
      </div>
    </form>
    <DevTool control={control} />
  </div>
  
</div>

  )
}

export default Product_upload
