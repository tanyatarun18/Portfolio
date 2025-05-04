import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectShowcase from "./ProjectShowcase";
import Layout from "./Layout";

interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Define sections for the portfolio
  const sections: Section[] = [
    {
      id: "hero",
      title: "Home",
      component: <HeroSection />,
    },
    {
      id: "experience",
      title: "Experience",
      component: <ExperienceTimeline />,
    },
    {
      id: "projects",
      title: "Projects",
      component: <ProjectShowcase />,
    },
    {
      id: "education",
      title: "Education",
      component: (
        <div className="min-h-screen bg-background p-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  B.Tech Computer Science Engineering
                </h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  2022 - Present
                </span>
              </div>
              <p className="text-muted-foreground font-medium mt-2">
                Lovely Professional University
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">High School</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  2020 - 2022
                </span>
              </div>
              <p className="text-muted-foreground font-medium mt-2">
                Millia Convent & St. Peter's
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "certifications",
      title: "Certifications",
      component: (
        <div className="min-h-screen bg-background p-6">
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Cloud Computing",
                provider: "NPTEL",
                logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=nptel",
                date: "January 2025",
                url: "https://drive.google.com/file/d/1_9gLq9XAqxWjPv09WedODbmEAHpkKcvx/view?usp=drive_link",
              },
              {
                title: "Cloud Computing with AWS",
                provider: "Gokboru Tech Pvt Ltd.",
                logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=aws",
                date: "July 2024",
                url: "https://drive.google.com/file/d/1mJXmXX2o7hUKUOVcVON6rf_IhnNSUMGu/view?usp=drive_link",
              },
              {
                title: "Generative AI with Large Language Models",
                provider: "Coursera",
                logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=coursera-ai",
                date: "May 2024",
                url: "https://drive.google.com/file/d/1oe2Yystcy-SzJRawNq4gOnG8SM1hJCdB/view?usp=drive_link",
              },
              {
                title: "Python (Basic)",
                provider: "Hackerrank",
                logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=hackerrank",
                date: "March 2023",
                url: "https://drive.google.com/file/d/1mCOJxHBHB-3CkjvZjX1XnpmYmtp46nW7/view?usp=drive_link",
              },
              {
                title: "Leadership through Social Influence",
                provider: "Coursera",
                logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=coursera-leadership",
                date: "March 2023",
                url: "https://drive.google.com/file/d/15c3U1liBJyMjSZwzTWgU-HAwrDaKgPzf/view?usp=drive_link",
              },
            ].map((cert, index) => (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-card rounded-lg p-4 shadow-md flex items-center space-x-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {cert.provider.substring(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.provider}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "achievements",
      title: "Achievements",
      component: (
        <div className="min-h-screen bg-background p-6">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-semibold">Public Speaking Lead</h3>
              <p className="mt-2">
                Led public speaking initiatives and workshops at university
                events
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-semibold">
                Proxmed Hackathon – Top 3 Winner
              </h3>
              <p className="mt-2">
                Developed an innovative healthcare solution using ML and
                computer vision
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-semibold">
                Technical Content Creator
              </h3>
              <p className="mt-2">
                Created educational content reaching over 10,000 students
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      component: (
        <div className="min-h-screen bg-background p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <div className="max-w-md mx-auto bg-card rounded-lg p-6 shadow-md">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:tanyatarun03@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  tanyatarun03@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <a
                  href="https://github.com/tanyatarun18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/tanyatarun18
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="https://www.linkedin.com/in/tanya-tarun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.linkedin.com/in/tanya-tarun
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Send me a message</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name");
                  const email = formData.get("email");
                  const message = formData.get("message");
                  window.location.href = `mailto:tanyatarun03@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Handle intersection observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <Layout
      activeSection={activeSection}
      sections={sections.map((s) => ({ id: s.id, title: s.title }))}
    >
      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="min-h-screen scroll-mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {section.component}
        </motion.section>
      ))}
    </Layout>
  );
};

export default Home;
