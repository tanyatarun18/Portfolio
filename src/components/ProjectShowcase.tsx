import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string[];
  techStack: string[];
  image: string;
  detailedDescription: string;
  githubLink?: string;
  demoLink?: string;
}

interface ProjectShowcaseProps {
  projects?: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects = defaultProjects,
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // No longer filtering by categories
  const filteredProjects = projects;

  const handleProjectClick = (project: Project) => {
    if (project.githubLink) {
      window.open(project.githubLink, "_blank");
    } else {
      setSelectedProject(project);
      setIsDialogOpen(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of machine learning and computer vision
            projects that demonstrate my technical skills and problem-solving
            abilities.
          </p>
        </motion.div>

        {/* Category navigation removed as requested */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                className="h-full flex flex-col overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                onClick={() => handleProjectClick(project)}
              >
                {/* Make entire card clickable and link to GitHub */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 z-10 bg-background/80 p-2 rounded-full hover:bg-primary/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-1 pt-2 border-t">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedProject && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedProject.category.map((cat) => (
                    <Badge key={cat} variant="secondary">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              <div className="relative h-64 md:h-80 overflow-hidden rounded-md my-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <DialogDescription className="text-base">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-foreground">
                    {selectedProject.detailedDescription}
                  </p>

                  <h4 className="text-lg font-medium mt-4 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </DialogDescription>

              <div className="flex flex-wrap gap-4 mt-6">
                {selectedProject.githubLink && (
                  <Button asChild variant="outline">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </Button>
                )}
                {selectedProject.demoLink && (
                  <Button asChild>
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Fake Profile Picture Detection",
    description:
      "A deep learning model to detect AI-generated profile pictures using ResNet18 architecture.",
    category: ["Computer Vision", "AI"],
    techStack: ["PyTorch", "ResNet18", "Python", "OpenCV"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    detailedDescription:
      "This project implements a convolutional neural network based on ResNet18 architecture to detect AI-generated fake profile pictures. The model was trained on a dataset of over 10,000 real and AI-generated images, achieving 94% accuracy on the test set. The system can be integrated into social media platforms to flag potentially fake accounts.",
    githubLink:
      "https://github.com/tanyatarun18/Fake-Profile-Picture-Detection",
  },
  {
    id: "2",
    title: "Image Processing with AWS",
    description:
      "Serverless image processing pipeline using AWS S3, Lambda, and Rekognition.",
    category: ["AWS", "Cloud Computing"],
    techStack: ["AWS S3", "AWS Lambda", "AWS Rekognition", "Serverless"],
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
    detailedDescription:
      "A scalable image processing pipeline built on AWS that automatically processes images uploaded to S3 buckets. The system uses Lambda functions to trigger image analysis with Rekognition, extracting metadata, detecting objects, and performing content moderation. Results are stored in DynamoDB and can be accessed through a simple API Gateway endpoint.",
    githubLink: "https://github.com/tanyatarun18/Image-Processing-using-AWS",
    demoLink: "https://demo.aws-image-processing.com",
  },
  {
    id: "3",
    title: "Stress Detection GUI",
    description:
      "A desktop application that uses machine learning to detect stress levels from physiological signals.",
    category: ["GUI", "Machine Learning"],
    techStack: ["Python", "Tkinter", "Scikit-learn", "Pandas"],
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=800&q=80", // Updated to a more relevant stress monitoring image
    detailedDescription:
      "This desktop application uses an ensemble of machine learning models to detect stress levels from physiological signals like heart rate, skin conductance, and respiration. The GUI provides real-time visualization of stress levels and historical trends. The system was validated with data from 50 participants in various stress-inducing scenarios.",
    githubLink: "https://github.com/tanyatarun/stress-detection-gui",
  },
  {
    id: "4",
    title: "Brain Hypodense Segmentation",
    description:
      "Medical imaging project using U-Net architecture to segment hypodense regions in brain CT scans.",
    category: ["Medical Imaging", "Computer Vision"],
    techStack: ["U-Net", "Snap ITK", "Python", "TensorFlow"],
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    detailedDescription:
      "This project implements a U-Net architecture to automatically segment hypodense regions in brain CT scans, which are indicative of ischemic stroke. The model was trained on a dataset of annotated CT scans and achieves a Dice coefficient of 0.85. The segmentation results can assist radiologists in quickly identifying affected brain regions and quantifying the extent of damage.",
    githubLink: "https://github.com/tanyatarun18/Proxmed_hackathon",
  },
];

export default ProjectShowcase;
