const { Router } = require("express");
const { get } = require("./postsRouter");
const {getUsersHandler, getUserHandler, createUserHandle} = require("../handlers/userHandlers")

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserHandler);

usersRouter.post("/", createUserHandle);

module.exports = usersRouter;