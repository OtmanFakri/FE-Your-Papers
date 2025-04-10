import React from "react";

export const FooterSection = () => {
  // Footer link data for mapping
  const quickLinks = [
    { title: "About Us", href: "#" },
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Contact", href: "#" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Security", href: "#" },
  ];

  const socialLinks = [
    { icon: "/frame-16.svg", alt: "Social media icon", href: "#" },
    { icon: "/frame-31.svg", alt: "Social media icon", href: "#" },
    { icon: "/frame-3.svg", alt: "Social media icon", href: "#" },
    { icon: "/frame-7.svg", alt: "Social media icon", href: "#" },
  ];

  return (
    <footer className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-5">
            <div className="flex items-center">
              <img
                className="w-[22.5px] h-[30px]"
                alt="DocFlow Logo"
                src="/frame-14.svg"
              />
              <span className="ml-2 font-bold text-white text-xl font-['Poppins',Helvetica]">
                DocFlow
              </span>
            </div>
            <p className="text-gray-400 text-base font-['Poppins',Helvetica]">
              Making document editing and management simple and efficient.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base font-['Poppins',Helvetica]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-base font-['Poppins',Helvetica] hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base font-['Poppins',Helvetica]">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-base font-['Poppins',Helvetica] hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base font-['Poppins',Helvetica]">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <img className="w-5 h-5" alt={link.alt} src={link.icon} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-base font-['Poppins',Helvetica]">
            © 2025 DocFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
