import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Cloud Migration", href: "#" },
    { name: "DevOps & CI/CD", href: "#" },
    { name: "AI/ML Solutions", href: "#" },
    { name: "Web & Mobile", href: "#" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary text-white py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Aptivon Solutions Pvt. Ltd.
            </h3>
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
              Empowering businesses with end-to-end technology solutions combining Cloud, DevOps, AI/ML, and cutting-edge application development.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 mt-12 pt-8 text-center text-white/70"
        >
          <p className="text-lg">&copy; 2025 Aptivon Solutions Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2 text-white/50">Transforming Business Through Intelligent Technology</p>
        </motion.div>
      </div>
    </footer>
  );
}
