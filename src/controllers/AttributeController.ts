import BaseEntityController from "./BaseEntityController";
import Attribute from "../entities/Attribute";
import AttributeService from "../services/AttributeService";
import IBaseRouteMethod from "../abstract/IBaseRouteMethod";

export default class AttributeController extends BaseEntityController<
    Attribute,
    AttributeService
> {
    constructor(
        path: string,
        routes: IBaseRouteMethod[],
        getFilterFromQuery: (body: any) => any,
        getEntityFromBody: (body: any) => any
    ) {
        super(
            path,
            routes,
            new AttributeService(),
            getFilterFromQuery,
            getEntityFromBody
        );
    }
}