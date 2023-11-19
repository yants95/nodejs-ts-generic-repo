export interface BaseRepositoryInterface<T> {
  find(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  save(item: T): Promise<void>;
  delete(id: string): Promise<void>;
}