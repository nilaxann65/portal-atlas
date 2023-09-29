"use client";

import React, { createContext } from "react"

type ContextState = {
    userPermissions: string[];
    setUserPermissions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AppContext = createContext({} as ContextState);

export const AppContextProvider = ({
    children
}: React.PropsWithChildren) => {
    const [userPermissions, setUserPermissions] = React.useState<string[]>([]);

    return (
        <AppContext.Provider value={{ userPermissions, setUserPermissions }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);