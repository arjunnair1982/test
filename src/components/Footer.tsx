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
            <div className="mt-4 flex flex-col items-start gap-3">
              <a
                href="mailto:info@alvafutures.com"
                className="inline-flex items-center text-sm text-brand-yellow hover:text-brand-yellow-light transition-colors"
              >
                info@alvafutures.com
              </a>
              <a
                href="https://wa.me/351912870359"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-yellow hover:text-brand-yellow-light transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#25D366" d="M12.013 0C5.388 0 0 5.388 0 12.013c0 2.12.553 4.195 1.604 6.014l-1.706 6.223 6.368-1.67a11.954 11.954 0 0 0 5.747 1.472c6.626 0 12.014-5.388 12.014-12.013S18.638 0 12.013 0z" />
                  <path fill="#FFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                +351 912 870 359
              </a>
            </div>
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
