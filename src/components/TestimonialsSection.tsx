import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Dra. Thaiany me acompanhou durante toda minha gestação. Seu cuidado e atenção foram fundamentais para que eu me sentisse segura e tranquila. Profissional excepcional!",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      text: "Excelente profissional! Os exames foram realizados com muito carinho e precisão. A doutora sempre explicava tudo detalhadamente, o que me deixava muito mais confiante.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      text: "Não tenho palavras para agradecer o cuidado da Dra. Thaiany. Ela detectou uma alteração no coração do meu bebê e me encaminhou para o tratamento adequado. Meu filho nasceu saudável!",
      rating: 5
    }
  ];

  const values = [
    {
      title: "Cuidado Humanizado",
      description: "Cada paciente é única e merece atenção personalizada e acolhedora."
    },
    {
      title: "Excelência Técnica",
      description: "Conhecimento atualizado e tecnologia de ponta para diagnósticos precisos."
    },
    {
      title: "Confiança e Segurança",
      description: "Proporcionamos tranquilidade em momentos tão importantes da vida."
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Confiança que Transforma Vidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O cuidado dedicado e a excelência profissional da Dra. Thaiany Rego 
            são reconhecidos por suas pacientes e suas famílias.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-medical relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Paciente</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Nossos Valores</h3>
            <p className="text-lg text-muted-foreground">
              Princípios que norteiam nossa prática médica e relacionamento com pacientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">
              "Cuide da sua saúde e do seu bebê com quem entende de verdade."
            </h3>
            <p className="text-xl mb-6">
              Dra. Thaiany Rego - Sua saúde é nossa prioridade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;