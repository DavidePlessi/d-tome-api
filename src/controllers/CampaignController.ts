import IBaseRouteMethod from "../abstract/IBaseRouteMethod";
import BaseEntityController from "./BaseEntityController";
import Campaign from "../entities/Campaign";
import CampaignService from "../services/CampaignService";

export default class CampaignController extends BaseEntityController<
    Campaign,
    CampaignService
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
            new CampaignService(),
            getFilterFromQuery,
            getEntityFromBody
        );
    }
}