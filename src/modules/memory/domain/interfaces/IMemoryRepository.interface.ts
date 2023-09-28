import { Memory } from "../entities/memory.entity";

export interface IMemoryRepository {
    getMemoryData(): Memory;
    setTokenInMemory(memory: Memory): void;
    deleteMemoryData(): void;
}