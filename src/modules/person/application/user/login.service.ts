import { IResponse } from "@/modules/shared/response.type";
import { User } from "../../domain/entities/user.entity";
import { IUserRepository } from "../../domain/interfaces/IUserRepository.interface";

export async function loginService(userRepository: IUserRepository, user: User): Promise<IResponse<string>> {
    return await userRepository.login(user);
}