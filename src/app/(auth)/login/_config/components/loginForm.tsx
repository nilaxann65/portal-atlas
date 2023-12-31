import { User } from "@/modules/person/domain/entities/user.entity";
import { useFormLogin } from "../hooks/useFormLogin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
    const { register, handleSubmit, errors, login } = useFormLogin();
    const { toast } = useToast();
    const router = useRouter();

    async function onSubmit(data: User) {
        try {
            const result = await login(data);
            if (result.status === 200) {
                toast({
                    title: "Sesión iniciada",
                    action: (
                        <ToastAction altText="Cerrar">Cerrar</ToastAction>
                    ),
                });
                router.push("/dashboard");
                return;
            }

            toast({
                title: "Error al iniciar sesión",
                description: "Verifica tus credenciales",
                action: (
                    <ToastAction altText="Cerrar">Cerrar</ToastAction>
                ),
            });

        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <Card className="w-96">
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
                        <Input
                            type="email"
                            id="email"
                            label="Email"
                            placeholder="Ingresa tu email"
                            {...register("email")}
                            error={errors?.email?.message}
                        />
                        <Input
                            type="password"
                            id="password"
                            label="Contraseña"
                            placeholder="Ingresa tu contraseña"
                            {...register("password")}
                            error={errors?.password?.message}
                        />


                    </div>
                    <div className="flex justify-between mt-1">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="rememberme" />
                            <Label htmlFor="rememberme">Recuerdame</Label>
                        </div>
                        <Link href="/dashboard" style={{ textDecoration: 'underline' }} className="text-sm">
                            ¿Olvidaste tu contraseña?
                        </Link>
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