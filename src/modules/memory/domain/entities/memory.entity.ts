export interface Memory {
    token: string;
    props?: TokenProps;
}
export const tokenMemoryField = "token";

export interface TokenProps {
    userId: string;
    /**
     * Field extracted from external request
     */
    firstName?: string;
    /**
     * Field extracted from external request
     */
    lastName?: string;
    /**
     * Field extracted from external request
     */
    email?: string;
    companies: PermissionsProps[];
}

export interface PermissionsProps {
    companyId: string;
    companyName: string;
    role: string;
}