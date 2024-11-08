import { populate } from "dotenv";
import Post from "../models/postModel.js";
import Save from "../models/saveModal.js";
import User from "../models/userModel.js";

export const savepost = async (req, res) => {
  const { uid, pid } = req.params;
  console.log(uid, pid, "kklkl");

  const user = await User.findById(uid);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  const post = await Post.findById(pid);
  if (!post) {
    return res.status(404).json({ message: "post not found" });
  }

  try {
    const saved = await Save.findOne({
      postId:post._id,
      userId:user._id,
    });
  
    if (saved) {
      const deleteitem = await Save.findOneAndDelete({
        postId:post._id,
        userId:user._id,
      });
  
      if (deleteitem) {
        const itemindex =await user.saveId.findIndex((item) => {
          item.equals(deleteitem._id);
        });
        if (!itemindex != -1) {
          user.saveId.splice(itemindex, 1);
          await user.save();
          return res.status(200).json({ message: "deleted saved item" });
        }
      }
    }
    const savditem = Save({
      postId:post._id,
      userId:user._id,
    });
    await savditem.save();
    user.saveId.push(savditem._id);
    await user.save();
     res.status(200).json({ message: "saved item success", saved: savditem });
    
  } catch (error) {
    res.send(error)
    
  }
 
};

export const viewsave = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate({
    path: "saveId",
    populate: "postId",
  });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
 res.status(200).json({ message: "saved  founded", saved: user });

  // const saved=user.saveId.populate({
  //     path:"postId"
  // })
};
