import Router from "express";
import Chats from "./Chats";
import Users from "./Users";
import Messages from "./Messages";

const routes = Router();

routes.get("/", (req, res) => res.json("Seja Bem vindo ao Ikatec Chat"));
routes.use("/chats", Chats);
routes.use("/users", Users);
routes.use("/messages", Messages);

export default routes;
