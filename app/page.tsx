import { Header } from "@/components/header"
import Link from "next/link"

const SERVICES = [
  { id: 1, name: "Plumbing", icon: "🔧" },
  { id: 2, name: "Electrical", icon: "⚡" },
  { id: 3, name: "HVAC", icon: "❄️" },
  { id: 4, name: "Roofing", icon: "🏠" },
  { id: 5, name: "Carpentry", icon: "🪵" },
  { id: 6, name: "Painting", icon: "🎨" },
  { id: 7, name: "Landscaping", icon: "🌿" },
  { id: 8, name: "Cleaning", icon: "🧹" },
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

        {/* Most In-Demand Services */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Most in-demand home services in <span className="text-primary">20004</span>
          </h2>
          <p className="text-muted-foreground mb-8">Don't miss your chance to book a pro</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Cleaning & Maid Services", icon: "🧹", interested: 1240 },
              { name: "Painting", icon: "🎨", interested: 892 },
              { name: "Handyman Service", icon: "🔨", interested: 1567 },
              { name: "Plumbing", icon: "🔧", interested: 2134 },
              { name: "Addition and Remodeling", icon: "🏗️", interested: 654 },
              { name: "Roofing", icon: "🏠", interested: 543 },
              { name: "Window Service", icon: "🪟", interested: 432 },
              { name: "Tree Service", icon: "🌳", interested: 789 },
            ].map((service) => (
              <div key={service.name} className="border border-border rounded-lg p-5 hover:shadow-md transition cursor-pointer bg-white">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{service.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">📈 {service.interested} homeowners interested</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-16" style={{ backgroundColor: "#FFF8F0" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">Knowledge is priceless - so our cost guides are free.</h2>
              <p className="text-muted-foreground">Sign up to get free project cost info in your inbox.</p>
            </div>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-white outline-none focus:border-primary transition"
              />
              <input
                type="text"
                placeholder="ZIP code"
                className="w-full sm:w-32 px-4 py-3 border border-border rounded-lg bg-white outline-none focus:border-primary transition"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition">
                Sign me up
              </button>
            </div>
          </div>
        </section>

        {/* Popular Home Projects */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground">Popular home projects</h2>
            <button className="text-primary hover:underline font-medium text-sm">Browse pro directory →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Handyperson for Small Projects", rating: 4.6, reviews: "599k+", price: "$158" },
              { title: "One-time Cleaning Service", rating: 4.5, reviews: "314k+", price: "$102" },
              { title: "Air Conditioning Service & Repair", rating: 4.7, reviews: "306k+", price: "$350" },
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer transform hover:scale-102">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
                  {["🔧", "🧹", "❄️"][idx]}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-foreground mb-3">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{project.rating}</span>
                    <span className="text-xs text-muted-foreground">({project.reviews})</span>
                  </div>
                  <p className="text-muted-foreground text-sm">from <span className="font-semibold text-foreground">{project.price}</span></p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center">Price shown is the national median price for typical jobs. Actual price may vary depending on size, complexity and location.</p>
        </section>

        {/* Keep Home in Tip-Top Shape */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-12">Keep your home in tip-top shape</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Faucet & Plumbing Repair Services", rating: 4.8, reviews: "245k+", price: "$95" },
              { title: "Roof Installation & Repair", rating: 4.7, reviews: "189k+", price: "$2,500" },
              { title: "Bathroom Remodel", rating: 4.9, reviews: "412k+", price: "$8,000" },
            ].map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer transform hover:scale-102">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-5xl">
                  {["🚰", "🏠", "🛁"][idx]}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-foreground mb-3">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary text-sm">★</span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{project.rating}</span>
                    <span className="text-xs text-muted-foreground">({project.reviews})</span>
                  </div>
                  <p className="text-muted-foreground text-sm">from <span className="font-semibold text-foreground">{project.price}</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Cost Guides */}
        <section className="w-full py-16" style={{ backgroundColor: "#E6F7F0" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-foreground">Popular cost guides</h2>
              <a href="#" className="text-primary hover:underline text-sm font-medium">See all articles →</a>
            </div>
            <p className="text-muted-foreground mb-12">From average costs to expert advice, get all the answers you need to get your job done.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "How Much Does a New Furnace Cost? [2025 Data]", author: "Sarah Chen", date: "Jan 10, 2025" },
                { title: "How Much Does Roof Snow Removal Cost? [2025 Data]", author: "Mike Johnson", date: "Jan 8, 2025" },
                { title: "How Much Does Insulation Installation Cost? [2025 Data]", author: "Emma Davis", date: "Jan 5, 2025" },
                { title: "Kitchen Remodeling Cost Guide [Updated 2025]", author: "James Wilson", date: "Jan 3, 2025" },
                { title: "Bathroom Renovation Costs & ROI", author: "Lisa Anderson", date: "Dec 29, 2024" },
                { title: "Foundation Repair Cost Guide", author: "Robert Martinez", date: "Dec 26, 2024" },
              ].map((article, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl">
                    {["🔥", "❄️", "🧊", "🛁", "🚿", "🏗️"][idx]}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground uppercase font-medium mb-2">{article.author} • {article.date}</p>
                    <h3 className="font-bold text-foreground line-clamp-2">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Footer */}
      <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Newsletter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Knowledge is priceless</h3>
              <p className="text-sm text-muted-foreground mb-4">Get free project cost info in your inbox.</p>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Email" className="px-3 py-2 border border-border rounded text-sm bg-white" />
                <input type="text" placeholder="ZIP code" className="px-3 py-2 border border-border rounded text-sm bg-white" />
                <button className="bg-primary text-white px-3 py-2 rounded text-sm font-medium hover:bg-primary/90">Sign me up</button>
              </div>
            </div>

            {/* Column 2: Homeowner Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Homeowner services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Find local businesses</a></li>
                <li><a href="#" className="hover:text-primary transition">Services near me</a></li>
              </ul>
            </div>

            {/* Column 3: For Service Pros */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">For service pros</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Register your business</a></li>
                <li><a href="#" className="hover:text-primary transition">Business center</a></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">Solution center</a></li>
                <li><a href="#" className="hover:text-primary transition">Project cost center</a></li>
                <li><a href="#" className="hover:text-primary transition">FAQs</a></li>
              </ul>
            </div>

            {/* Column 5: About Us */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">About us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition">How it works</a></li>
                <li><a href="#" className="hover:text-primary transition">Who we are</a></li>
                <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition">Press</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact us</a></li>
              </ul>
            </div>
          </div>

          {/* App Download Section */}
          <div className="border-t border-gray-300 pt-8 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Download the app</h3>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-200 transition">
                <span>📱</span>
                <span>App Store</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-200 transition">
                <span>🔵</span>
                <span>Google Play</span>
              </button>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-bold text-primary text-xl">Angi</div>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-primary transition">Terms of Use</a>
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Accessibility</a>
              <a href="#" className="hover:text-primary transition">Do Not Sell</a>
            </div>
            <div className="flex gap-3 text-gray-500">
              <a href="#" className="hover:text-primary transition">𝕏</a>
              <a href="#" className="hover:text-primary transition">f</a>
              <a href="#" className="hover:text-primary transition">📌</a>
              <a href="#" className="hover:text-primary transition">▶️</a>
              <a href="#" className="hover:text-primary transition">📷</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-muted-foreground mt-6">
            <p>&copy; 2025 Angi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
