import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  profileImage?: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
}

const HeroSection = ({
  name = "Tanya Tarun",
  tagline = "ML Intern | Computer Vision Enthusiast | Content Creator | Startup Co-Founder",
  profileImage = "https://storage.googleapis.com/tempo-public-assets/user-uploads/1718913600000-image.png",
  resumeUrl = "#",
  linkedinUrl = "https://linkedin.com",
  githubUrl = "https://github.com",
  email = "tanyatarun03@gmail.com",
}: HeroSectionProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-background">
      <motion.div
        className="w-full max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-6">
          <Avatar className="h-32 w-32 mx-auto border-4 border-primary shadow-lg">
            <AvatarImage
              src={
                "https://i.postimg.cc/C1p5KLry/Whats-App-Image-2025-05-02-at-01-01-38-3874171e.jpg"
              }
              alt={name}
            />
            <AvatarFallback className="text-3xl">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground"
        >
          {name}
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p
          variants={taglineVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          {tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <a
              href={"https://www.linkedin.com/in/tanya-tarun"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild className="rounded-full">
            <a
              href={"https://github.com/tanyatarun18"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild className="rounded-full">
            <a
              href={`mailto:${"tanyatarun03@gmail.com"}`}
              aria-label="Email Contact"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>

          <Button variant="primary" size="lg" asChild className="rounded-full">
            <a
              href={
                "https://drive.google.com/file/d/1Zh6Pob0E0XSNrW2M4PfF62R_rvsagrUf/view?usp=drive_link"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
