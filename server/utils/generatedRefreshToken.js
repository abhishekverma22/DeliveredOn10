import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
const generatedRefreshToken = async (userID) => {
  const token = jwt.sign({ id: userID }, process.env.SECRET_KEY_REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  const updateRefreshTokenUser = await UserModel.updateOne(
    { _id: userID },
    { refreshToken: token }
  );

  return token;
};
export default generatedRefreshToken;
