"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DollarSign, Users, Star, TrendingUp, CheckCircle, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const DASHBOARD_STATS = [
  { icon: DollarSign, label: "Total Earnings", value: "$4,250", change: "+12%" },
  { icon: Users, label: "Total Customers", value: "42", change: "+8" },
  { icon: Star, label: "Avg. Rating", value: "4.9", change: "★★★★★" },
  { icon: TrendingUp, label: "This Month Jobs", value: "18", change: "+5" },
]

const RECENT_BOOKINGS = [
  {
    id: 1,
    customer: "Sarah M.",
    service: "Drain Cleaning",
    date: "Today at 2:00 PM",
    status: "confirmed",
    amount: "$150",
  },
  {
    id: 2,
    customer: "Michael T.",
    service: "Pipe Installation",
    date: "Tomorrow at 10:00 AM",
    status: "confirmed",
    amount: "$300",
  },
  {
    id: 3,
    customer: "Lisa K.",
    service: "Leak Repair",
    date: "Jan 20 at 3:00 PM",
    status: "pending",
    amount: "$200",
  },
  {
    id: 4,
    customer: "David P.",
    service: "General Inspection",
    date: "Jan 21 at 11:00 AM",
    status: "pending",
    amount: "$75",
  },
]

const RECENT_MESSAGES = [
  {
    id: 1,
    customer: "Sarah M.",
    message: "Can you come earlier? Maybe 1:00 PM?",
    time: "5 mins ago",
    unread: true,
  },
  {
    id: 2,
    customer: "Michael T.",
    message: "Perfect! See you tomorrow",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 3,
    customer: "Lisa K.",
    message: "How long does the repair usually take?",
    time: "1 day ago",
    unread: false,
  },
]

const QUICK_ACTIONS = [
  { label: "Edit Availability", href: "/provider/dashboard/availability" },
  { label: "Manage Services", href: "/provider/dashboard/services" },
  { label: "View Reviews", href: "/provider/dashboard/reviews" },
  { label: "Edit Profile", href: "/provider/dashboard/profile" },
]

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState<"bookings" | "messages">("bookings")

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, John!</h1>
              <p className="text-muted-foreground">Here's what's happening with your business today</p>
            </div>
            <div className="flex gap-3">
              <Link href="/provider/dashboard/availability">
                <Button variant="outline" className="bg-transparent">
                  Set Availability
                </Button>
              </Link>
              <Button>Create Service</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DASHBOARD_STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-accent">{stat.change}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </Card>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {QUICK_ACTIONS.map((action) => (
                <Link key={action.label} href={action.href}>
                  <Button variant="outline" className="w-full bg-transparent justify-center">
                    {action.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bookings and Messages */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex border-b border-border mb-6">
                <button
                  onClick={() => setActiveTab("bookings")}
                  className={`px-4 py-2 font-medium border-b-2 transition ${
                    activeTab === "bookings"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Upcoming Bookings
                </button>
                <button
                  onClick={() => setActiveTab("messages")}
                  className={`px-4 py-2 font-medium border-b-2 transition ${
                    activeTab === "messages"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Messages
                </button>
              </div>

              {/* Bookings Tab */}
              {activeTab === "bookings" && (
                <div className="space-y-4">
                  {RECENT_BOOKINGS.map((booking) => (
                    <Card key={booking.id} className="p-6 border border-border hover:shadow-lg transition">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-foreground">{booking.customer}</h3>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${
                                booking.status === "confirmed"
                                  ? "bg-accent/20 text-accent"
                                  : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                              }`}
                            >
                              {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{booking.service}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {booking.date}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xl font-bold text-primary mb-3">{booking.amount}</p>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Messages Tab */}
              {activeTab === "messages" && (
                <div className="space-y-4">
                  {RECENT_MESSAGES.map((msg) => (
                    <Card
                      key={msg.id}
                      className={`p-6 border cursor-pointer transition ${
                        msg.unread
                          ? "border-primary/50 bg-primary/5 hover:bg-primary/10"
                          : "border-border hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-foreground">{msg.customer}</h3>
                            {msg.unread && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                          </div>
                          <p className="text-muted-foreground mb-2">{msg.message}</p>
                          <p className="text-xs text-muted-foreground">{msg.time}</p>
                        </div>
                        <Button size="sm" className="flex-shrink-0">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Profile Card */}
              <Card className="p-6 border border-border mb-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🔧</div>
                  <h3 className="font-bold text-foreground text-lg mb-1">John's Plumbing</h3>
                  <p className="text-sm text-muted-foreground mb-4">Plumbing • San Francisco, CA</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">4.9</span>
                    <span className="text-sm text-muted-foreground">(234 reviews)</span>
                  </div>
                </div>
                <Link href="/provider/dashboard/profile">
                  <Button variant="outline" className="w-full bg-transparent mb-2">
                    Edit Profile
                  </Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  View Public Profile
                </Button>
              </Card>

              {/* Performance Card */}
              <Card className="p-6 border border-border mb-6">
                <h3 className="font-bold text-foreground mb-4">Your Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">Response Rate</span>
                      <span className="font-bold text-primary">99%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "99%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">Completion Rate</span>
                      <span className="font-bold text-primary">100%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">Profile Views</span>
                      <span className="font-bold text-primary">342</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Account Status */}
              <Card className="p-6 border border-border bg-accent/10">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-foreground">Account Status</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Your account is fully verified and active</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Email verified
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Background check passed
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Payment method added
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
