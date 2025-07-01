import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Uber Clone",
    description:
      "A fully functional Uber clone using the MERN stack, featuring real-time ride tracking, route optimization, and secure authentication.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Google Maps API"],
    demoUrl: "#",
    githubUrl: "https://github.com/aryarajnishu/UBERCLONE",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing development skills and projects, built with React, TailwindCSS, and lucide-react icons.",
    image: "/projects/project5.png",
    tags: ["React", "TailwindCSS", "Lucide-React", "react-toast"],
    demoUrl: "https://my-portfolio-seven-iota-77.vercel.app/",
    githubUrl: "https://github.com/aryarajnishu/My_Portfolio.git",
  },
  {
    id: 3,
    title: "EM App (Employee Management)",
    description:
      "Task management platform allowing admins to assign tasks with deadlines and employees to update task status in real-time.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript", "Context API", "Local Storage"],
    demoUrl: "#",
    githubUrl: "https://github.com/aryarajnishu/Employee-Management-System",
  },
  {
  id: 4,
  title: "BMI Calculator",
  description:
    "A sleek and responsive Body Mass Index (BMI) calculator built using React and TailwindCSS, allowing users to input height and weight to calculate BMI instantly.",
  image: "/projects/project4.png",
  tags: ["React", "TailwindCSS", "HTML", "API"],
  demoUrl: "#",
  githubUrl: "https://github.com/aryarajnishu/BMI-calculator",
  },

  {
    id: 5,
    title: "Amazon Landing Page Clone",
    description:
      "A static clone of the Amazon India landing page created using HTML, CSS, and JavaScript, replicating the design and layout.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/aryarajnishu/Amazon-Clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aryarajnishu"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};