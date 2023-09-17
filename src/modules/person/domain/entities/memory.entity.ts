import { Person } from "./person.entity";

export interface Memory {
    token: string;
    props?: TokenProps;
}

export interface TokenProps {
    idUser: string;
    firstName: string;
    lastName: string;
}