"use client";
import { Memory } from "@/modules/memory/domain/entities/memory.entity";
import { createMemoryRepository } from "@/modules/memory/infrastructure/createMemoryRepository";
import React, { useEffect } from "react";

type ContextState = {
    memory: Memory | null;
    setMemoryData: (token: string) => void;
    deleteMemory: () => void;
}

export const InitContext = React.createContext({} as ContextState);

export const InitContextProvider = ({ children }) => {
    const [memory, setMemory] = React.useState<Memory | null>(null);
    const repository = createMemoryRepository();

    function deleteMemory() {
        repository.deleteMemoryData();
    }

    function setMemoryData(token: string) {
        repository.setTokenInMemory({ token });
        const data = repository.getMemoryData();
        setMemory(data);
    }

    useEffect(() => {
        if (repository.getMemoryData())
            setMemory(repository.getMemoryData());
        else
            setMemory(null);

    }, []);

    return (
        <InitContext.Provider value={{ memory, setMemoryData, deleteMemory }}>
            {children}
        </InitContext.Provider>
    );
}

export const useInitContext = () => React.useContext(InitContext);