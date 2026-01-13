import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Star, MapPin, Clock, CheckCircle } from "lucide-react"

const PROVIDERS = [
  {
    id: 1,
    name: "John's Plumbing",
    service: "Plumbing",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 234,
    price: "$99/hr",
    response: "2 hours",
    certified: true,
    image: "🔧",
    description: "Expert plumber with 15+ years of experience",
  },
  {
    id: 2,
    name: "Pro Plumbing Services",
    service: "Plumbing",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 189,
    price: "$85/hr",
    response: "4 hours",
    certified: true,
    image: "🔧",
    description: "Licensed and insured plumbing company",
  },
  {
    id: 3,
    name: "QuickFix Plumbing",
    service: "Plumbing",
    location: "San Francisco, CA",
    rating: 4.7,
    reviews: 145,
    price: "$75/hr",
    response: "6 hours",
    certified: false,
    image: "🔧",
    description: "Fast and reliable plumbing repairs",
  },
  {
    id: 4,
    name: "Neighborhood Plumbers",
    service: "Plumbing",
    location: "San Francisco, CA",
    rating: 4.6,
    reviews: 98,
    price: "$80/hr",
    response: "3 hours",
    certified: true,
    image: "🔧",
    description: "Local family-owned plumbing business",
  },
]

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Filters and Results */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64">
              <Card className="p-6 border border-border sticky top-20">
                <h3 className="font-bold text-foreground mb-4">Filters</h3>

                <div className="space-y-6">
                  {/* Rating Filter */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Rating</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm text-foreground">4.5+ stars</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-foreground">4.0+ stars</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-foreground">3.5+ stars</span>
                      </label>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Price Range</h4>
                    <input type="range" min="50" max="200" className="w-full" />
                    <p className="text-xs text-muted-foreground mt-2">$50 - $200+</p>
                  </div>

                  {/* Certification */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Certification</h4>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">Certified Only</span>
                    </label>
                  </div>

                  {/* Response Time */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Response Time</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-foreground">Under 2 hours</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-foreground">Under 6 hours</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Results */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Plumbing Services</h2>
                <select className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
                  <option>Best Match</option>
                  <option>Highest Rating</option>
                  <option>Lowest Price</option>
                  <option>Fastest Response</option>
                </select>
              </div>

              <div className="space-y-4">
                {PROVIDERS.map((provider) => (
                  <Card key={provider.id} className="p-6 border border-border hover:shadow-lg transition">
                    <div className="flex gap-4">
                      <div className="text-5xl flex-shrink-0">{provider.image}</div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{provider.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{provider.description}</p>
                            <div className="flex items-center gap-4 mb-3 flex-wrap">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span className="text-sm font-semibold text-foreground">{provider.rating}</span>
                                <span className="text-xs text-muted-foreground">({provider.reviews})</span>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">{provider.location}</span>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm">{provider.response}</span>
                              </div>
                              {provider.certified && (
                                <div className="flex items-center gap-1 text-primary">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm font-medium">Certified</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="text-right flex-shrink-0">
                            <p className="text-2xl font-bold text-primary mb-3">{provider.price}</p>
                            <Link href={`/provider/${provider.id}`}>
                              <Button size="sm">View Profile</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
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
