import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O Protocolo Adeus Insônia deve ser seguido diariamente?",
      answer: "O Protocolo Adeus Insônia deve ser seguido diariamente. Recomendamos o uso de técnicas de relaxamento e hábitos de higiene do sono conforme orientado para maximizar os benefícios."
    },
    {
      question: "Existem efeitos colaterais?",
      answer: "Não existem efeitos colaterais conhecidos. O plano é baseado em estratégias naturais e métodos seguros de organização financeira."
    },
    {
      question: "Quais são os benefícios do Protocolo Adeus Insônia?",
      answer: "Os principais benefícios incluem organização financeira completa, estratégias comprovadas de economia, acesso a destinos acessíveis e um passo a passo detalhado para realizar seus sonhos."
    },
    {
      question: "Por quanto tempo devo utilizar?",
      answer: "O plano é seu para sempre! Uma vez adquirido, você tem acesso vitalício a todo o conteúdo e pode aplicar as estratégias no seu tempo e ritmo."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos todas as principais formas de pagamento: cartão de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma 100% segura."
    },
    {
      question: "Como receberei o Protocolo Adeus Insônia?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente por email o acesso completo ao plano digital, incluindo todos os bônus e materiais complementares."
    },
    {
      question: "O Protocolo é baseado em evidências científicas?",
      answer: "Sim! Todas as estratégias foram desenvolvidas com base em métodos comprovados de educação financeira e planejamento, testados por centenas de casais reais."
    },
    {
      question: "Há suporte ou acompanhamento disponível?",
      answer: "Sim! Você terá suporte por email durante 30 dias para esclarecer dúvidas sobre a aplicação das estratégias do plano."
    },
    {
      question: "Posso combinar este protocolo com outros métodos de melhoria do sono?",
      answer: "Absolutamente! Nosso plano foi desenvolvido para complementar outras estratégias de organização e planejamento que você já utilize, potencializando ainda mais os resultados."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o Plano Estratégico
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
              <span className="text-primary font-semibold">📧 suporte@casamentodossonhos.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;