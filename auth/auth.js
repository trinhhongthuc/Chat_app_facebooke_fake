import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req, res, next) => {
  // bears dadasdasd
  try {
    const token = req.headers.authorization.split(" ")[1];

    const result = jwt.verify(token, process.env.SECRET_KEY);

    if (result) {
      req.body = data;
      next();
    } else {
      res.status(400).json({ success: false, message: "Token is not valid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export default auth;
