import { Memory } from "../entities/memory.entity";

export interface IMemoryRepository {
    getMemoryData(): Memory;
    setMemoryData(person: Memory): void;
    deleteMemoryData(): void;
}