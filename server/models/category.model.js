import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, defalut: "" },
    image: { type: String, defalut: "" },
  },
  { timestamps: true }
);

const CatergoryModel = mongoose.model("Category", categorySchema);
