import User from "../../model/user/User.js";

export const AddPost = async (req, res, next) => {
  try {
    const data = req.body.payload;

    const user = await User.find({ _id: data.id });

    if (!user) {
      return res.json({ success: false, message: " user is not available" });
    } else {
      const newResult = await user.update(
        {
          posts: [...user.posts, data],
        },
        { new: true }
      );
      return res.status(200).json({ success: true, payload: newResult });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
