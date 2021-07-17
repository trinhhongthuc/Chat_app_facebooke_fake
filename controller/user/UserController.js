import express from "express";
import User from "../../model/user/User.js";
import jwt from "jsonwebtoken";

const RouterUser = express.Router();

RouterUser.post("/register", async (req, res) => {
  try {
    const data = req.body;

    console.log(req.body);
    const user = await User.findOne({ email: data.email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "user is already" });
    } else {
      const newData = await User({
        lastName: data.lastName,
        userName: data.userName,
        email: data.email,
        password: data.password,
        ngaySinh: data.ngaySinh,
        gioiTinh: data.gioiTinh,
      });
      await newData.save();

      const token = jwt.sign(
        {
          id: newData._id,
          userName: newData.userName,
          email: data.email,
          ngaySinh: data.ngaySinh,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      return res
        .status(200)
        .json({ success: true, payload: newData, token: token });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: error });
  }
});

RouterUser.get("/login", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const result = jwt.verify(token, process.env.SECRET_KEY);

    if (result) {
      const data = req.body.payload;

      const user = await User.findOne({
        _id: result.id,
        email: data.email,
        password: data.password.trim(),
      });

      if (user) {
        const newToken = jwt.sign(
          {
            id: user._id,
            userName: user.userName,
            email: user.email,
            ngaySinh: user.ngaySinh,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "2h",
          }
        );
        res.status(200).json({ success: true, token: newToken });
      } else {
        res
          .status(404)
          .json({ success: false, message: "email or password is incorrect" });
      }
    } else {
      res.status(404).json({ success: false, message: "Token is empty" });
    }
  } catch (error) {}
});

export default RouterUser;
