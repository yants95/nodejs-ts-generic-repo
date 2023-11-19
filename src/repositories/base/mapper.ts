export abstract class Mapper<DomainModel, DbEntity> {
  abstract toDomain(entity: DbEntity): DomainModel;
  abstract toPersist(model: DomainModel): DbEntity;
}
