"use client";

import { User } from "@/modules/person/domain/entities/user.entity";
import { useFormLogin } from "../hooks/useFormLogin";
import { InputEmail } from "@/lib/components/InputEmail";
import { InputPassword } from "@/lib/components/InputPassword";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";

export default function LoginForm() {
    const { register, handleSubmit, errors, reset, login } = useFormLogin();

    async function onSubmit(data: User) {
        try {
            const result = await login(data);
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
        reset();
    }
    return (
        <Card style={{
            width: "25rem"
        }} >
            <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <CardHeader>
                    <CardTitle>
                        OctoHub Login
                    </CardTitle>
                    <CardDescription>
                        Inicia sesión para continuar
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <InputEmail
                            label="Email"
                            register={register("email")}
                            error={errors?.email}
                        />
                        <InputPassword
                            label="Contraseña"
                            register={register("password")}
                            error={errors?.password}
                        />
                    </div>
                    <div className="flex justify-between mt-1">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="rememberme" />
                            <Label htmlFor="rememberme">Recuerdame</Label>
                        </div>
                        <div>
                            <Label htmlFor="forgotpassword" style={{ textDecoration: 'underline' }}>¿Olvidaste tu contraseña?</Label>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                        Registrate
                    </Button>
                    <Button type="submit" size="sm">
                        Iniciar Sesión
                    </Button>
                </CardFooter>
            </form >
        </Card>
    );
}