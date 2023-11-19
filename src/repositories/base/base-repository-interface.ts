export abstract class BaseRepositoryInterface<T> {
  abstract save(payload: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findOne(id: string): Promise<T | null>;
  abstract get(): Promise<T[]>;
}
