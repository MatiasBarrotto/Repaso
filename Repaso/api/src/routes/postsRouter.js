const { Router } = require("express");
const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.send("NIY: ESTA RUTA TRAE LA INFO DE TODOS LOS POSTS");
});
postsRouter.get("/:id", (req, res) => {
    res.send("NIY: ESTA RUTA TRAE LA INFO DE UN POST DETERMINADO POR ID");
});
postsRouter.post("/", (req, res) => {
    res.send("NIY: ESTA RUTA CREA UN NUEVO POST");
});

module.exports = postsRouter;