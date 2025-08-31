import { AlertTriangle, CreditCard, Heart, DollarSign } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: "Casamento cada vez mais caro",
      description: "Os preços não param de subir e o orçamento parece nunca ser suficiente"
    },
    {
      icon: Heart,
      title: "Lua de mel parece um luxo inalcançável",
      description: "Aquela viagem dos sonhos fica sempre para 'quando sobrar dinheiro'"
    },
    {
      icon: CreditCard,
      title: "Dívidas que comprometem o futuro",
      description: "Começar a vida a dois com boletos e preocupações financeiras"
    },
    {
      icon: AlertTriangle,
      title: "Falta de estratégia clara",
      description: "Não saber como juntar dinheiro rápido e de forma inteligente"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-destructive">Você não precisa</span>{" "}
            <span className="text-foreground">começar sua vida a dois com</span>{" "}
            <span className="text-destructive">boletos atrasados e frustração!</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estes são os principais obstáculos que impedem casais de realizarem seus sonhos:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <point.icon className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;