"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input placeholder="Enter your name" />
      <Button>Click me</Button>
    </main>
  )
}
