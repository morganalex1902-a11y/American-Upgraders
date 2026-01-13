import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  { id: 1, name: "Plumbing", icon: "🔧", color: "from-blue-500 to-blue-600" },
  { id: 2, name: "Electrical", icon: "⚡", color: "from-yellow-500 to-yellow-600" },
  { id: 3, name: "HVAC", icon: "❄️", color: "from-cyan-500 to-cyan-600" },
  { id: 4, name: "Roofing", icon: "🏠", color: "from-orange-500 to-orange-600" },
  { id: 5, name: "Carpentry", icon: "🪵", color: "from-amber-600 to-amber-700" },
  { id: 6, name: "Painting", icon: "🎨", color: "from-pink-500 to-pink-600" },
  { id: 7, name: "Landscaping", icon: "🌿", color: "from-green-500 to-green-600" },
  { id: 8, name: "Cleaning", icon: "🧹", color: "from-purple-500 to-purple-600" },
]

const FEATURES = [
  {
    icon: Shield,
    title: "Verified Providers",
    description: "All providers are thoroughly vetted and insured for your peace of mind",
  },
  {
    icon: Clock,
    title: "Fast Booking",
    description: "Get matched with qualified providers and book services in minutes",
  },
  {
    icon: Star,
    title: "Trusted Reviews",
    description: "Read verified reviews from real customers before booking",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Our customer support team is always here to help",
  },
]

const POPULAR_SERVICES = [
  {
    title: "Plumbing Repair",
    description: "Fix leaks, clogs, and other plumbing issues",
    price: "Starting at $99",
    rating: 4.9,
    reviews: 2341,
  },
  {
    title: "Electrical Work",
    description: "Installations, repairs, and safety inspections",
    price: "Starting at $75",
    rating: 4.8,
    reviews: 1892,
  },
  {
    title: "Home Cleaning",
    description: "Professional cleaning for homes and offices",
    price: "Starting at $120",
    rating: 4.9,
    reviews: 3102,
  },
  {
    title: "Roof Inspection",
    description: "Comprehensive roof evaluations and repairs",
    price: "Starting at $199",
    rating: 4.7,
    reviews: 1245,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
                Find Expert Services
                <span className="text-primary"> When You Need Them</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Connect with verified service providers for all your home and business needs. Fast, reliable, and
                trusted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/search">
                  <Button size="lg" className="w-full sm:w-auto">
                    Find Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/provider/join">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Become a Provider
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🏗️</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose ServiceHub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="p-6 border border-border">
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Browse by Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link key={service.id} href={`/search?service=${service.name.toLowerCase()}`}>
                <Card className="p-6 border border-border hover:border-primary hover:shadow-lg transition cursor-pointer h-full flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Services */}
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {POPULAR_SERVICES.map((service) => (
                <Card key={service.title} className="p-6 border border-border hover:shadow-lg transition">
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-primary">{service.price}</p>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-foreground">{service.rating}</span>
                    <span className="text-xs text-muted-foreground">({service.reviews} reviews)</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Providers
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their perfect service provider on ServiceHub.
            </p>
            <Link href="/search">
              <Button size="lg">
                Browse Services Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
