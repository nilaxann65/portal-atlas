'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { menus } from '@/lib/menus';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTheme } from 'next-themes';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { push } = useRouter();

    return (
        <>
            <nav className="fixed top-0 z-50 w-full border-b bg-popover border-gray-200 dark:border-gray-700 ">
                <div className="flex items-center justify-between px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-start">
                        <Button variant="ghost" className="inline-flex items-center p-2 sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </Button>
                        <Link href="/" className="flex ml-2 md:mr-24">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Octohub</span>
                        </Link>
                    </div>
                    <div className="flex items-center ml-3">
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
                    </div>
                </div>
            </nav >

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-popover ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } border-r border-gray-200 sm:translate-x-0 dark:border-gray-700`}
            >
                <div className="h-full px-3 pb-4 overflow-y-auto ">
                    <Accordion
                        type="multiple"
                        defaultValue={menus.map(menu => menu.name)}
                        className="space-y-2 font-medium w-full"
                    >
                        {
                            menus.map(menu => (
                                <AccordionItem
                                    value={menu.name}
                                    key={menu.name}
                                >
                                    <AccordionTrigger>{menu.name}</AccordionTrigger>
                                    <AccordionContent>
                                        {
                                            menu.items.map(item => (
                                                <Button
                                                    variant="ghost"
                                                    className="w-full flex justify-between"
                                                    onClick={() => push(item.slug)}
                                                >
                                                    <span className="text-left">
                                                        {item.name}
                                                    </span>
                                                </Button>
                                            ))
                                        }
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </aside>
        </>
    );
}