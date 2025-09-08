import DREVlogo from "../assets/DREV_Logo.png";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-300 to-blue-500 z-60">
      {/* Main Footer */}
      <div className="pt-16 pb-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* DREV Logo & Description */}
          <div className="md:col-span-2 space-y-4 ">
            <div>
              <img src={DREVlogo} alt="DREV Logo" className="h-15" />
            </div>
            <p className=" text-blue-100">
              FinReveal is a product of DREV, designed to simplify financial
              insights and decision making for businesses of all sizes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-sky-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-sky-500 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/datareveal/posts/?feedView=all"
                aria-label="LinkedIn"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-sky-500 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@DataRevealai"
                aria-label="YouTube"
                className="bg-blue-800/50 p-2 rounded-full hover:bg-sky-500 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Platform Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="bg-sky-500 w-2 h-6 rounded mr-2"></span>
              Platform
            </h4>
            <ul className="space-y-3 text-blue-100">
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li className=" text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="bg-sky-500 w-2 h-6 rounded mr-2"></span>
              Support
            </h4>
            <ul className="space-y-3 text-blue-100">
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span className="bg-sky-500 w-2 h-6 rounded mr-2"></span>
              Company
            </h4>
            <ul className="space-y-3 text-blue-100">
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="#"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="https://www.datareveal.ai/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li className="text-white group flex items-center hover:translate-x-1 transition-transform duration-300">
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sky-300" />
                <a
                  href="https://www.datareveal.ai/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-600/40 my-8"></div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} DREV. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <div className="text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-300" />
              <span>baladaks@datareveal.ai</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-blue-600/40 mx-2"></div>
            <div className="text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-300" />
              <span>+1-704-206-9793 </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-blue-600/40 mx-2"></div>
            <div className="text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-300" />
              <span>4924, Durham Drive, Plano Texas, USA 75093</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="bg-[#1565D8] p-3 box-full rounded-[8px] shadow-lg absolute right-8 bottom-8 text-white hover:scale-110 transition-transform duration-300 leading-none"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
