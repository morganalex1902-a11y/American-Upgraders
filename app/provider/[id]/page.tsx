import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, MapPin, Clock, Award, CheckCircle, MessageCircle, Phone } from "lucide-react"

// Mock data - in a real app this would come from a database
const PROVIDER_DATA = {
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
  description: "Expert plumber with 15+ years of experience in residential and commercial plumbing",
  about:
    "I'm a licensed and insured plumber with over 15 years of experience. I specialize in drain cleaning, leak repairs, pipe installation, and general plumbing maintenance. I pride myself on providing fast, professional service at competitive rates.",
  services: ["Drain Cleaning", "Leak Repair", "Pipe Installation", "Water Heater Repair", "Fixture Installation"],
  hours: "Monday - Sunday, 7:00 AM - 8:00 PM",
  phone: "(555) 123-4567",
  email: "john@johnsplumbing.com",
  reviews_list: [
    {
      author: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      text: "John was professional and got the job done quickly. Would definitely recommend!",
    },
    {
      author: "Michael T.",
      rating: 5,
      date: "1 month ago",
      text: "Great service at a fair price. Fixed our kitchen sink in under an hour.",
    },
    {
      author: "Lisa K.",
      rating: 4,
      date: "2 months ago",
      text: "Good work, very professional. Slightly higher than expected but worth it.",
    },
  ],
}

export default function ProviderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Provider Header */}
        <section className="bg-secondary/30 py-12 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-6 items-start">
              <div className="text-6xl">{PROVIDER_DATA.image}</div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground mb-2">{PROVIDER_DATA.name}</h1>
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="text-lg font-semibold text-foreground">{PROVIDER_DATA.rating}</span>
                    <span className="text-sm text-muted-foreground">({PROVIDER_DATA.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{PROVIDER_DATA.location}</span>
                  </div>
                  {PROVIDER_DATA.certified && (
                    <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-medium">Certified</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{PROVIDER_DATA.description}</p>
                <div className="flex gap-3 flex-wrap">
                  <Button>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    Book Now
                  </Button>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-3xl font-bold text-primary">{PROVIDER_DATA.price}</p>
                <p className="text-sm text-muted-foreground mt-2">Response: {PROVIDER_DATA.response}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About */}
              <Card className="p-6 border border-border mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground mb-6">{PROVIDER_DATA.about}</p>

                <h3 className="font-semibold text-foreground mb-3">Services Offered</h3>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {PROVIDER_DATA.services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-6 space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Service Hours</p>
                    <p className="font-semibold text-foreground">{PROVIDER_DATA.hours}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">{PROVIDER_DATA.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">{PROVIDER_DATA.email}</p>
                  </div>
                </div>
              </Card>

              {/* Reviews */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                  {PROVIDER_DATA.reviews_list.map((review, idx) => (
                    <div key={idx} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{review.author}</h4>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-6 border border-border sticky top-20">
                <h3 className="font-bold text-foreground mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Rating</p>
                      <p className="font-semibold text-foreground">{PROVIDER_DATA.rating}/5</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Response Time</p>
                      <p className="font-semibold text-foreground">{PROVIDER_DATA.response}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="font-semibold text-foreground">15+ years</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border mt-6 pt-6 space-y-3">
                  <Button className="w-full">Book This Provider</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Save Provider
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
