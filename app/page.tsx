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
        <section className="relative w-full h-96 md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 text-balance">
                Find top-rated pros in your area.
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-white rounded-full p-2 shadow-lg">
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="flex-1 bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none"
                />
                <div className="flex items-center gap-2 px-2">
                  <span className="text-muted-foreground">📍</span>
                  <input
                    type="text"
                    placeholder="20004"
                    className="w-20 bg-transparent py-3 text-foreground placeholder:text-muted-foreground outline-none"
                  />
                </div>
                <Link href="/search">
                  <button className="bg-primary hover:bg-primary/90 text-white rounded-full p-3 flex-shrink-0 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Quick Links */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SERVICES.map((service) => (
              <Link key={service.id} href={`/search?service=${service.name.toLowerCase()}`}>
                <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg hover:bg-secondary/50 transition cursor-pointer">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <p className="text-sm font-medium text-foreground">{service.name}</p>
                </div>
              </Link>
            ))}
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
