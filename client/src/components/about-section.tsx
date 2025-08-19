import { Trophy, GraduationCap, Users, Calendar } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "10+", label: "Years Experience", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { number: "25+", label: "Microservices", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
    { number: "200+", label: "Cases Scaled", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Senior Software Engineer and Tech Lead with over 10 years of experience 
                building scalable, full-stack cloud solutions and microservices architectures. My expertise 
                spans from enterprise-level systems at Fortune 500 companies to cutting-edge AI implementations.
              </p>

              <p>
                Currently at CS Disco, I architect integration layers supporting Gen AI microservices for legal 
                NLP extraction and deposition summarization. I've successfully scaled customer adoption from 50 
                to 200 cases across premier law firms while mentoring high-performing engineering teams.
              </p>

              <p>
                My technical foundation includes a B.S. in Computer Science from Oakland University and certifications 
                in Application Security. I'm recognized for achieving high-valued projects, winning multiple TeamGM 
                Awards, and developing innovative features like Legal Timeline & Case Chronology Software.
              </p>

              <p>
                I believe in fostering collaborative environments, promoting agile methodologies, and delivering 
                robust solutions that drive significant improvements in user engagement and system efficiency.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center p-6 ${stat.bg} rounded-xl`}>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/attached_assets/1657659333555_1755606504263.jpeg"
              alt="Professional headshot of Archana Sevak"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover"
              style={{ maxHeight: '600px' }}
              onError={(e) => {
                console.error('Image failed to load:', e);
                // Fallback to a placeholder if the image fails to load
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1494790108755-2616b612b1ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000";
              }}
            />

            {/* Floating Achievement Cards */}
            <div
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in hidden sm:block"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">TeamGM Awards</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Multiple Winner</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in hidden sm:block"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">B.S. Computer Science</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Oakland University</div>
                </div>
              </div>
            </div>

            <div
              className="absolute top-1/2 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in hidden sm:block"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">Team Leader</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Mentoring & Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}