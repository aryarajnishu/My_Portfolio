import { Briefcase, Code, User } from "lucide-react";
import ZoomOutImage from "./ZoomOutImage";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Problem Solver & Web Designer
            </h3>

            <p className="text-muted-foreground">
             I'm currently pursuing a degree in Data Science and Artificial Intelligence (DSAI) at the Indian Institute of Information Technology Dharwad (IIIT Dharwad).
            With hands-on experience building 4–5 web development projects, I focus on designing clean, responsive, and accessible user interfaces while solving real-world problems through elegant, efficient code.
            </p>

            <p className="text-muted-foreground">
              I enjoy merging creativity with functionality in my web designs and continuously explore new technologies to stay ahead in the dynamic world of web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1PGV8fRnK8UBy11L1VKskp9m_5ZX_588p/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                See My CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            

            <div>
                <ZoomOutImage />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};