"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import ScrollRevealText from "@/components/ScrollRevealText";
import { Mail, MapPin, Instagram, Linkedin, Dribbble } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const clients = [
    "Vogue Brasil",
    "D-Edge Club",
    "Galeria Vermelho",
    "ADG Brasil",
    "Flow Magazine",
    "Aurora AI",
    "Nike",
    "Spotify",
    "Adobe"
  ];

  const services = [
    "Nhận Diện Thương Hiệu",
    "Hệ Thống Thị Giác",
    "Chỉ Đạo Nghệ Thuật",
    "Typography",
    "Thiết Kế Số",
    "Đồ Họa Chuyển Động",
    "Thiết Kế In Ấn",
    "Bao Bì"
  ];

  const recognition = [
    { award: "Giải thưởng ADG Brasil", year: "2024" },
    { award: "Type Directors Club", year: "2023" },
    { award: "Cannes Lions Bronze", year: "2022" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Dribbble", icon: Dribbble, url: "https://dribbble.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar />
        
        {/* Hero Bio Section */}
        <section className="min-h-[75vh] flex items-center justify-center px-6 lg:px-12 pt-32 pb-16">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ScrollRevealText 
                text="Miyu Studio là một studio thiết kế độc lập chuyên về thiết kế đồ họa, chỉ đạo nghệ thuật và hệ thống nhận diện thương hiệu truyền tải thông điệp rõ ràng và có mục đích."
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] font-light tracking-tight"
              />
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-border origin-left"
            />
          </div>
        </div>

        {/* Bottom Info Section */}
        <section className="px-6 lg:px-12 py-20 lg:py-32" id="contact">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
          >
            {/* Selected Clients */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                Khách Hàng Tiêu Biểu
              </h3>
              <ul className="space-y-2.5">
                {clients.map((client, index) => (
                  <motion.li 
                    key={client} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-sm lg:text-base font-light hover:text-primary transition-colors cursor-default"
                  >
                    {client}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                Dịch Vụ
              </h3>
              <ul className="space-y-2.5">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-sm lg:text-base font-light hover:text-primary transition-colors cursor-default"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Recognition */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                Công Nhận
              </h3>
              <ul className="space-y-4">
                {recognition.map((item, index) => (
                  <motion.li 
                    key={item.award}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-default"
                  >
                    <div className="text-sm lg:text-base font-light group-hover:text-primary transition-colors">
                      {item.award}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 font-light">
                      {item.year}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                Liên Hệ
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@miyustudio.com"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 text-sm lg:text-base font-light hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>hello@miyustudio.com</span>
                </motion.a>
                
                <div className="flex items-start gap-3 text-sm lg:text-base font-light">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Hà Nội, Việt Nam</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
}
