"use client";
import { loginService } from "@/modules/person/application/user/login.service";
import { User } from "@/modules/person/domain/entities/user.entity";
import { IUserRepository } from "@/modules/person/domain/interfaces/IUserRepository.interface";
import { IResponse } from "@/modules/shared/response.type";
import React, { useContext } from "react";

type ContextState = {
    login: (user: User) => Promise<IResponse<string>>;
};

export const LoginContext = React.createContext({} as ContextState);

export const LoginContextProvider = ({
    children,
    repository,
}: React.PropsWithChildren<{ repository: IUserRepository }>) => {
    const login = async (user: User): Promise<IResponse<string>> => {
        const response = await loginService(repository, user);
        return response;
    };

    return (
        <LoginContext.Provider value={{ login }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => useContext(LoginContext);