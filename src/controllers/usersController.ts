import { Request, Response } from "express";
import axios from "axios";
import { Post, User, Comment } from "../types";


export async function listUsers(req: Request, res: Response) {
try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    res.render("pages/users", {
    title: "Users List",
    users,
    });
} catch (error) {
    res.status(500).send("Error fetching users list");
}
}

export async function userDetails(req: Request, res: Response) {
try {
    const { id } = req.params;

    const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const postsRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);

    res.render("pages/user-details", {
    title: "User Details",
    user: userRes.data,
    posts: postsRes.data,
    });
} catch (error) {
    res.status(500).send("Error fetching user details");
}
}


export async function postDetails(req: Request, res: Response) {
try {
    const { id } = req.params;


    const postRes = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = postRes.data;


    const userRes = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = userRes.data;


    const commentsRes = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const comments = commentsRes.data;

    res.render("pages/post-details", {
    title: "Post Details",
    post,
    user,
    comments,
    });
} catch (error) {
    res.status(500).send("Error fetching post details");
}
}
