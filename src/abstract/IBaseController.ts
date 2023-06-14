import IBaseRouteMethod from "./IBaseRouteMethod";

export default interface IBaseController {
    path: string;
    routes: IBaseRouteMethod[];
}