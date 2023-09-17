import { Memory } from "../domain/entities/memory.entity";
import { IMemoryRepository } from "../domain/interfaces/IMemoryRepository.interface";

export const createMemoryRepository = (): IMemoryRepository => ({
    getMemoryData,
    setMemoryData,
    deleteMemoryData,
});

function getMemoryData(): Memory {
    const obj: Memory = {
        token: "1234567890",
    };
    return obj;
}

function setMemoryData(person: Memory): void {
    console.log(person);
}

function deleteMemoryData(): void {
    console.log("Memory data deleted");
}