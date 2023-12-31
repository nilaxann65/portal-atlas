import type { Metadata } from 'next'
import { Navbar } from './_config/components/Navbar'

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
            <Navbar />
            <div className="p-1 mt-14 sm:ml-64 overflow-y-auto">
                {children}
            </div>
        </div >
    )
}
