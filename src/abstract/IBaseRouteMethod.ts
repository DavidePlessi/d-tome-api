import {Request, Response, NextFunction} from "express";

export default interface IBaseRouteMethod {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    middlewares?: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[];
    handler: (req: Request, res: Response) => Promise<void>;
}