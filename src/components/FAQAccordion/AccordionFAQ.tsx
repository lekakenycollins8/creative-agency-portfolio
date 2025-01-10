import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion"; // Assuming this is the file with your accordion components

const FAQs = [
  {
    question: "How much do you charge for a project?",
    answer: "My pricing varies based on the project's scope and requirements. Contact me for a customized quote."
  },
  {
    question: "Are there additional costs beyond the quoted price?",
    answer: "Additional costs may arise if the project scope changes significantly or requires third-party services."
  },
  {
    question: "Do you provide progress updates during the project?",
    answer: "Yes, I provide regular updates and share milestones to ensure transparency throughout the process."
  },
  {
    question: "Do you provide maintenance after project completion?",
    answer: "Yes, I offer post-launch maintenance and support plans for all my projects."
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer: "Yes, I can assist with hosting, domain setup, and website deployment."
  },
];

const FAQAccordion = () => {
  return (
    <div className="faq-section">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
    
      <Accordion type="single" collapsible>
        {FAQs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
