import { Document, model, Schema, Types } from "mongoose";

interface iPost {
  message: string;
  image: string;
  imageID: string;
  user: {};
  like: Array<string>;
}

interface iPostData extends iPost, Document {}

const PostModel = new Schema<iPostData>(
  {
    message: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    like: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPostData>("posts", PostModel);
