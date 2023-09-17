"use client";
import { createUserRepository } from "@/modules/person/infrastructure/createUserRepository";
import LoginForm from "@/sections/login/components/loginForm";
import { LoginContextProvider } from "@/sections/login/context/loginContext";

export default function LoginPage() {
    const repository = createUserRepository();
    return (
        <LoginContextProvider repository={repository} >
            <div className="flex flex-col items-center justify-center h-screen">
                <LoginForm />
            </div>
        </LoginContextProvider>
    );
}