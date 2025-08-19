import { Code, Cloud, Database, Cpu, Network, Shield } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Code,
      title: "Programming Languages",
      gradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      border: "border-blue-100 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-400",
      bulletColor: "bg-blue-500",
      items: [
        "Python, Java, Kotlin",
        "GraphQL, Shell script",
        "Protobuf",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      gradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      border: "border-purple-100 dark:border-purple-800",
      iconColor: "text-purple-600 dark:text-purple-400",
      bulletColor: "bg-purple-500",
      items: [
        "AWS ECS, S3, Lambda, RDS",
        "Docker, Kubernetes",
        "Redis",
      ],
    },
    {
      icon: Network,
      title: "Streaming Services",
      gradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      border: "border-green-100 dark:border-green-800",
      iconColor: "text-green-600 dark:text-green-400",
      bulletColor: "bg-green-500",
      items: [
        "Apache Kafka",
        "AWS SNS",
        "AWS SQS",
      ],
    },
    {
      icon: Database,
      title: "Database Management",
      gradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      border: "border-orange-100 dark:border-orange-800",
      iconColor: "text-orange-600 dark:text-orange-400",
      bulletColor: "bg-orange-500",
      items: [
        "PostgreSQL, MySQL, SQL",
        "ElasticSearch",
        "AWS DynamoDB",
      ],
    },
    {
      icon: Cpu,
      title: "Software Architecture",
      gradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      border: "border-cyan-100 dark:border-cyan-800",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      bulletColor: "bg-cyan-500",
      items: [
        "Spring framework",
        "Event-driven microservices",
        "Pub-sub, RPC services",
      ],
    },
    {
      icon: Shield,
      title: "AI Tools & Development",
      gradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      border: "border-indigo-100 dark:border-indigo-800",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      bulletColor: "bg-indigo-500",
      items: [
        "Gemini, NotebookLM Plus",
        "GitHub Copilot with MCP Servers",
        "IntelliJ Junie",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in full-stack cloud solutions, microservices architectures, and modern development tools 
            with deep expertise across the software engineering lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${skill.gradient} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border ${skill.border}`}
              >
                <div className={`${skill.iconColor} mb-4`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{skill.title}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <span className={`w-2 h-2 ${skill.bulletColor} rounded-full`}></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}