import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    image: { type: Array, default: [] },
    category: [{ type: mongoose.Schema.ObjectId, ref: "Category" }],
    category: [{ type: mongoose.Schema.ObjectId, ref: "SubCategory" }],
    unit: { type: String, defalut: null },
    stock: { type: Number, defalut: 0 },
    price: { type: Number, defalut: 0 },
    dicount: { type: number, default: null },
    description: { type: String, defalut: "" },
    more_details: { type: Object, default: {} },
    publish: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
