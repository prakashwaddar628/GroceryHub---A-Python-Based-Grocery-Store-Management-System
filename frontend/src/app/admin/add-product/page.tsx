"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdminNav from "@/components/AdminNav";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the schema for the form using Zod
const productFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  price: z.coerce
    .number()
    .min(0, { message: "Price must be a positive number." }),
  category: z.string().min(1, { message: "Category must be selected" }),
  stock: z.coerce.number().min(0, { message: "Stock must be zero or more." }),
  supplierName: z.string().min(2, { message: "Supplier name is required." }),
  imageUrl: z.string().url({ message: "Invalid URL format." }),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

const AddProduct = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      stock: 0,
      supplierName: "",
      imageUrl: "",
    },
  });

  const onSubmit = (data: ProductFormValues) => {
    console.log(data);
    alert("Product added successfully!");
    reset();
  };

  return (
    <div className="flex max-h-[782px] overflow-hidden">
      <AdminNav />
      <div className="flex-1 py-0 text-gray-900">
        <h1 className="text-2xl font-bold mb-2 mt-2 ml-6 text-current">
          Add New Products or Update
        </h1>

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
            <CardDescription>
              Enter the details for the new product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Product Name */}
              <div>
                <label className="block mb-1 font-medium">Product Name</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Product Name"
                      className={`w-full p-2 border rounded ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`w-full p-2 border rounded ${
                        errors.category ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                      <option value="home-garden">Home & Garden</option>
                    </select>
                  )}
                />
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block mb-1 font-medium">Description</label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Product Description"
                      className={`w-full p-2 border rounded ${
                        errors.description
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Price and Stock */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Price</label>
                  <Controller
                    name="price"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        {...field}
                        placeholder="Price"
                        className={`w-full p-2 border rounded ${
                          errors.price ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    )}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm">
                      {errors.price.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Stock</label>
                  <Controller
                    name="stock"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        {...field}
                        placeholder="Stock"
                        className={`w-full p-2 border rounded ${
                          errors.stock ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                    )}
                  />
                  {errors.stock && (
                    <p className="text-red-500 text-sm">
                      {errors.stock.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Supplier Name */}
              <div>
                <label className="block mb-1 font-medium">Supplier Name</label>
                <Controller
                  name="supplierName"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Supplier Name"
                      className={`w-full p-2 border rounded ${
                        errors.supplierName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.supplierName && (
                  <p className="text-red-500 text-sm">
                    {errors.supplierName.message}
                  </p>
                )}
              </div>

              {/* Image URL */}
              <div className="flex gap-4 items-center">
                <label className="block mb-1 font-medium">Image URL</label>
                <Controller
                  name="imageUrl"
                  control={control}
                  render={({ field: { onChange, ...rest } }) => (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          onChange(imageUrl);
                        }
                      }}
                      className={`w-62 p-2 border rounded ${
                        errors.imageUrl ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.imageUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.imageUrl.message}
                  </p>
                )}
                
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? "Adding..." : "Add Product"}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
