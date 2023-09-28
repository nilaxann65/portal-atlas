import { Memory } from "../../domain/entities/memory.entity";
import { IMemoryRepository } from "../../domain/interfaces/IMemoryRepository.interface";

export default function GetMemoryDataService(memoryService: IMemoryRepository): Memory {
    return memoryService.getMemoryData();
}