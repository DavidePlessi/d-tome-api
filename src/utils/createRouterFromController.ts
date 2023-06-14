import IBaseController from "../abstract/IBaseController";
import {Router} from "express";

export default function createRouterFromController(controller: IBaseController, router?: Router) {
    router = router || Router();
    controller.routes.forEach(route => {
        router[route.method](
            route.path,
            ...(route.middlewares || []),
            route.handler
        );
    });
    return router;

}