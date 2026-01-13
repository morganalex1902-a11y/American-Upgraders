import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

const BENEFITS = [
  "Grow your business with more customer leads",
  "Set your own rates and availability",
  "Secure payments and reliable customers",
  "Professional support every step of the way",
  "Build your reputation with customer reviews",
  "Access to marketing opportunities",
]

const REQUIREMENTS = [
  "18+ years old",
  "Valid driver's license or ID",
  "Business insurance (if applicable)",
  "Background check clearance",
  "Professional experience in your field",
  "Valid bank account for payments",
]

export default function ProviderJoinPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Grow Your Service Business</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join ServiceHub and connect with thousands of customers looking for your services
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Benefits of Joining</h2>
              <div className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-bold text-foreground mb-4">Perfect for:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Established service professionals</li>
                  <li>✓ Contractors and tradespeople</li>
                  <li>✓ Home service companies</li>
                  <li>✓ Solo operators and teams</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <Card className="p-8 border border-border sticky top-20">
                <h3 className="text-2xl font-bold text-foreground mb-6">Start Your Journey</h3>

                {/* Step Indicators */}
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Create Account</p>
                      <p className="text-sm text-muted-foreground">Sign up with your details</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/30 text-primary flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Verify Information</p>
                      <p className="text-sm text-muted-foreground">Complete background check</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/30 text-primary flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Build Profile</p>
                      <p className="text-sm text-muted-foreground">Add services and availability</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/30 text-primary flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Go Live</p>
                      <p className="text-sm text-muted-foreground">Start receiving customer requests</p>
                    </div>
                  </div>
                </div>

                <Link href="/provider/signup" className="block mb-4">
                  <Button size="lg" className="w-full">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/provider/login" className="block">
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    Sign In
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">Takes about 5 minutes to get started</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <section className="bg-secondary/30 py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REQUIREMENTS.map((req) => (
                <Card key={req} className="p-6 border border-border flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-semibold text-foreground">{req}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">How much does it cost to join?</h3>
              <p className="text-muted-foreground">
                ServiceHub is free to join. We charge a small commission on bookings you complete through our platform.
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">How long does verification take?</h3>
              <p className="text-muted-foreground">
                Most providers are verified within 24-48 hours. We'll notify you once your account is ready to go live.
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">Can I set my own rates?</h3>
              <p className="text-muted-foreground">
                Yes! You have complete control over your rates, availability, and which requests you accept.
              </p>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">What if I need insurance?</h3>
              <p className="text-muted-foreground">
                We can help you find affordable insurance options. Some service types require insurance for platform
                access.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
