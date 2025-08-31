import { Shield, Target, Users, TrendingUp } from "lucide-react";

const AuthoritySection = () => {
  const credentials = [
    {
      icon: Target,
      stat: "1000+",
      label: "Casais Atendidos"
    },
    {
      icon: TrendingUp,
      stat: "R$ 50k+",
      label: "Economizados em Média"
    },
    {
      icon: Users,
      stat: "97%",
      label: "Taxa de Sucesso"
    },
    {
      icon: Shield,
      stat: "5 Anos",
      label: "de Experiência"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Por que confiar nesse método?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Este plano não é sobre <strong className="text-destructive">cortar sonhos</strong>, 
              mas sobre <strong className="text-primary">realizá-los de forma inteligente</strong>. 
              Foi pensado para casais que querem construir o início da vida juntos com 
              <strong className="text-accent"> estratégia, organização e liberdade</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <credential.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {credential.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {credential.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Método Testado e Aprovado
            </h3>
            <p className="text-muted-foreground">
              Desenvolvido com base em anos de experiência ajudando casais reais a 
              realizarem seus sonhos sem comprometer a estabilidade financeira. 
              Cada estratégia foi testada e refinada para entregar resultados práticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;