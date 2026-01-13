"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

const SERVICES = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Roofing",
  "Carpentry",
  "Painting",
  "Landscaping",
  "Cleaning",
  "General Repairs",
  "Flooring",
]

export default function ProviderSignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    services: [] as string[],
    yearsExperience: "",
    location: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-foreground">Create Your Provider Account</h1>
              <p className="text-sm text-muted-foreground">Step {step} of 4</p>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card className="p-8 border border-border">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Business Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John's Plumbing"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Years of Experience</label>
                    <select
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="San Francisco, CA"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What Services Do You Offer?</h2>
                <p className="text-muted-foreground mb-6">Select all that apply</p>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`p-4 border-2 rounded-lg font-medium text-left transition ${
                        formData.services.includes(service)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-foreground hover:border-primary/50"
                      }`}
                    >
                      {formData.services.includes(service) ? "✓ " : ""}
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Review Your Information</h2>
                <div className="space-y-6">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Personal Information</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Name:</dt>
                        <dd className="font-medium text-foreground">
                          {formData.firstName} {formData.lastName}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Email:</dt>
                        <dd className="font-medium text-foreground">{formData.email}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Phone:</dt>
                        <dd className="font-medium text-foreground">{formData.phone}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Business Information</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Business Name:</dt>
                        <dd className="font-medium text-foreground">{formData.businessName}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Experience:</dt>
                        <dd className="font-medium text-foreground">{formData.yearsExperience}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Location:</dt>
                        <dd className="font-medium text-foreground">{formData.location}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.services.map((service) => (
                        <span
                          key={service}
                          className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-foreground">I agree to the Terms of Service and Privacy Policy</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)} className="bg-transparent">
                  Back
                </Button>
              )}
              {step < 4 && (
                <Button onClick={() => setStep(step + 1)} className="flex-1">
                  Next
                </Button>
              )}
              {step === 4 && (
                <Link href="/provider/dashboard" className="flex-1">
                  <Button className="w-full">Create Account</Button>
                </Link>
              )}
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Already have an account?{" "}
              <Link href="/provider/login" className="text-primary hover:underline">
                Sign in here
              </Link>
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
