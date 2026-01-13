"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function ProviderLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md p-8 border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-2">Provider Login</h1>
          <p className="text-muted-foreground mb-8">Access your service business dashboard</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <Link href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>

            <Link href="/provider/dashboard">
              <Button className="w-full">Sign In</Button>
            </Link>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Don't have an account?{" "}
              <Link href="/provider/signup" className="text-primary hover:underline font-medium">
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">Looking for services?</p>
            <Link href="/login" className="text-sm text-primary hover:underline font-medium">
              Customer login
            </Link>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
