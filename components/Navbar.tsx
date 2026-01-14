"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { getCategories } from "@/data/projects";

interface NavbarProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

// Map English categories to Vietnamese
const categoryLabels: Record<string, string> = {
  "everything": "tất cả",
  "minh họa": "minh họa",
  "nghệ thuật số": "nghệ thuật số",
  "trừu tượng": "trừu tượng",
  "biên tập": "biên tập",
  "tạp chí": "tạp chí",
  "thời trang": "thời trang",
  "poster": "poster",
  "typography": "typography",
  "về đêm": "về đêm",
  "thương hiệu": "thương hiệu",
  "nhận diện": "nhận diện",
  "mỹ phẩm": "mỹ phẩm",
  "đô thị": "đô thị",
  "cắt dán": "cắt dán",
  "thử nghiệm": "thử nghiệm",
  "phong cách sống": "phong cách sống",
  "công nghệ": "công nghệ",
  "nét vẽ": "nét vẽ",
  "kỹ thuật số": "kỹ thuật số",
  "nhân vật": "nhân vật",
  "âm nhạc": "âm nhạc",
  "in ấn": "in ấn",
  "chiến lược": "chiến lược",
  "tự sự": "tự sự",
  "đa phương tiện": "đa phương tiện",
  "tối giản": "tối giản",
  "chuyển động": "chuyển động",
  "hoạt hình": "hoạt hình",
};

const Navbar = ({ selectedCategory, onCategoryChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";
  
  const categories = ["everything", ...getCategories().slice(0, 4)];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-medium tracking-tight hover:opacity-70 transition-opacity duration-300"
            >
              MIYU STUDIO
            </Link>

            {/* Center: Category Filters (Desktop only, only on Home page) */}
            {isHomePage && onCategoryChange && (
              <div className="hidden md:flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {categoryLabels[category] || category}
                  </button>
                ))}
              </div>
            )}

            {/* Right side: Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:opacity-70 transition-opacity duration-300"
              aria-label="Chuyển đổi giao diện"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile: Scrollable Categories below header (only on Home page) */}
      {isHomePage && onCategoryChange && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 px-6 py-3 w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {categoryLabels[category] || category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
