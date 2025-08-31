import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border-2 border-accent/30 rounded-3xl p-12 relative">
            {/* Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-accent-foreground rounded-full p-4 shadow-elegant">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-6 pt-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Garantia de Satisfação Total
              </h2>
              
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-6xl font-bold text-accent">7</div>
                  <div className="ml-3 text-left">
                    <div className="text-xl font-semibold text-foreground">DIAS</div>
                    <div className="text-sm text-muted-foreground">de garantia</div>
                  </div>
                </div>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Se você aplicar as estratégias do nosso plano e não encontrar valor real 
                  para organizar seu casamento e lua de mel, <strong className="text-accent">
                  devolvemos 100% do seu dinheiro</strong> em até 7 dias, sem perguntas, 
                  sem burocracias.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Sem riscos</div>
                    <div className="text-sm text-muted-foreground">Investimento 100% protegido</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Sem burocracias</div>
                    <div className="text-sm text-muted-foreground">Reembolso rápido e simples</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Sem perguntas</div>
                    <div className="text-sm text-muted-foreground">Sua palavra é suficiente</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-muted-foreground italic">
                  "Estamos tão confiantes no valor do nosso método que assumimos todo o risco para você. 
                  Seu sucesso é a nossa prioridade!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;