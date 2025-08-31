import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Gift } from "lucide-react";
import { trackCTAClick, trackOfferView } from "@/utils/fbPixel";

const OfferSection = () => {
  // Track quando a oferta é visualizada
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackOfferView();
          }
        });
      },
      { threshold: 0.5 }
    );

    const offerElement = document.getElementById('offer-section');
    if (offerElement) {
      observer.observe(offerElement);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Acesso vitalício ao plano completo",
    "Estratégias testadas e aprovadas",
    "Lista exclusiva de destinos acessíveis",
    "Planilhas de organização financeira",
    "Checklist completo para o casamento",
    "Suporte por email por 30 dias"
  ];

  return (
    <section id="offer-section" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 mobile-center">
              <span className="text-foreground">O investimento de </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                um jantar
              </span>
              <span className="text-foreground"> pode transformar seu casamento e lua de mel em realidade</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4 mobile-center">
              Menos do que você gastaria em uma única saída, mais do que você economizará para sempre
            </p>
          </div>
          
          <div className="bg-gradient-card border-2 border-primary/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            {/* Highlight badge */}
            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-accent text-accent-foreground px-4 sm:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-elegant">
                🔥 OFERTA LIMITADA
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-center lg:text-left mobile-center">
                <div className="mb-6 sm:mb-8">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-4 mb-4">
                    <div className="text-sm text-red-600 font-medium mb-2">
                      🔥 OFERTA POR TEMPO LIMITADO
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <span className="text-lg text-red-500 line-through font-medium">
                        De R$ 197,00
                      </span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        81% OFF
                      </span>
                    </div>
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-green-600 mb-2">
                      R$ 37
                    </div>
                    <div className="text-base sm:text-lg text-gray-600 font-medium">
                      💳 Pagamento único • ♾️ Acesso vitalício
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="text-sm text-green-700 font-medium text-center lg:text-left">
                      ⚡ Menos que o preço de um jantar para dois!
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3 text-center lg:text-left">
                    ✨ O que você vai receber:
                  </h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-base sm:text-lg lg:text-xl py-4 sm:py-6 mobile-button"
                  onClick={() => {
                    trackCTAClick();
                    window.open('https://pay.kiwify.com.br/BGDfRXH', '_blank');
                  }}
                >
                  👉 Quero meu Plano Estratégico Agora
                </Button>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="flex flex-col items-center space-y-1">
                      <Shield className="w-6 h-6 text-green-600" />
                      <span className="text-xs font-medium text-gray-700">Compra 100% Segura</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700">Acesso Imediato</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <Gift className="w-6 h-6 text-purple-600" />
                      <span className="text-xs font-medium text-gray-700">7 Dias de Garantia</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block font-bold text-sm mb-2">
                    💰 VALOR TOTAL: R$ 297
                  </div>
                  <h3 className="text-xl font-bold text-orange-800">
                    🎁 BÔNUS EXCLUSIVOS GRÁTIS
                  </h3>
                  <p className="text-sm text-orange-600 font-medium">
                    (Inclusos no seu plano de R$ 37)
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white border border-yellow-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">1</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 mb-1">Lua de Mel dos Sonhos</div>
                        <div className="text-sm text-gray-600">Estratégia financeira completa para sua viagem</div>
                        <div className="text-xs text-green-600 font-semibold mt-1">Valor: R$ 97</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-yellow-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">2</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 mb-1">Estratégia Financeira</div>
                        <div className="text-sm text-gray-600">Lugares e destinos com melhor custo-benefício</div>
                        <div className="text-xs text-green-600 font-semibold mt-1">Valor: R$ 127</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-yellow-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">3</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 mb-1">Planejamento Completo</div>
                        <div className="text-sm text-gray-600">Guia completo de organização e execução</div>
                        <div className="text-xs text-green-600 font-semibold mt-1">Valor: R$ 73</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-100 border border-green-300 rounded-lg p-3 mt-4 text-center">
                  <div className="text-sm font-bold text-green-800">
                    🔥 TUDO ISSO POR APENAS R$ 37 (ao invés de R$ 494)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;