import { Container } from "@/lib/layout"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Left - Mission */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Helping people live more independently</h3>
            <p className="text-sm sm:text-base text-gray-400">Delivering compassionate healthcare solutions that empower our community.</p>
          </div>

          {/* Center - Office Info */}
          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-white text-sm sm:text-base">Office Address</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <p>123 Healthcare Plaza</p>
              <p>Medical District, State 12345</p>
              <p>United States</p>
            </div>
          </div>

          {/* Right - Links & Contact */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Quick Links</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Appointments
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Contact</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  <li>
                    <a href="mailto:info@auratalk.com" className="hover:text-white transition-colors break-all">
                      info@auratalk.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="hover:text-white transition-colors">
                      (239) 555-0108
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">Copyright 2025. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center md:justify-start">
          {["f", "t", "i", "l"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-xs sm:text-sm"
            >
              {icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
