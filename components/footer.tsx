import { Container } from "@/lib/layout"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Helping people live more independently</h3>
            <p className="text-gray-400">Delivering compassionate healthcare solutions that empower our community.</p>
          </div>

          {/* Center - Office Info */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Office Address</h4>
            <div className="space-y-3 text-gray-400">
              <p>123 Healthcare Plaza</p>
              <p>Medical District, State 12345</p>
              <p>United States</p>
            </div>
          </div>

          {/* Right - Links & Contact */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
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
                <h4 className="font-semibold mb-4 text-white">Contact</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="mailto:info@auratalk.com" className="hover:text-white transition-colors">
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
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">Copyright 2025. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400 text-sm">
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
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          {["f", "t", "i", "l"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
