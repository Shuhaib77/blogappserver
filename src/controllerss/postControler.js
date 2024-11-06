import { populate } from "dotenv";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

export const addpost = async (req, res) => {
  const { description } = req.body;

  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  const newpost = Post({
    userId: user._id,
    image: req.cloudinaryImageUrl,
    description: description,
  });
  await newpost.save();

  user.postId.push(newpost._id);
  await user.save();

  res.status(200).json({ message: "post added success", post: newpost });
};

export const getuserposts = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("postId");
  res.status(200).json({ message: "user not found", user: user });
};

export const allpostss=async (req,res)=>{

  const posts= await Post.find({})

  if(!posts){
    res.status(404).json({message:"no posts in our application yet"})
  }

  res.status(200).json({message:"allpost finded",posts:posts})

}