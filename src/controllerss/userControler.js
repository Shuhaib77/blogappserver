import User from "../models/userModel.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const secrestkey = "hhhg";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(email);

  console.log(name,email,password,req.cloudinaryImageUrl,'sample prininggg' );
  const match = await User.findOne({ email });

  if (match) {
    return res.status(404).json({ message: "user alredy exist" });
  }
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const newpassword = await bcrypt.hash(password + salt, saltRounds);
    

    const newuser = new User({
      image: req.cloudinaryImageUrl,
      name: name,
      email: email,
      password: newpassword,
    });

    await newuser.save();

    res.status(200).json({ message: "register success full", user: newuser });
  } catch (error) {
    res.status(200).json(error.message);
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  const passmatch = await bcrypt.compare(password, user.password);

  if (passmatch) {
    return res.status(404).json({ message: "password is not match" });
  }

  const payLoad = {
    email: email,
    email: password,
  };
  const token = jwt.sign(payLoad, secrestkey, { expiresIn: "1h" });
  return res
    .status(200)
    .json({ message: "login successfull", user: user, token: token });
};
