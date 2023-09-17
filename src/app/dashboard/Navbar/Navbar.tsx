"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useTheme } from "next-themes";

export function Navbar() {
    const { setTheme, theme } = useTheme()

    return (
        <div className="border-b fixed top-0 left-0 w-full justify-between">
            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}>
                <div style={{
                    marginLeft: "2rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "2rem",
                }}>
                    <Link
                        href="/dashboard"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        OctoHub
                    </Link>
                    <Link
                        href="/examples/dashboard"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Customers
                    </Link>
                    <Link
                        href="/examples/dashboard"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Products
                    </Link>
                    <Link
                        href="/examples/dashboard"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                        Settings
                    </Link>
                </div>
                <div style={{
                    marginRight: "2rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem"
                }}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            >
                                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                            </Button>

                        </DropdownMenuTrigger>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>SC</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">shadcn</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        m@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Perfil
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Configuración
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Cerrar Sesión
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav >
        </div >
    )
}