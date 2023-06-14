import Campaign from "../entities/Campaign";
import EntityService from "./EntityService";

export default class CampaignService extends EntityService<Campaign> {
    constructor() {
        super('Campaign');
    }
}