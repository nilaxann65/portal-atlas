import { IResponse } from "@/modules/shared/response.type";
import { User } from "../entities/user.entity";

export interface IUserRepository {
    login(user: User): Promise<IResponse<string>>;
}