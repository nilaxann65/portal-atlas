import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "react-hook-form";


interface InputProps {
    label: string;
    register: any;
    error?: FieldError;
}

export const InputPassword = ({ label, register, error }: InputProps) => {
    return (
        <div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">{label}</Label>
                <Input
                    type="password"
                    id="password"
                    placeholder={label}
                    {...register}

                />
            </div>
            {error && <p className="text-sm text-muted-foreground">{error.message}</p>}
        </div>
    );
};