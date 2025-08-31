import { Button } from "@/components/ui/button";
import { Check, Heart, Plane, Shield } from "lucide-react";
import weddingImage from "@/assets/wedding-ceremony.jpg";
import { trackCTAClick } from "@/utils/fbPixel";

const TransformationSection = () => {
  const benefits = [
    {
      icon: Check,
      text: "Pagar seu casamento sem dívidas"
    },
    {
      icon: Plane,
      text: "Viajar para uma lua de mel incrível, no Brasil ou no exterior"
    },
    {
      icon: Shield,
      text: "Começar sua vida a dois com liberdade financeira"
    },
    {
      icon: Heart,
      text: "Realizar todos os seus sonhos sem comprometer o orçamento"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={weddingImage} 
                alt="Casamento dos sonhos" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            
            {/* Floating element */}
            <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm rounded-full p-4 animate-pulse-glow">
              <Heart className="w-8 h-8 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-foreground">Imagine </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  realizar todos os seus sonhos
                </span>
                <span className="text-foreground"> sem preocupações!</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                É possível sim ter o casamento e a lua de mel dos seus sonhos, 
                mesmo com um orçamento enxuto. Você só precisa da estratégia certa.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full lg:w-auto"
                onClick={() => {
                  trackCTAClick();
                  window.open('https://pay.kiwify.com.br/BGDfRXH', '_blank');
                }}
              >
                Quero descobrir essa estratégia agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;