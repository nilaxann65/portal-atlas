import { Memory, TokenProps, tokenMemoryField } from "../domain/entities/memory.entity";
import { IMemoryRepository } from "../domain/interfaces/IMemoryRepository.interface";
import { decode } from 'jsonwebtoken'

export const createMemoryRepository = (): IMemoryRepository => ({
    getMemoryData,
    setTokenInMemory,
    deleteMemoryData,
});

function getMemoryData(): Memory | by {
    const token = getToken();
    const decodedToken = decode(token) as TokenProps;
    if (!decodedToken)
        return;

    return {
        token,
        props: decodedToken
    }
}

function getToken(): string {
    return localStorage.getItem(tokenMemoryField) || "";
}

function setTokenInMemory(memory: Memory): void {
    localStorage.setItem(tokenMemoryField, memory.token);
}

function deleteMemoryData(): void {
    localStorage.removeItem(tokenMemoryField);
}