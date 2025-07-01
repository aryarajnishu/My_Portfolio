import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >


    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 gap-8">

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Arya</span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Raj</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              A passionate Software Developer and Problem Solver with strong hands-on experience in building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Skilled in C++, having solved numerous DSA problems, and experienced with frameworks like MongoDB and Express.js. I thrive in collaborative environments and enjoy crafting impactful solutions across web domains.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">View My Work</a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <img 
                src="projects/herosection.png" 
                alt="Arya Raj" 
                className="w-full h-auto max-w-sm rounded-lg shadow-lg floating-image"
              />
            </div>
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }

            .floating-image {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>
        </div>


      {/* <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Arya
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Raj
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A passionate Software Developer and Problem Solver  with strong hands-on experience in building full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Skilled in C++, having solved numerous DSA problems, and experienced with frameworks like MongoDB and Express.js. I thrive in collaborative environments and enjoy crafting impactful solutions across web domains.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div> */}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};