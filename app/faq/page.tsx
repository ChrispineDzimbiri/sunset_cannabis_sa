import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Is Sunset Cannabis a seller?",
      answer:
        "No, Sunset Cannabis is a discovery platform that connects buyers with sellers. We do not sell products directly, process payments, or handle any transactions. All purchases happen between buyers and sellers via WhatsApp.",
    },
    {
      question: "How do I buy a product?",
      answer:
        "Browse our product listings, find something you like, and click on it to view details. Then click the 'Contact Seller on WhatsApp' button to connect directly with the seller. All negotiation and payment happens between you and the seller.",
    },
    {
      question: "Is payment done on the site?",
      answer:
        "No. Sunset Cannabis does not process any payments. All payment arrangements are made directly between the buyer and seller via WhatsApp. We recommend using secure payment methods and meeting in safe, public locations if arranging in-person exchanges.",
    },
    {
      question: "Is this legal?",
      answer:
        "Cannabis laws vary by region. In South Africa, personal cultivation and use have been decriminalized under certain conditions. However, the sale of cannabis is still regulated. We encourage all users to familiarize themselves with local laws and regulations. Users are responsible for ensuring their activities comply with applicable laws.",
    },
    {
      question: "How do I become a seller on Sunset Cannabis?",
      answer:
        "We're currently accepting applications from verified sellers. Please contact us via email or WhatsApp to learn more about our seller verification process and requirements. We prioritize quality and trustworthiness in all sellers on our platform.",
    },
    {
      question: "What if I have an issue with a seller?",
      answer:
        "While we strive to connect you with trusted sellers, all transactions happen independently of Sunset Cannabis. If you experience issues, please report them to us immediately so we can review the seller's listing. We recommend always verifying product details and arranging secure payment methods.",
    },
    {
      question: "Are the product images real?",
      answer:
        "Sellers provide their own product images. We encourage sellers to use authentic photos, but we recommend contacting the seller directly via WhatsApp to request additional photos or videos before making a purchase.",
    },
    {
      question: "Can I list products for free?",
      answer:
        "Listing policies vary. Please contact us to learn about current seller fees and requirements. We maintain high standards to ensure all products listed meet our quality expectations.",
    },
    {
      question: "Do you ship products?",
      answer:
        "Sunset Cannabis does not handle shipping or logistics. Shipping and delivery arrangements are made directly between buyers and sellers. Some sellers may offer delivery services—check the product listing or ask the seller directly.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes. We do not collect payment information since all transactions happen off-platform. We only collect basic information needed to operate the platform. Please see our Privacy Policy for detailed information about data handling.",
    },
  ]

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about Sunset Cannabis
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
