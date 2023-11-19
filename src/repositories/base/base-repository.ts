import { BaseRepositoryInterface } from "@/repositories/base/base-repository-interface";
import { Mapper } from "@/repositories/base/mapper";
import { db } from "@/repositories/base/pg-connection";

import {
  EntityTarget,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from "typeorm";

export abstract class PostgresBaseRepository<M, E extends ObjectLiteral>
  implements BaseRepositoryInterface<M>
{
  protected readonly model: Repository<E>;

  constructor(
    entity: EntityTarget<E>,
    protected readonly mapper: Mapper<M, E>,
  ) {
    this.model = db.getRepository(entity);
  }

  async save(payload: M): Promise<void> {
    const record = this.mapper.toPersist(payload);

    await this.model.save(record);
  }

  async delete(id: string): Promise<void> {
    await this.model.delete(id);
  }

  async get(): Promise<M[]> {
    const records = await this.model.find();

    return records.map(this.mapper.toDomain);
  }

  async findOne(id: string): Promise<M | null> {
    const record = await this.model.findOneBy({
      id,
    } as unknown as FindOptionsWhere<E>);

    if (!record) return null;

    return this.mapper.toDomain(record);
  }
}
