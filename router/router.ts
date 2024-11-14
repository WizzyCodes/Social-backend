import { Router } from "express";
import {
  createUser,
  getAllUser,
  getOneUser,
} from "../controller/userController";
import {
  createPost,
  getAllPost,
  getOneUserPost,
  likeOneUserPost,
} from "../controller/postController";

const router: any = Router();

//user

router.route("/create-user").post(createUser);

router.route("/get-all-user").get(getAllUser);
router.route("/get-one-user/:userID").get(getOneUser);

//post

router.route("/create-post/:userID").post(createPost);
router.route("/get-all-post").get(getAllPost);
router.route("/get-user-post/:userID").get(getOneUserPost);

router.route("/like-user-post/:userID/:postID").patch(likeOneUserPost);

export default router;
