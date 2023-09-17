import { EntityBase } from "@/modules/shared/entity.base";

export interface User extends EntityBase {
    email: string;
    password: string;
}