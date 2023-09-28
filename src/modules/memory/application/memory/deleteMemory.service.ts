import { IMemoryRepository } from "../../domain/interfaces/IMemoryRepository.interface";

export default function DeleteMemoryDataService(memoryService: IMemoryRepository): void {
    memoryService.deleteMemoryData();
}