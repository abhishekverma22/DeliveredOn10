import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please Provide Name..."] },
    email: {
      type: String,
      required: [true, "Please Provide Email"],
      unique: true,
    },
    password: { type: String, required: [true, "Please Provide Password"] },
    avatar: { type: String, default: "" },
    mobile: { type: Number, default: null },
    refreshToken: { type: String, default: "" },
    verify_email: { type: Boolean, default: false },
    last_login_date: {
      type: Date,
      default: "",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
    address_details: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Address",
      },
    ],
    shopping_cart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "CartProduct",
      },
    ],
    order_history: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Order",
      },
    ],
    forgot_password_otp: { type: String, default: null },
    forgot_password_expiry: { type: Date, default: "" },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
