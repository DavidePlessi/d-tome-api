import IBaseRouteMethod from "../abstract/IBaseRouteMethod";
import AttributesGroupService from "../services/AttributesGroupService";
import AttributesGroup from "../entities/AttributesGroup";
import BaseEntityController from "./BaseEntityController";

export default class AttributesGroupController extends BaseEntityController<
    AttributesGroup,
    AttributesGroupService
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
            new AttributesGroupService(),
            getFilterFromQuery,
            getEntityFromBody
        );
    }
}