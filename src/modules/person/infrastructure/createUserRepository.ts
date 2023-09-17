import { IResponse } from "@/modules/shared/response.type";
import { User } from "../domain/entities/user.entity";
import { IUserRepository } from "../domain/interfaces/IUserRepository.interface";

export const createUserRepository = (): IUserRepository => ({
    login
});

async function login(user: User): Promise<IResponse<string>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response: IResponse<string> = {
                status: 200,
                message: "Login successfully",
                data: "token",
                errors: []
            };
            resolve(response);
        }, 1000);
    });
}