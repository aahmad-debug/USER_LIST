import { Request, Response } from "express";
import axios from "axios";

const API = process.env["JSONPLACEHOLDER_API"] ?? "https://jsonplaceholder.typicode.com";

export async function listUsers(req: Request, res: Response) {
  try {
    const response = await axios.get(`${API}/users`);
    const users = response.data;

    res.render("pages/users", {
      title: "Users List",
      users,
    });
  } catch (error) {
    console.error("❌ Error in listUsers:", error);
    res.status(500).send("Error fetching users");
  }
}

export async function userDetails(req: Request<{ id: string }>, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send("Invalid user ID");
    }

    const [userRes, postsRes] = await Promise.all([
      axios.get(`${API}/users/${id}`),
      axios.get(`${API}/users/${id}/posts`),
    ]);

    res.render("pages/user-details", {
      title: "User Details",
      user: userRes.data,
      posts: postsRes.data,
    });
  } catch (error) {
    console.error("❌ Error in userDetails:", error);
    res.status(500).send("Error fetching user details");
  }
}
