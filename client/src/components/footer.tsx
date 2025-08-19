import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/archana-sevak", label: "LinkedIn" },
    { icon: Mail, href: "mailto:archana.sevak12@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:512-910-4553", label: "Phone" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Archana Sevak</div>
          <p className="text-gray-400 mb-8">Senior Software Engineer & Tech Lead</p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Archana Sevak. All rights reserved. Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}