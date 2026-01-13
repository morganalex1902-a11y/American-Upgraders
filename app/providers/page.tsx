import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"

const FEATURED_PROVIDERS = [
  {
    id: 1,
    name: "John's Plumbing",
    service: "Plumbing",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 234,
    price: "$99/hr",
    response: "2 hours",
    image: "🔧",
    description: "Expert plumber with 15+ years of experience",
  },
  {
    id: 2,
    name: "ElectroExperts",
    service: "Electrical",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 189,
    price: "$85/hr",
    response: "3 hours",
    image: "⚡",
    description: "Licensed electricians for residential & commercial",
  },
  {
    id: 3,
    name: "Fresh Home Cleaning",
    service: "Cleaning",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 312,
    price: "$120/service",
    response: "4 hours",
    image: "🧹",
    description: "Professional cleaning team serving SF area",
  },
  {
    id: 4,
    name: "Roof Masters",
    service: "Roofing",
    location: "San Francisco, CA",
    rating: 4.7,
    reviews: 156,
    price: "$200+",
    response: "Same day",
    image: "🏠",
    description: "Roofing repair & installation specialists",
  },
  {
    id: 5,
    name: "HVAC Pro Solutions",
    service: "HVAC",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 201,
    price: "$150/hr",
    response: "2 hours",
    image: "❄️",
    description: "Heating & cooling system experts",
  },
  {
    id: 6,
    name: "Carpenter's Corner",
    service: "Carpentry",
    location: "San Francisco, CA",
    rating: 4.6,
    reviews: 98,
    price: "$110/hr",
    response: "5 hours",
    image: "🪵",
    description: "Custom carpentry & renovation services",
  },
]

const CATEGORIES = [
  { name: "Plumbing", count: 234 },
  { name: "Electrical", count: 189 },
  { name: "HVAC", count: 156 },
  { name: "Roofing", count: 145 },
  { name: "Carpentry", count: 128 },
  { name: "Painting", count: 112 },
  { name: "Landscaping", count: 98 },
  { name: "Cleaning", count: 312 },
]

export default function ProvidersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Browse Our Trusted Providers</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover verified service professionals ready to help with your project
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64">
              <Card className="p-6 border border-border sticky top-20">
                <h3 className="font-bold text-foreground mb-4">Filter by Service</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.name}
                      href={`/search?service=${cat.name.toLowerCase()}`}
                      className="block p-2 rounded hover:bg-secondary transition text-foreground text-sm"
                    >
                      <div className="flex justify-between">
                        <span>{cat.name}</span>
                        <span className="text-muted-foreground">({cat.count})</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">Featured Providers</h2>
                <select className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
                  <option>Top Rated</option>
                  <option>Most Reviews</option>
                  <option>Newest</option>
                  <option>Lowest Price</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FEATURED_PROVIDERS.map((provider) => (
                  <Link key={provider.id} href={`/provider/${provider.id}`}>
                    <Card className="p-6 border border-border hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                      <div className="flex gap-4 mb-4">
                        <div className="text-4xl">{provider.image}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground text-lg">{provider.name}</h3>
                          <p className="text-sm text-muted-foreground">{provider.service}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 flex-1">{provider.description}</p>

                      <div className="space-y-3 border-t border-border pt-4">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span className="font-semibold text-foreground">{provider.rating}</span>
                            <span className="text-muted-foreground">({provider.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{provider.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">Starting at</p>
                            <p className="font-bold text-primary">{provider.price}</p>
                          </div>
                          <div className="text-right text-xs">
                            <p className="text-muted-foreground">Responds in</p>
                            <p className="font-semibold text-foreground">{provider.response}</p>
                          </div>
                        </div>

                        <Button className="w-full">View Profile</Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
