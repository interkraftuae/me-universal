import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is ME Universal?",
    a: "ME Universal is a building and home technology distributor, aggregator, and solution provider offering smart building automation, IoT, and lifestyle technology solutions across India, the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Iraq, Kenya, and Ethiopia.",
  },
  {
    q: "What is the Per Sqm model?",
    a: "The Per Sqm model prices smart building and lifestyle technology solutions based on a property's built-up area, giving architects, developers, and homeowners a simple way to budget automation, lighting, and infrastructure upgrades across an entire project.",
  },
  {
    q: "What products does ME Universal offer?",
    a: "ME Universal's hero products include DC lighting and automation, air powered laundry collection systems, central vacuum systems, and garbage and linen chute systems, alongside 18 global technology brands covering home and building solutions.",
  },
  {
    q: "Which countries does ME Universal operate in?",
    a: "ME Universal operates across India, the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Iraq, Kenya, and Ethiopia, supplying and installing smart building technology through local exclusive partners and experience centers.",
  },
  {
    q: "How can I become an ME Universal exclusive partner?",
    a: "Businesses in the GCC, Middle East, and Africa can apply to become an ME Universal exclusive partner by setting up a branded experience center and investing in the Per Sqm distribution model for their region.",
  },
];

export default function Faq() {
  return (
    <section className=" py-16 bg-[#15141D] text-white">
      <div className="container max-w-3xl">
        <h2 className="text-4xl font-montserrat tracking-tight mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`item-${index}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-300 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}