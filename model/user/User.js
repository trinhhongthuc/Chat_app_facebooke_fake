import mongoose from "mongoose";
import Post from "../post/Post.js";
import Message from "../message/Message.js";

const schema = mongoose.Schema(
  {
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    ngaySinh: {
      type: String,
      required: true,
    },
    gioiTinh: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },

    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],

    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);

export default User;
