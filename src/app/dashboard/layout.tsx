import type { Metadata } from 'next'
import { Navbar } from './Navbar/Navbar'

export const metadata: Metadata = {
    title: 'Bienvenido',
    description: 'Generated by monkeys',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <Navbar />
                {children}
            </div>
        </div>
    )
}