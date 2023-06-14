import {Router} from "express";
import availableControllers from "../../controllers";
import createRouterFromController from "../../utils/createRouterFromController";

const router = Router();
for(const controller of availableControllers) {
    router.use(controller.path, createRouterFromController(controller));
}
export default router;