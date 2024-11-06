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
 return res.status(200).json({ message: "user not found", user: user });
};

export const allpostss = async (req, res) => {
  const posts = await Post.find({});

  if (!posts) {
    return res.status(404).json({ message: "no posts in our application yet" });
  }

    return res.status(200).json({ message: "allpost finded", posts: posts });
};

export const deletepost = async (req, res) => {



  try {

    const {  pid,uid } = req.params;

  
    const user = await User.findById(uid);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const posts = await Post.findById(pid)
    console.log(posts,"m");
   
    // if (!posts) {
    //   return res.status(404).json({ message: "post not founded" });
    // }
  
    const deletepost = await Post.findOneAndDelete({
      userId:user._id,
      _id:posts._id,
    });
    if (!deletepost) {
      return res.status(404).json({ message: "post not found" });
    }
  console.log(deletepost,"oo");
  
   const userpostindex= await user.postId.findIndex((item)=>{
      item.equals(deletepost._id)
    });
    if(!userpostindex !== -1){
       user.postId.splice(userpostindex,1)
      await user.save()
      return res.status(200).json({message:"post deleted success full",deleteditems:deletepost})
    }
    return res.status(404).json({messagr:"post not found in users post "})
    
  } catch (error) {
    console.log(error);
    
  }

};
