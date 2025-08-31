import { Button } from "@/components/ui/button";
import protocoloMockup from "@/assets/protocolo-3d-mockup.jpg";
import { trackCTAClick } from "@/utils/fbPixel";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(180_70%_55%_/_0.1),transparent_70%)]" />
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mobile-center">
                <span className="text-foreground">Você sonha com o</span>{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  casamento e a lua de mel
                </span>{" "}
                <span className="text-foreground">dos seus sonhos?</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-red-600 mobile-center drop-shadow-lg shadow-red-800/50" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Mas o dinheiro parece um obstáculo intransponível?
              </p>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              {/* Imagem do produto inserida aqui - visível apenas em mobile */}
              <div className="block lg:hidden relative my-6">
                <div className="relative text-center">
                  <img 
                    src={protocoloMockup} 
                    alt="Protocolo Casamento dos Sonhos" 
                    className="w-full max-w-xs mx-auto animate-float drop-shadow-2xl"
                  />
                </div>
                
                {/* Floating stats para mobile */}
                <div className="absolute -top-2 -right-2 bg-card border border-primary/20 rounded-lg p-2 shadow-elegant">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">+1000</div>
                    <div className="text-xs text-muted-foreground">Casais realizados</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -left-2 bg-card border border-accent/20 rounded-lg p-2 shadow-elegant">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">97%</div>
                    <div className="text-xs text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-foreground/90 mobile-center">
                Descubra o passo a passo estratégico que já ajudou casais a organizarem as finanças, 
                levantarem recursos e realizarem o casamento dos sonhos <strong className="text-primary">sem dívidas</strong>.
              </p>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-4 sm:py-6 w-full mobile-button"
                onClick={() => {
                  trackCTAClick();
                  window.open('https://pay.kiwify.com.br/BGDfRXH', '_blank');
                }}
              >
                👉 Quero planejar meu casamento sem dívidas
              </Button>
              
              <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Compra segura - 7 dias de garantia</span>
              </div>
            </div>
          </div>
          
          {/* Imagem do produto para desktop - mantida na lateral */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <div className="relative text-center">
              <img 
                src={protocoloMockup} 
                alt="Protocolo Casamento dos Sonhos" 
                className="w-full max-w-xs sm:max-w-md mx-auto animate-float drop-shadow-2xl"
              />
            </div>
            
            {/* Floating stats - Otimizadas para desktop */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-card border border-primary/20 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-elegant">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary">+1000</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Casais realizados</div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-card border border-accent/20 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-elegant">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-accent">97%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;