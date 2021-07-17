import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    note: {
      type: String,
      default: "",
    },

    numberLike: {
      type: [String],
      default: "",
    },

    comment: {
      type: [{ id: String, comment: String, dateTime: Date }],
      default: [{}],
    },

    img_video: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", schema);

export default Post;
