import { Request, Response } from "express";
import axios from "axios";
import { Post, User, Comment } from "../types";

const API = process.env["JSONPLACEHOLDER_API"] ?? "https://jsonplaceholder.typicode.com";

export async function postDetails(req: Request, res: Response) {
  try {
    const id = Number(req.params["id"]);
    if (isNaN(id)) {
      return res.status(400).send("Invalid post ID");
    }

    const postRes = await axios.get<Post>(`${API}/posts/${id}`);
    const post = postRes.data;

    const userRes = await axios.get<User>(`${API}/users/${post.userId}`);
    const user = userRes.data;

    const commentsRes = await axios.get<Comment[]>(`${API}/posts/${id}/comments`);
    const comments = commentsRes.data;

    res.render("pages/post-details", {
      title: "Post Details",
      post,
      user,
      comments,
    });
  } catch (error) {
    console.error("❌ Error in postDetails:", error);
    res.status(500).send("Error fetching post details");
  }
}
