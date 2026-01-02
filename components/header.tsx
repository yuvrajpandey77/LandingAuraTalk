"use client"

import { Bell, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/lib/layout"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-sm " 
          : "bg-transparent"
      }`}
    >
      <Container className="py-4 md:py-8">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            AURATALK
          </div>

          {/* Navigation and CTA Buttons - Right Side */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium">
                Services
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium">
                Doctors
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium">
                Appointments
              </a>
              <a href="#" className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium">
                Blog
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button className="hidden md:inline-flex rounded-full bg-white hover:bg-gray-800 text-black hover:text-white border border-black px-6">
                Contact Us
              </Button>
              <button className="p-2 bg-black hover:bg-gray-800 rounded-full transition-colors">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 bg-black hover:bg-gray-800 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium py-2">
                Home
              </a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium py-2">
                About Us
              </a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium py-2">
                Services
              </a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium py-2">
                Doctors
              </a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium py-2">
                Appointments
              </a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 hover:text-orange-600 transition-colors text-sm font-medium py-2">
                Blog
              </a>
              <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full rounded-full bg-white hover:bg-gray-800 text-black hover:text-white border border-black px-6 mt-2">
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
