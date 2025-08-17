import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formação Especializada",
      description: "Especialização em Fetologia, Ginecologia e Obstetrícia pelas mais renomadas instituições"
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento personalizado e acolhedor, priorizando o bem-estar de cada paciente"
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Anos de experiência com as mais modernas técnicas em medicina fetal"
    },
    {
      icon: Users,
      title: "Confiança das Pacientes",
      description: "Milhares de mulheres e famílias cuidadas com dedicação e carinho"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-lg">Sobre a Doutora</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Dra. Thaiany Rego
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com mais de uma década dedicada à saúde da mulher, a Dra. Thaiany Rego 
                é reconhecida por sua excelência em Fetologia, Ginecologia e Obstetrícia.
              </p>
              <p>
                Formada pelas mais prestigiadas instituições do país, ela combina 
                conhecimento técnico avançado com um cuidado verdadeiramente humanizado, 
                acompanhando suas pacientes em todos os momentos importantes de suas vidas.
              </p>
              <p>
                Especialista em medicina fetal, a Dra. Thaiany se dedica especialmente 
                ao diagnóstico e acompanhamento de gestações, proporcionando tranquilidade 
                e segurança para mães e bebês.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Consultório médico da Dra. Thaiany Rego" 
              className="rounded-3xl shadow-medium w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-medium">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-medical text-center group hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;