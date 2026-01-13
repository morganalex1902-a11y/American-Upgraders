import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const SERVICES = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Roofing",
  "Carpentry",
  "Painting",
  "Landscaping",
  "Cleaning",
  "General Repairs",
  "Flooring",
]

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Search Form */}
        <section className="bg-secondary/30 py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">Find the Right Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Type</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a service...</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Enter your zip code or address"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex items-end">
                <Link href="/search/results" className="w-full">
                  <Button className="w-full">Search</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Categories */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICES.map((service) => (
              <Link key={service} href={`/search/results?service=${service.toLowerCase()}`}>
                <Card className="p-4 border border-border hover:border-primary hover:shadow-lg transition cursor-pointer text-center">
                  <h3 className="font-semibold text-foreground">{service}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tell Us What You Need</h3>
                <p className="text-sm text-muted-foreground">Describe your project in detail</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Get Matched</h3>
                <p className="text-sm text-muted-foreground">Receive quotes from qualified providers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Compare & Choose</h3>
                <p className="text-sm text-muted-foreground">Review ratings and select your provider</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">Book & Relax</h3>
                <p className="text-sm text-muted-foreground">Schedule and track your service</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
