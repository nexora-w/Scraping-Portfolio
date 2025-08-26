import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Terminal,
  ChevronRight,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Globe2,
  Server,
  Bot,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

export default function PersonalPortfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      metrics: "500+ users, 99.9% uptime",
      image: "/placeholder.jpg",
      code: "// React component example\nconst ProductCard = ({ product }) => {\n  return (\n    <div className=\"product-card\">\n      <img src={product.image} alt={product.name} />\n      <h3>{product.name}</h3>\n      <p>${product.price}</p>\n      <button>Add to Cart</button>\n    </div>\n  );\n};",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management with authentication and real-time updates",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      metrics: "1000+ tasks created, real-time collaboration",
      image: "/placeholder.jpg",
      code: "// API route example\nexport async function POST(req: Request) {\n  const { title, description } = await req.json();\n  const task = await prisma.task.create({\n    data: { title, description, userId: session.user.id }\n  });\n  return NextResponse.json(task);\n}",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio built with Next.js and Tailwind CSS",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: "100% Lighthouse score, responsive design",
      image: "/placeholder.jpg",
      code: "// Component with animations\nconst AnimatedCard = ({ children }) => {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 20 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.5 }}\n    >\n      {children}\n    </motion.div>\n  );\n};",
    },
  ];

  const services = [
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications with React and Next.js",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Responsive design"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust APIs and server-side applications",
      features: ["Node.js/Express", "Python/FastAPI", "Database design", "API development"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications from concept to deployment",
      features: ["Full-stack development", "Database integration", "Authentication", "Deployment"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines and cloud infrastructure",
      features: ["Docker", "AWS/Vercel", "CI/CD", "Monitoring"]
    }
  ];

  const experience = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "TechCorp",
      description: "Developed modern web applications using React, Node.js, and cloud technologies"
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "WebFlow Inc",
      description: "Built responsive user interfaces and improved user experience"
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "StartupXYZ",
      description: "Contributed to full-stack projects and learned modern development practices"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer, TechCorp",
      content: "Excellent problem-solving skills and always delivers clean, maintainable code. Great team player!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Project Manager, WebFlow Inc",
      content: "Consistently delivers high-quality work on time. Strong technical skills and great communication.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer, StartupXYZ",
      content: "Quick learner with strong fundamentals. Contributes valuable ideas and executes them well.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "25+", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Lines of Code", value: "50K+", icon: <Database className="w-6 h-6" /> },
    { label: "Git Commits", value: "500+", icon: <Star className="w-6 h-6" /> },
    { label: "Technologies", value: "15+", icon: <Shield className="w-6 h-6" /> }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, icon: <Code className="w-4 h-4" /> },
    {
      name: "TypeScript",
      level: 90,
      icon: <Terminal className="w-4 h-4" />,
    },
    {
      name: "Node.js/Express",
      level: 85,
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: "Python/FastAPI",
      level: 80,
      icon: <Globe className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 dark:bg-card/20 dark:border-border/30">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-mono text-lg font-bold">
                John Doe
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6 dark:bg-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-mono font-medium">Available for opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent dark:from-foreground dark:to-muted-foreground/80">
                  Full Stack
                </span>
                <br />
                <span className="text-primary">Developer</span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent dark:from-foreground dark:to-muted-foreground/80">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Passionate developer crafting modern web applications with cutting-edge technologies. 
                Specializing in React, Next.js, and full-stack development to create exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="font-mono text-base px-8 py-6">
                  View Projects <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-mono bg-transparent dark:border-border/50 dark:hover:bg-muted/20 px-8 py-6"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 dark:from-primary/30 dark:to-primary/10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <div className="h-8 bg-primary/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development skills and expertise in modern web technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 dark:border-border/30 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="py-16 px-6 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-muted-foreground">How I approach development projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Planning",
                desc: "Understand requirements and design architecture",
                icon: <Globe className="w-6 h-6" />
              },
              {
                step: "02",
                title: "Development",
                desc: "Build features with clean, maintainable code",
                icon: <BarChart3 className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Testing",
                desc: "Ensure quality through comprehensive testing",
                icon: <Code className="w-6 h-6" />
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Deploy and maintain the application",
                icon: <Server className="w-6 h-6" />
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-mono font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 dark:shadow-lg dark:shadow-primary/20">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-muted-foreground dark:text-muted-foreground/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-200">
                    {exp.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world projects that demonstrate my skills and development capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 dark:border-border/30 dark:hover:shadow-2xl dark:hover:shadow-primary/5 hover:scale-[1.02] overflow-hidden"
              >
                <div className="aspect-video bg-muted dark:bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Code className="w-5 h-5 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono dark:bg-muted/50 dark:text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="bg-primary/5 p-3 rounded-md dark:bg-primary/10">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Performance Metrics:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.metrics}
                    </p>
                  </div>
                  <div className="bg-card border rounded-md p-3 dark:bg-muted/20 dark:border-border/30">
                    <pre className="text-xs font-mono text-muted-foreground overflow-x-auto">
                      <code>{project.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">References</h2>
            <p className="text-xl text-muted-foreground">What colleagues and managers say about my work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50 dark:border-border/30">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">Mastery of cutting-edge technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {skill.icon}
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 dark:bg-muted/50">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-sm group-hover:shadow-primary/20"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's Work Together!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="font-mono text-base px-8 py-6">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="dark:border-border/50 dark:hover:bg-muted/20 px-8 py-6"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
          <div className="mt-8 p-6 bg-muted/30 rounded-lg dark:bg-muted/20">
            <p className="text-muted-foreground">
              <strong>Response Time:</strong> Within 24 hours • <strong>Location:</strong> Remote/On-site • <strong>Availability:</strong> Open to opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 dark:border-border/30 bg-muted/20 dark:bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-6 h-6 text-primary" />
                <span className="font-mono text-lg font-bold">John Doe</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer passionate about creating exceptional web experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Skills</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Full-Stack Solutions</li>
                <li>DevOps & Deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Portfolio</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between dark:border-border/30">
            <p className="text-sm text-muted-foreground font-mono">
              © 2024 John Doe. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground font-mono">
              Built with passion and modern technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
