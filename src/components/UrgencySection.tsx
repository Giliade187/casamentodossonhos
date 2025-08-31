import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Heart } from "lucide-react";
import { trackCTAClick } from "@/utils/fbPixel";

const UrgencySection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mobile-center">
              <span className="text-foreground">Seu </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                casamento e lua de mel dos sonhos
              </span>
              <span className="text-foreground"> podem começar hoje</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 mobile-center">
              Não deixe o tempo passar e os custos aumentarem. Cada dia que você adia 
              é um dia a menos para colocar as estratégias em prática e realizar seus sonhos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12">
              <div className="bg-gradient-card border border-destructive/30 rounded-xl p-4 sm:p-6">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-destructive mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Tempo é Dinheiro</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Quanto mais você espera, mais caro fica para organizar seu casamento
                </p>
              </div>
              
              <div className="bg-gradient-card border border-primary/30 rounded-xl p-4 sm:p-6">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Estratégia Clara</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Comece hoje mesmo a aplicar as técnicas e veja resultados rapidamente
                </p>
              </div>
              
              <div className="bg-gradient-card border border-accent/30 rounded-xl p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Sonhos Realizados</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Sua felicidade não pode esperar. Comece a construir seu futuro agora
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-card border-2 border-primary/30 rounded-2xl p-8">
              <div className="mb-6">
                <div className="text-2xl font-bold text-foreground mb-2">
                  🚨 Última chamada para transformar seus sonhos em realidade
                </div>
                <p className="text-muted-foreground">
                  Esta é sua oportunidade de ter acesso a tudo o que você precisa 
                  para realizar o casamento e a lua de mel dos seus sonhos
                </p>
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 w-full mobile-button animate-pulse-glow"
                onClick={() => {
                  trackCTAClick();
                  window.open('https://pay.kiwify.com.br/BGDfRXH', '_blank');
                }}
              >
                👉 Sim, eu quero meu plano estratégico agora
              </Button>
              
              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
                ⚡ Acesso imediato após a compra • 💳 Pagamento 100% seguro • 🛡️ 7 dias de garantia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;