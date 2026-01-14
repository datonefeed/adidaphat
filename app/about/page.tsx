"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import ScrollRevealText from "@/components/ScrollRevealText";
import { Mail, MapPin, Instagram, Linkedin, Dribbble } from "lucide-react";

export default function AboutPage() {
  const searchParams = useSearchParams();

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
  }, [searchParams]);

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

  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar />
        
        {/* Hero Bio Section - Takes ~70% of the viewport */}
        <section className="min-h-[60vh] max-h-[70vh] flex flex-col justify-center px-6 pt-24 pb-8">
          <div className="max-w-[95%]">
            <ScrollRevealText 
              text="Miyu Studio là một studio thiết kế độc lập chuyên về thiết kế đồ họa, chỉ đạo nghệ thuật và hệ thống nhận diện thương hiệu truyền tải thông điệp rõ ràng và có mục đích."
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-display"
            />
          </div>
        </section>

        {/* Bottom Info Section - Horizontal Layout */}
        <section className="px-6 pb-32" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 fade-in-up">
            {/* Selected Clients */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
                Khách Hàng Tiêu Biểu
              </h3>
              <ul className="space-y-1">
                {clients.map((client) => (
                  <li key={client} className="text-sm">
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
                Dịch Vụ
              </h3>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service} className="text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recognition */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
                Công Nhận
              </h3>
              <ul className="space-y-2">
                {recognition.map((item) => (
                  <li key={item.award} className="text-sm">
                    <div>{item.award}</div>
                    <div className="text-xs text-muted-foreground">{item.year}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
                Liên Hệ
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@jordanstudio.com"
                  className="flex items-start gap-2 text-sm hover:opacity-70 transition-opacity"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>hello@jordanstudio.com</span>
                </a>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Hà Nội, Việt Nam</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
}
