import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-gradient-to-r from-primary/5 via-background to-accent/5 border-t mt-4">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences web modernes et performantes.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mamadou-diould%C3%A9-bald%C3%A9-031530290/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a 
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* <h4 className="font-semibold text-lg">Navigation</h4>
            <nav className="flex flex-col space-y-2"> */}
              {/* <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                À propos
              </a> */}
              {/* <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Projets
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a> */}
            {/* </nav> */}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 baldedioulde992@gmail.com</p>
              <p>📱 +224 620-50-31-10 / 662-60-91-80</p>
              <p>📍 Guinée, Conakry</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
