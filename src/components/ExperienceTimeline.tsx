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
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  Building,
  Award,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles in machine learning, content
            creation, and entrepreneurship.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>

                {/* Card container */}
                <div className="ml-6 md:ml-0 md:w-1/2 md:px-6">
                  <Card
                    className="w-full overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300"
                    style={{ borderLeftColor: "hsl(var(--primary))" }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Building className="h-4 w-4 mr-1" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>

                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          {exp.responsibilities.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">
                                Responsibilities:
                              </h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {exp.responsibilities.map((item, i) => (
                                  <li key={i} className="text-sm">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.achievements.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2 flex items-center">
                                <Award className="h-4 w-4 mr-1" />
                                Achievements:
                              </h4>
                              <ul className="list-disc pl-5 space-y-1">
                                {exp.achievements.map((item, i) => (
                                  <li key={i} className="text-sm">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.skills.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">Skills:</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <Badge key={i} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full flex items-center justify-center"
                      >
                        {expandedId === exp.id ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
                            Show More
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultExperiences: Experience[] = [
  {
    id: "exp1",
    role: "ML Intern",
    company: "Kokorik",
    duration: "Jan 2025 - Present",
    description:
      "Working on machine learning models for computer vision applications, focusing on object detection and image classification.",
    responsibilities: [
      "Developing and optimizing ML models for real-time object detection",
      "Implementing data preprocessing pipelines for image datasets",
      "Collaborating with the engineering team to deploy models to production",
      "Conducting research on state-of-the-art CV techniques",
    ],
    achievements: [
      "Improved model accuracy by 15% through hyperparameter optimization",
      "Reduced inference time by 30% through model quantization",
    ],
    skills: ["PyTorch", "TensorFlow", "Computer Vision", "Python", "Docker"],
  },
  {
    id: "exp2",
    role: "Video Creator Intern",
    company: "GeeksforGeeks",
    duration: "Jul - Dec 2024",
    description:
      "Created educational content for programming and computer science topics, specializing in machine learning tutorials.",
    responsibilities: [
      "Scripting and producing educational videos on ML concepts",
      "Creating visual demonstrations of algorithms and data structures",
      "Collaborating with content team to develop curriculum",
      "Engaging with audience through comments and feedback",
    ],
    achievements: [
      "Produced 20+ videos with over 50,000 cumulative views",
      "Received 'Top Creator' recognition for Q3 2024",
    ],
    skills: [
      "Content Creation",
      "Video Editing",
      "Technical Writing",
      "Adobe Premiere Pro",
      "Public Speaking",
    ],
  },
  {
    id: "exp3",
    role: "Co-Founder & CFO",
    company: "The HomeDaze",
    duration: "Nov 2023 - Mar 2025",
    description:
      "Co-founded a startup focused on smart home automation solutions, managing financial operations and business strategy.",
    responsibilities: [
      "Overseeing financial planning, budgeting, and reporting",
      "Securing seed funding and managing investor relations",
      "Developing business strategies and growth plans",
      "Collaborating on product development and market research",
    ],
    achievements: [
      "Secured $150K in seed funding",
      "Grew customer base to 500+ users in first year",
      "Established partnerships with 3 major smart home device manufacturers",
    ],
    skills: [
      "Financial Management",
      "Business Strategy",
      "Leadership",
      "Fundraising",
      "Market Research",
    ],
  },
];

export default ExperienceTimeline;
