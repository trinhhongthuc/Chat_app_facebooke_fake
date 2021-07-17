import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    message: {
      type: [{ message: String, time: Date }],
      required: true,
    },
    send: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", schema);

export default Message;
