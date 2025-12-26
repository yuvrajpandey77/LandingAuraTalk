"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/lib/layout"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-sm " 
          : "bg-transparent"
      }`}
    >
      <Container className="py-8">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-xl md:text-2xl font-bold text-gray-900">
            AURATALK
          </div>

          {/* Navigation and CTA Buttons - Right Side */}
          <div className="flex items-center gap-6">
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-900 hover:text-pink-600 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-900 hover:text-pink-600 transition-colors text-sm font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-900 hover:text-pink-600 transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-gray-900 hover:text-pink-600 transition-colors text-sm font-medium">
                Doctors
              </a>
              <a href="#" className="text-gray-900 hover:text-pink-600 transition-colors text-sm font-medium">
                Appointments
              </a>
              <a href="#" className="text-gray-900 hover:text-pink-600 transition-colors text-sm font-medium">
                Blog
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button className="hidden md:inline-flex rounded-full bg-white hover:bg-gray-800 text-black hover:text-white border border-black px-6">
                Contact Us
              </Button>
              <button className="p-2 bg-black hover:bg-gray-800 rounded-full transition-colors">
                <Bell className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
