import IBaseEntity from "./IBaseEntity";

export interface IBaseEntityService<TNode extends IBaseEntity> {
    get(id: string): Promise<TNode>;
    getList(filter:any): Promise<TNode[]>;
    create(entity: TNode): Promise<TNode>;
    update(entity: TNode): Promise<TNode>;
    delete(id: string): Promise<boolean>;
}