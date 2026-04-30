import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <a href="#">
              <Image src="/logo-no-bg.png" alt="Alva" width={100} height={32} className="h-8 w-auto" />
            </a>
            <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
              Workflow and communication platform for education consultants managing student university applications.
            </p>
            <a
              href="mailto:hello@alva.com"
              className="mt-4 inline-flex items-center text-sm text-brand-yellow hover:text-brand-yellow-light transition-colors"
            >
              hello@alva.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/#product" className="text-sm text-gray-400 hover:text-white transition-colors">Our Product</a></li>
              <li><a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Alva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
