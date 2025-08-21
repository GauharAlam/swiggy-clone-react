import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-gray-700 text-sm">
        
        {/* Logo & Copyright */}
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt="Swiggy"
              className="h-12 w-40"
            />
          </div>
          <p className="text-xs text-gray-500">© 2025 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact us</h3>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>

        {/* Available in */}
        <div>
          <h3 className="font-semibold mb-3">Available in:</h3>
          <ul className="space-y-2">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select className="mt-3 border border-gray-300 rounded px-2 py-1 text-sm w-full sm:w-auto">
            <option>685 cities</option>
          </select>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h3 className="font-semibold mb-3">Life at Swiggy</h3>
          <ul className="space-y-2">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>

        {/* Legal + Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 mb-6">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>

          <h3 className="font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <Linkedin className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Bottom App Download Section */}
      <div className="border-t border-gray-300 py-6 text-center flex flex-col lg:flex-row justify-center items-center gap-6 px-4">
        <p className="text-[#02060CBF] font-bold text-xl lg:text-2xl text-center lg:text-left">
          For better experience, download the Swiggy app now
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="Download on App Store"
            className="h-12"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="Get it on Google Play"
            className="h-12"
          />
        </div>
      </div>
    </footer>
  );
}
