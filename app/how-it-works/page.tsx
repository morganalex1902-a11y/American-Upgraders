import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">How ServiceHub Works</h1>
            <p className="text-xl text-muted-foreground">
              Get your project done in 4 easy steps with verified professionals
            </p>
          </div>
        </section>

        {/* Customer Journey */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">For Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                step: 1,
                title: "Post Your Project",
                description:
                  "Tell us what service you need, when you need it, and any details about your project. Takes just 2 minutes.",
                details: ["Describe the job", "Set your budget", "Choose your date"],
              },
              {
                step: 2,
                title: "Get Matched",
                description:
                  "We match you with 3-5 qualified providers. Browse their profiles, ratings, and previous work.",
                details: ["View provider profiles", "Check ratings & reviews", "Compare pricing"],
              },
              {
                step: 3,
                title: "Choose & Book",
                description:
                  "Select the provider that's right for you and book their services. Payment is secure and protected.",
                details: ["Select provider", "Confirm details", "Secure payment"],
              },
              {
                step: 4,
                title: "Get It Done",
                description: "Your provider shows up and completes the work. Rate and review when finished.",
                details: ["Service completed", "Rate & review", "Build provider history"],
              },
            ].map((item) => (
              <Card key={item.step} className="p-8 border border-border relative">
                <div className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-foreground text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Provider Journey */}
        <section className="bg-secondary/30 py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">For Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  step: 1,
                  title: "Sign Up & Verify",
                  description:
                    "Create your account and complete a quick verification process. Takes about 24-48 hours.",
                  details: ["Create account", "Pass background check", "Add services"],
                },
                {
                  step: 2,
                  title: "Build Your Profile",
                  description: "Add your services, rates, availability, and photos. Your profile is your storefront.",
                  details: ["Add services offered", "Set your rates", "Share portfolio"],
                },
                {
                  step: 3,
                  title: "Receive Requests",
                  description: "Get notifications about customers looking for your services in your area.",
                  details: ["View requests", "Accept jobs", "Communicate with customers"],
                },
                {
                  step: 4,
                  title: "Earn & Grow",
                  description: "Complete jobs, get paid securely, and build your reputation through positive reviews.",
                  details: ["Complete services", "Receive payments", "Build 5-star reviews"],
                },
              ].map((item) => (
                <Card key={item.step} className="p-8 border border-border relative">
                  <div className="absolute -left-6 -top-6 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-foreground text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button size="lg">Find a Service Provider</Button>
              </Link>
              <Link href="/provider/join">
                <Button size="lg" variant="outline" className="bg-transparent">
                  Become a Provider
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
