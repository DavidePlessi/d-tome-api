import {IBaseEntityService} from "../abstract/IBaseEntityService";
import IBaseEntity from "../abstract/IBaseEntity";
import neo4jService from "./neo4jService";

export default class EntityService<TNode extends IBaseEntity> implements IBaseEntityService<TNode>{
    nodeLabel: string;
    async create(entity: TNode): Promise<TNode> {
        const query = `CREATE (n:${this.nodeLabel} $entity) RETURN n`;
        const params = {entity};
        const result = await neo4jService.write(query, params);
        if(result.records.length > 0) {
            return result.records.shift().get(0) as TNode;
        }
        return null;
    }

    async delete(id: string): Promise<boolean> {
        const query = `MATCH (n:${this.nodeLabel} {id: $id}) DELETE n`;
        const params = {id};
        await neo4jService.run(query, params);
        return true;
    }

    async get(id: string): Promise<TNode> {
        const query = `MATCH (n:${this.nodeLabel} {id: $id}) RETURN n`;
        const params = {id};
        const result = await neo4jService.read(query, params);
        return result.records.shift().get(0) as TNode;
    }

    getList(filter: any): Promise<TNode[]> {
        return Promise.resolve([]);
    }

    async update(entity: TNode): Promise<TNode> {
        const query = `MATCH (n:${this.nodeLabel} {id: $id}) SET n = $entity RETURN n`;
        const params = {entity};
        const result = await neo4jService.write(query, params);
        return result.records.shift().get(0) as TNode;
    }

    constructor(nodeLabel: string) {
        this.nodeLabel = nodeLabel;
    }
}