import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      userName,
      email,
      password: hashed,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      message: "User created successfully",
      data: user,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const user = await userModel.findById(userID);

    return res.status(200).json({
      message: "User created successfully",
      data: user,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};
