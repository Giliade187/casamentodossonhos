import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import TransformationSection from "@/components/TransformationSection";
import GuideSection from "@/components/GuideSection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import UrgencySection from "@/components/UrgencySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Seção Principal com Mockup do Produto */}
      <Hero />
      
      {/* Identificação dos Problemas */}
      <PainSection />
      
      {/* Apresentação da Solução */}
      <TransformationSection />
      
      {/* Detalhes do Produto */}
      <GuideSection />
      
      {/* Credibilidade e Autoridade */}
      <AuthoritySection />
      
      {/* Prova Social */}
      <TestimonialsSection />
      
      {/* Oferta Principal */}
      <OfferSection />
      
      {/* Garantia */}
      <GuaranteeSection />
      
      {/* Perguntas Frequentes */}
      <FAQSection />
      
      {/* Urgência Final */}
      <UrgencySection />
    </div>
  );
};

export default Index;
