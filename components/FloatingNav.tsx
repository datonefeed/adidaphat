"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Instagram, Linkedin, Dribbble } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FloatingNav = () => {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);

  const navItems = [
    { name: "Tác Phẩm", path: "/" },
    { name: "Giới Thiệu", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/" || pathname === "/index" || pathname === "/explore";
    return pathname?.startsWith(path);
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Dribbble", icon: Dribbble, url: "https://dribbble.com" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-muted/80 backdrop-blur-md rounded-full p-1.5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              isActive(item.path)
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.name}
          </Link>
        ))}
        
        {/* Contact with Popover */}
        <Popover open={contactOpen} onOpenChange={setContactOpen}>
          <PopoverTrigger asChild>
            <button
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                contactOpen
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Liên Hệ
            </button>
          </PopoverTrigger>
          <PopoverContent 
            className="w-64 p-4 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-xl"
            side="top"
            sideOffset={12}
          >
            <div className="space-y-4">
              {/* Say Hi Section */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Chào bạn!
                </p>
                <a 
                  href="mailto:hello@jordanstudio.com"
                  className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                >
                  <Mail size={14} />
                  hello@jordanstudio.com
                </a>
              </div>

              {/* Follow Me Section */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Theo dõi
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default FloatingNav;
