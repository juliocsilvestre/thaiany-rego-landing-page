import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  const handleScheduleClick = () => {
    // WhatsApp link para agendamento
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta com a Dra. Thaiany Rego.", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Consulta médica - Dra. Thaiany Rego" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient-primary">Dra. Thaiany Rego</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                Fetóloga, Ginecologista e Obstetra
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Cuidado especializado e humanizado para cada fase da vida da mulher, 
              com excelência no acompanhamento fetal e saúde materna.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={handleScheduleClick}
                className="btn-medical text-lg"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agende sua consulta
              </Button>
              
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary/10 hover:text-primary-dark focus:ring-primary text-lg btn-secondary-medical"
                size="lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;