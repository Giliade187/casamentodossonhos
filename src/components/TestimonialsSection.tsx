import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana & João",
      location: "São Paulo, SP",
      text: "Achávamos que nunca daríamos conta de pagar a lua de mel. Com esse plano, conseguimos viajar para o Nordeste em um resort e ainda sobraram reservas para começar nossa vida juntos!",
      rating: 5
    },
    {
      name: "Maria & Carlos",
      location: "Rio de Janeiro, RJ",
      text: "O casamento dos nossos sonhos parecia impossível com nosso salário. Seguindo as estratégias do guia, conseguimos economizar R$ 15.000 em 8 meses. Realizamos tudo sem dívidas!",
      rating: 5
    },
    {
      name: "Fernanda & Ricardo",
      location: "Belo Horizonte, MG",
      text: "As dicas de destinos acessíveis foram incríveis! Fizemos nossa lua de mel em Portugal gastando menos do que gastaríamos em um resort no Brasil. Inesquecível!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            O que nossos casais estão dizendo
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de transformação e realização de sonhos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant relative"
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 inline-block">
            <div className="text-2xl font-bold text-primary mb-2">
              +1000 casais realizados
            </div>
            <div className="text-muted-foreground">
              Histórias de sucesso como essas acontecem todos os dias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;