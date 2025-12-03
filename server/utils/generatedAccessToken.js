import jwt from "jsonwebtoken";

const generatedAccessToken = async (userID) => {
  const token = jwt.sign({ id: userID }, process.env.SECRET_KEY_ACCESS_TOKEN, {
    expiresIn: "5H",
  });

  return token;
};
export default generatedAccessToken;
