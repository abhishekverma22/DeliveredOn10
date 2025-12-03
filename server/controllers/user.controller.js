import sendEmail from "../configs/sendEmail.js";
import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import verifyEmailTemplate from "../utils/verifyEmailTemplate.js";
import { sendError } from "../utils/response.js";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return sendError(res, error.message || error);
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        msg: "User already registered",
        error: true,
        success: false,
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    const payload = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = await UserModel.create(payload);
    const verifyEmailURL = `${process.env.FRONTEND_URL}/verify-email?id=${newUser?._id}`;

    const verifyEmail = await sendEmail({
      sendTo: email,
      subject: "Welcome to DeliveredOn10! Verify Your Email",
      html: verifyEmailTemplate({ name, url: verifyEmailURL }),
    });

    res.status(201).json({
      msg: "User account create successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: error.message || error, error: true, success: false });
  }
};

export const verifyEmailController = async (req, res) => {
  try {
    const { id } = req.body;
    const findUser = await UserModel.findOne({ _id: id });
    if (!findUser) {
      return res.status(404).json({
        msg: "Invalid Email, user not found!...",
        error: true,
        success: false,
      });
    }

    findUser.verify_email = true;
    findUser.save();
    return res.status(200).json({
      msg: "Email verified successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return sendError(res, error.message || error);
  }
};

// Login controller
export const loginController = async (req, res) => {
  try {
  } catch (error) {
    return sendError(res, error.message || error);
  }
};
