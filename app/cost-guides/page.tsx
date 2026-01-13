import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

const COST_GUIDES = [
  {
    service: "Plumbing",
    guides: [
      { task: "Drain Cleaning", cost: "$100 - $300", time: "1-2 hours" },
      { task: "Leak Repair", cost: "$150 - $400", time: "1-3 hours" },
      { task: "Pipe Installation", cost: "$500 - $2,000", time: "4-8 hours" },
      { task: "Water Heater Repair", cost: "$200 - $500", time: "2-4 hours" },
      { task: "Fixture Installation", cost: "$150 - $600", time: "1-3 hours" },
    ],
  },
  {
    service: "Electrical",
    guides: [
      { task: "Outlet Installation", cost: "$75 - $200", time: "1 hour" },
      { task: "Light Fixture Install", cost: "$100 - $300", time: "1-2 hours" },
      { task: "Panel Upgrade", cost: "$1,500 - $3,000", time: "4-8 hours" },
      { task: "Wiring Repair", cost: "$150 - $400", time: "2-3 hours" },
      { task: "Safety Inspection", cost: "$100 - $250", time: "1-2 hours" },
    ],
  },
  {
    service: "HVAC",
    guides: [
      { task: "System Maintenance", cost: "$100 - $200", time: "1 hour" },
      { task: "Filter Replacement", cost: "$50 - $150", time: "30 mins" },
      { task: "Repair Service", cost: "$150 - $500", time: "1-3 hours" },
      { task: "System Upgrade", cost: "$3,000 - $7,000", time: "1-2 days" },
      { task: "Thermostat Install", cost: "$150 - $400", time: "1-2 hours" },
    ],
  },
  {
    service: "Home Cleaning",
    guides: [
      { task: "Regular Cleaning", cost: "$120 - $300", time: "2-4 hours" },
      { task: "Deep Cleaning", cost: "$200 - $500", time: "4-6 hours" },
      { task: "Move-in/Move-out", cost: "$300 - $800", time: "6-8 hours" },
      { task: "Carpet Cleaning", cost: "$150 - $400", time: "2-3 hours" },
      { task: "Window Cleaning", cost: "$100 - $300", time: "2-4 hours" },
    ],
  },
]

export default function CostGuidesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Service Cost Guides</h1>
            <p className="text-xl text-muted-foreground">
              Get an idea of typical costs for common home services in your area
            </p>
          </div>
        </section>

        {/* Cost Guides */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            {COST_GUIDES.map((guide) => (
              <div key={guide.service}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{guide.service}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guide.guides.map((item) => (
                    <Card key={item.task} className="p-6 border border-border">
                      <h3 className="font-bold text-foreground mb-3">{item.task}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Typical Cost</span>
                          <span className="font-bold text-primary">{item.cost}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Typical Time</span>
                          <span className="font-semibold text-foreground">{item.time}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <Card className="p-6 border border-border mt-16 bg-secondary/30">
            <h3 className="font-bold text-foreground mb-2">Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              These are estimated costs based on typical projects. Actual costs may vary depending on location,
              complexity, materials, and the specific provider. Get personalized quotes from verified providers on
              ServiceHub to get accurate pricing for your project.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
