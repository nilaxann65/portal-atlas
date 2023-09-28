import { Memory } from "../../domain/entities/memory.entity";
import { IMemoryRepository } from "../../domain/interfaces/IMemoryRepository.interface";

export default function SetMemoryDataService(memoryService: IMemoryRepository, memory: Memory): void {
    memoryService.setTokenInMemory(memory);
}