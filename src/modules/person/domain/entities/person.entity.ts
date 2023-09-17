import { EntityBase } from "@/modules/shared/entity.base";
import { User } from "./user.entity";

export interface Person extends EntityBase {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    user?: User;
}