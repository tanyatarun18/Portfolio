import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Home,
  Briefcase,
  FolderOpen,
  Award,
  GraduationCap,
  Mail,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children = <div>Content goes here</div> }: LayoutProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation items
  const navItems = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "experience", icon: <Briefcase size={20} />, label: "Experience" },
    { id: "projects", icon: <FolderOpen size={20} />, label: "Projects" },
    { id: "achievements", icon: <Award size={20} />, label: "Achievements" },
    { id: "education", icon: <GraduationCap size={20} />, label: "Education" },
    { id: "contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  return (
    <div
      className={`min-h-screen bg-background transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}
    >
      <main className="container mx-auto px-4 pb-24">{children}</main>

      {/* Sticky Bottom Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex-1 flex justify-between items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                aria-label={item.label}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 h-1 w-6 bg-primary rounded-t-md"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Layout;
