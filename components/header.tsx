"use client"

import Link from "next/link"
import { Menu, User, MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)

  const megaMenus = {
    interior: {
      services: [
        "Flooring Installation & Repair",
        "Kitchen Remodeling",
        "Bathroom Remodeling",
        "Painting",
        "Drywall & Insulation",
        "Door & Window Installation",
        "Tile Installation",
        "Cabinet Installation",
      ],
      articles: [
        { title: "How Much Does Kitchen Remodeling Cost?", image: "🏠" },
        { title: "Bathroom Remodeling Cost Guide 2025", image: "🚿" },
        { title: "Interior Painting Cost Expectations", image: "🎨" },
      ],
    },
    exterior: {
      services: [
        "Roofing",
        "Siding Installation",
        "Gutter Services",
        "Deck Building",
        "Driveway & Patio",
        "Door Installation",
        "Window Replacement",
        "Weatherproofing",
      ],
      articles: [
        { title: "How Much Does Roof Replacement Cost?", image: "🏚️" },
        { title: "Driveway Paving Cost Guide", image: "🛣️" },
        { title: "Deck Building Cost Estimate", image: "🪵" },
      ],
    },
    lawn: {
      services: [
        "Lawn Care & Maintenance",
        "Tree Service",
        "Landscaping",
        "Irrigation Systems",
        "Mulch Installation",
        "Garden Design",
        "Leaf Removal",
        "Snow Removal",
      ],
      articles: [
        { title: "How Much Does Tree Service Cost?", image: "🌳" },
        { title: "Professional Landscaping Cost Guide", image: "🌿" },
        { title: "Lawn Care & Maintenance Pricing", image: "🌱" },
      ],
    },
    more: {
      services: [
        "Plumbing",
        "Electrical",
        "HVAC",
        "Appliance Repair",
        "Handyman Services",
        "Pest Control",
        "Cleaning Services",
        "Moving Services",
      ],
      articles: [
        { title: "Plumbing Repair Cost Breakdown", image: "🔧" },
        { title: "Electrical Work Pricing Guide", image: "⚡" },
        { title: "HVAC Maintenance & Repair Costs", image: "❄️" },
      ],
    },
  }

  const navItems = [
    { label: "Interior", key: "interior" },
    { label: "Exterior", key: "exterior" },
    { label: "Lawn & Garden", key: "lawn" },
    { label: "More", key: "more" },
    { label: "Articles & Advice", key: null },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
              AU
            </div>
            <span className="hidden text-lg font-bold text-foreground sm:inline">American Upgraders</span>
          </Link>

          {/* Desktop Navigation with Mega Menus */}
          <nav className="hidden gap-1 md:flex relative">
            {navItems.map((item) => (
              <div key={item.key || "advice"} className="relative group">
                <button
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-1 relative"
                  onMouseEnter={() => item.key && setOpenMegaMenu(item.key)}
                  onMouseLeave={() => setOpenMegaMenu(null)}
                >
                  {item.label}
                  {item.key && <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </button>

                {/* Mega Menu Dropdown */}
                {item.key && (
                  <div
                    className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-max"
                    onMouseEnter={() => setOpenMegaMenu(item.key!)}
                    onMouseLeave={() => setOpenMegaMenu(null)}
                  >
                    <div className="mt-0 bg-white rounded-lg shadow-lg border border-border p-8 animate-in fade-in slide-in-from-top-2">
                      <div className="flex gap-12">
                        {/* Left Column - Services (60%) */}
                        <div className="w-80">
                          <h3 className="font-semibold text-foreground mb-4 text-sm">Find a pro</h3>
                          <ul className="space-y-3">
                            {megaMenus[item.key as keyof typeof megaMenus]?.services.map((service, idx) => (
                              <li key={idx}>
                                <a
                                  href={`/search?service=${service.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm text-muted-foreground hover:text-primary transition"
                                >
                                  {service}
                                </a>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/providers"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition mt-4 inline-block"
                          >
                            View all →
                          </Link>
                        </div>

                        {/* Right Column - Articles (40%) */}
                        <div className="w-64">
                          <h3 className="font-semibold text-foreground mb-4 text-sm">Research & plan</h3>
                          <ul className="space-y-4">
                            {megaMenus[item.key as keyof typeof megaMenus]?.articles.map((article, idx) => (
                              <li key={idx}>
                                <a href="/cost-guides" className="flex gap-3 hover:opacity-80 transition">
                                  <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                                    {article.image}
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-xs font-medium text-foreground line-clamp-2 hover:text-primary">
                                      {article.title}
                                    </p>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/cost-guides"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition mt-4 inline-block"
                          >
                            View all →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/my-projects"
              className="hidden lg:flex text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              My Projects
            </Link>
            <button className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              <MessageSquare className="h-4 w-4" />
              Inbox
            </button>
            <Link href="/provider/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Hi Davis</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.key || "advice"}>
                  <Link
                    href={item.key ? `/search?type=${item.key}` : "/cost-guides"}
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <hr className="my-2" />
              <Link
                href="/my-projects"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              >
                My Projects
              </Link>
              <Link
                href="/provider/dashboard"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded"
              >
                Provider Dashboard
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
