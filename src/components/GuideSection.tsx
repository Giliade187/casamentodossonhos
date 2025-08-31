import { Calculator, MapPin, TrendingUp, CheckSquare } from "lucide-react";
import guideImage from "@/assets/guide-mockup.jpg";

const GuideSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Planejamento Financeiro Inteligente",
      description: "Como organizar receitas e despesas para focar no casamento sem comprometer outras áreas da sua vida."
    },
    {
      icon: TrendingUp,
      title: "Formas Estratégicas de Levantar Dinheiro",
      description: "Cashback, milhas, uso inteligente do cartão, renda extra simples para casais que realmente funcionam."
    },
    {
      icon: MapPin,
      title: "Destinos Acessíveis e Incríveis",
      description: "Lista exclusiva de lugares no Brasil e exterior que cabem no bolso e proporcionam experiências inesquecíveis."
    },
    {
      icon: CheckSquare,
      title: "Passo a Passo de Organização",
      description: "Checklist prático para cada fase: antes, durante e depois do casamento, sem esquecer nenhum detalhe."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O que você vai receber no</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Plano Estratégico Casamento & Lua de Mel dos Sonhos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um guia completo e prático para transformar seus sonhos em realidade
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center">
            <div className="relative inline-block">
              <img 
                src={guideImage} 
                alt="Plano Estratégico Casamento & Lua de Mel dos Sonhos" 
                className="w-full max-w-md mx-auto animate-float shadow-elegant rounded-2xl"
              />
              
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 font-bold text-sm shadow-elegant">
                MÉTODO EXCLUSIVO
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-primary/90 backdrop-blur-sm rounded-xl p-3 shadow-elegant animate-pulse-glow">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-foreground">100%</div>
                  <div className="text-xs text-primary-foreground/80">Prático</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;