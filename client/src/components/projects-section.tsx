import { Github, ExternalLink, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Gen AI Legal Microservices",
      description:
        "Architected integration layer supporting 3+ Gen AI microservices including legal NLP extraction, deposition summarization, and LLM job orchestration using Python OpenAPI SDK and GPT-4.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "GPT-4", "OpenAPI", "NLP"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"],
      duration: "2022-Present • CS Disco",
      github: "#",
      demo: "#",
      achievement: "Scaled customer adoption from 50 to 200 cases"
    },
    {
      title: "Document Management Platform",
      description:
        "Led engineering vision for document management platform with AWS messaging infrastructure (MSK, SQS, SNS), enabling automated document analysis and transcript processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["AWS MSK", "SQS", "SNS", "Document Analysis"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-red-100 text-red-800"],
      duration: "2022-Present • CS Disco",
      github: "#",
      demo: "#",
      achievement: "Enhanced customer engagement by 300%"
    },
    {
      title: "Observability Infrastructure",
      description:
        "Built comprehensive observability infrastructure with custom dashboards and automated alert systems across 25+ production microservices, significantly improving system reliability.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Monitoring", "Dashboards", "Alerts", "Microservices"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"],
      duration: "2022-Present • CS Disco",
      github: "#",
      demo: "#",
      achievement: "Reduced MTTD by 60%"
    },
    {
      title: "Enterprise E-commerce APIs",
      description:
        "Developed Spring Boot REST APIs with comprehensive testing for customer-facing e-commerce projects including OnStar Insurance, Auto Wash dashboard, and Auto Shuttle services.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Spring Boot", "REST APIs", "Testing", "E-commerce"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-red-100 text-red-800"],
      duration: "2015-2022 • General Motors",
      github: "#",
      demo: "#",
      achievement: "Multiple TeamGM Awards"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of enterprise-scale projects demonstrating expertise in full-stack cloud solutions, 
            microservices architecture, and cross-functional team leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Achievement Badge */}
                <div className="flex items-center mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <Award className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">{project.achievement}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className={`${project.tagColors[tagIndex]} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.duration}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}