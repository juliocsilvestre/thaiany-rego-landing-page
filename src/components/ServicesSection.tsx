import { Card } from "@/components/ui/card";
import { 
  Baby, 
  Heart, 
  Stethoscope, 
  Monitor,
  Users,
  Shield,
  Activity,
  Flower
} from "lucide-react";
import servicesImage from "@/assets/services-bg.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Baby,
      title: "Ultrassonografia Obstétrica",
      description: "Acompanhamento completo da gestação com tecnologia de última geração para avaliar o desenvolvimento fetal."
    },
    {
      icon: Monitor,
      title: "Ultrassonografia Morfológica",
      description: "Exame detalhado para avaliar a formação dos órgãos e detectar possíveis alterações no bebê."
    },
    {
      icon: Heart,
      title: "Ecocardiografia Fetal",
      description: "Especializada em avaliar o coração do bebê ainda no útero, garantindo a saúde cardíaca fetal."
    },
    {
      icon: Activity,
      title: "Doppler Fetal",
      description: "Avaliação da circulação sanguínea materno-fetal para monitorar o bem-estar do bebê."
    },
    {
      icon: Stethoscope,
      title: "Consultas de Pré-natal",
      description: "Acompanhamento completo da gestação com cuidado personalizado e orientações especializadas."
    },
    {
      icon: Flower,
      title: "Ginecologia Geral",
      description: "Cuidado integral da saúde feminina em todas as fases da vida da mulher."
    },
    {
      icon: Shield,
      title: "Medicina Preventiva",
      description: "Prevenção e diagnóstico precoce de doenças através de exames e consultas regulares."
    },
    {
      icon: Users,
      title: "Planejamento Familiar",
      description: "Orientação especializada para casais que desejam engravidar ou planejar a família."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Exames e Atendimentos Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em saúde da mulher e medicina fetal, 
            sempre com tecnologia avançada e cuidado humanizado.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="relative mb-16">
          <img 
            src={servicesImage} 
            alt="Equipamentos médicos - Dra. Thaiany Rego" 
            className="rounded-3xl shadow-medium w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">Tecnologia de Ponta</h3>
              <p className="text-lg">Equipamentos modernos para diagnósticos precisos</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-medical group hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;