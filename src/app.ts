import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";

import usersRouter from "./routes/users";
import postsRouter from "./routes/posts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.set("layout", "layout");

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

export default app;
