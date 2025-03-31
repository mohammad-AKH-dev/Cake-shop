import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordeons() {
  return (
    <div className="accordions container my-16 mb-36 ">
      <Accordion
        type="single"
        collapsible
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12"
      >
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="flex lg:flex-row-reverse text-[18px] hover:no-underline font-bold">
            In what formats are your templates available?
          </AccordionTrigger>
          <AccordionContent className="text-text text-[15px] leading-7">
            Website templates are available in Photoshop and HTML formats. Fonts
            are included with Photoshop file. In most templates HTML is
            compatible with Adobe® Dreamweaver® and Microsoft Frontpage®.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="">
          <AccordionTrigger className="flex lg:flex-row-reverse text-[18px] hover:no-underline font-bold">
            What am I allowed to do with the templates?
          </AccordionTrigger>
          <AccordionContent className="text-text text-[15px] leading-7">
            You may build a website using the template in any way you like. You
            may not resell or redistribute templates (like we do); claim
            intellectual or exclusive ownership to any of our products, modified
            or unmodified. All products are property of content providing
            companies and individuals. You are also not allowed to make more
            than one project using the same template (you have to purchase the
            same template once more in order to make another project with the
            same design).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="">
          <AccordionTrigger className="flex lg:flex-row-reverse text-[18px] hover:no-underline font-bold">
            Do you provide any scripts with your templates?
          </AccordionTrigger>
          <AccordionContent className="text-text text-[15px] leading-7">
            Our templates do not include any additional scripts. Newsletter
            subscriptions, search fields, forums, image galleries (in HTML
            versions of Flash products) are inactive. Basic scripts can be
            easily added at www.zemez.io If you are not sure that the element
            you’re interested in is active please contact our Support Chat for
            clarification.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="">
          <AccordionTrigger className="flex lg:flex-row-reverse text-[18px] hover:no-underline font-bold">
            What is a unique/non-unique purchase?
          </AccordionTrigger>
          <AccordionContent className="text-text text-[15px] leading-7">
            Non-exclusive purchase means that other people can buy the template
            you have chosen some time later. Exclusive or unique purchase
            guarantees that you are the last person to buy this template. After
            an exclusive purchase occurs the template is being permanently
            removed from the sales directory and will never be available to
            other customers again. Only you and people who bought the template
            before you will own it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="">
          <AccordionTrigger className="flex lg:flex-row-reverse text-[18px] hover:no-underline font-bold">
            What do I receive when I order a template?
          </AccordionTrigger>
          <AccordionContent className="text-text text-[15px] leading-7 w-full">
            After you complete the payment via our secure form you will receive
            the instructions for downloading the product. The source files in
            the download package can vary based on the type of the product you
            have purchased.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="">
          <AccordionTrigger className="flex lg:flex-row-reverse text-[18px] hover:no-underline font-bold">
            How can I pay for my order?
          </AccordionTrigger>
          <AccordionContent className="text-text text-[15px] leading-7 w-full">
            We accept Visa, MasterCard, and American Express credit and debit
            cards for your convenience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Accordeons;
