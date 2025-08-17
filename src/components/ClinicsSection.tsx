import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ClinicsSection = () => {
  const clinics = [
    {
      name: "Clínica MaterCare",
      address: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
      phone: "(11) 3456-7890",
      whatsapp: "5511912345678",
      hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      specialties: ["Ultrassonografia Obstétrica", "Consultas de Pré-natal", "Ginecologia"]
    },
    {
      name: "Instituto Fetal São Paulo",
      address: "Avenida Paulista, 1500 - Bela Vista, São Paulo - SP",
      phone: "(11) 2345-6789",
      whatsapp: "5511987654321",
      hours: "Segunda a Sexta: 7h às 19h | Sábado: 8h às 14h",
      specialties: ["Medicina Fetal", "Ecocardiografia Fetal", "Doppler"]
    },
    {
      name: "Centro Médico da Mulher",
      address: "Rua Augusta, 789 - Consolação, São Paulo - SP",
      phone: "(11) 4567-8901",
      whatsapp: "5511876543210",
      hours: "Segunda a Sexta: 8h às 17h",
      specialties: ["Ginecologia Geral", "Planejamento Familiar", "Medicina Preventiva"]
    }
  ];

  const handleWhatsAppClick = (whatsapp: string, clinicName: string) => {
    const message = `Olá! Gostaria de agendar uma consulta com a Dra. Thaiany Rego na ${clinicName}.`;
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handlePhoneClick = (phone: string) => {
    window.open(`tel:${phone}`, "_blank");
  };

  return (
    <section id="clinicas" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg">Onde Atendemos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Clínicas de Atendimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Dra. Thaiany Rego atende em clínicas estrategicamente localizadas 
            para oferecer maior comodidade e acesso aos seus cuidados especializados.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
  {clinics.map((clinic, index) => (
    <Card key={index} className="card-medical group h-full">
      <div className="flex flex-col justify-between h-full p-6">
        <div className="space-y-6">
          {/* Título + Endereço */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {clinic.name}
            </h3>
            <div className="flex items-start space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5 mt-0.5 text-primary" />
              <p className="text-sm">{clinic.address}</p>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">{clinic.hours}</p>
            </div>
          </div>

          {/* Especialidades */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground">Especialidades:</h4>
            <div className="flex flex-wrap gap-2">
              {clinic.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Botões fixados na parte de baixo */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-auto">
          <Button
            onClick={() => handleWhatsAppClick(clinic.whatsapp, clinic.name)}
            className="btn-medical flex-1"
            size="sm"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button
            onClick={() => handlePhoneClick(clinic.phone)}
            variant="outline"
            className="text-primary border-primary hover:bg-primary/10 hover:text-primary-dark focus:ring-primary btn-secondary-medical flex-1"
            size="sm"
          >
            <Phone className="mr-2 h-4 w-4" />
            Ligar
          </Button>
        </div>
      </div>
    </Card>
  ))}
</div>


        <div className="text-center mt-12" id="agendamento">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Facilitamos seu Agendamento</h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato diretamente com a clínica de sua preferência e agende 
              sua consulta de forma rápida e prática.
            </p>
            <Button 
              className="btn-medical"
              onClick={() => handleWhatsAppClick("5511999999999", "qualquer uma de nossas clínicas")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com a Secretaria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;