import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function NavbarUser() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar variant="button">
                        <AvatarFallback>
                            ST
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">shadcn</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    m@example.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuItem>
                            Gestionar cuenta
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Configuración Personal
                        </DropdownMenuItem>
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue={theme}
                        >
                            <AccordionItem value="light">
                                <AccordionTrigger className="m-0 text-sm font-normal">
                                    Tema
                                </AccordionTrigger>
                                <AccordionContent>
                                    <DropdownMenuItem
                                        className={theme === "light" ? "font-semibold" : ""}
                                        onClick={() => setTheme("light")}
                                    >
                                        Claro
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className={theme === "dark" ? "font-semibold" : ""}
                                        onClick={() => setTheme("dark")}
                                    >
                                        Oscuro
                                    </DropdownMenuItem>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Cerrar Sesión
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}