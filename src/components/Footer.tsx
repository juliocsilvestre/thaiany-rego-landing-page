import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Clock,
  Heart
} from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta com a Dra. Thaiany Rego.", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:contato@drathaianyrego.com.br", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+551134567890", "_blank");
  };

  return (
    <footer id="contato" className="bg-gradient-to-b from-primary/5 to-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* CTA Final */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-primary-foreground">
            <div className="max-w-4xl mx-auto space-y-6">
              <Heart className="h-12 w-12 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Cuide da sua saúde e do seu bebê com quem entende de verdade
              </h2>
              <p className="text-xl opacity-90">
                Agende sua consulta e tenha o acompanhamento especializado que você merece
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full font-semibold"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agende sua consulta agora
              </Button>
            </div>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Contatos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <button 
                  onClick={handlePhoneClick}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (11) 3456-7890
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <button 
                  onClick={handleEmailClick}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@drathaianyrego.com.br
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Especialidades</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Fetologia</p>
              <p>• Ginecologia</p>
              <p>• Obstetrícia</p>
              <p>• Ultrassonografia</p>
              <p>• Medicina Fetal</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Horários</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">Segunda a Sexta: 8h às 18h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">Sábado: 8h às 12h</span>
              </div>
              <p className="text-sm">Domingo: Fechado</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Redes Sociais</h3>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open("https://instagram.com/drathaianyrego", "_blank")}
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </button>
              <button 
                onClick={() => window.open("https://facebook.com/drathaianyrego", "_blank")}
                className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Siga-nos para dicas de saúde e novidades
            </p>
          </div>
        </div>

        {/* Informações da Médica */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gradient-primary">
              Dra. Thaiany Rego
            </h2>
            <p className="text-lg text-muted-foreground">
              CRM XX.XXX-XX | Fetóloga, Ginecologista e Obstetra
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>São Paulo - SP</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Dra. Thaiany Rego. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Desenvolvido com ❤️ para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;