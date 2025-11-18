import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import layouts from "express-ejs-layouts";
import usersRouter from "./routes/users";
import postsRouter from "./routes/posts";

const app = express();

const PORT = Number(process.env["PORT"] ?? 3000);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(layouts);
app.set("layout", "layout");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
