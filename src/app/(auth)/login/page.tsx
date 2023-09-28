"use client";
import { createUserRepository } from "@/modules/person/infrastructure/createUserRepository";
import LoginForm from "./_config/components/loginForm";
import { LoginContextProvider } from "./_config/context/loginContext";

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