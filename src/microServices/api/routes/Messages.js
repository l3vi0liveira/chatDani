import Router from "express";
import controller from "../controller/Messages";

const routes = Router();

routes.post("/", controller.create);
routes.get("/", controller.show);
routes.put("/", controller.update);
routes.delete("/", controller.remove);

export default routes;
