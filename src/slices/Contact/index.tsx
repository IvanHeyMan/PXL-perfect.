"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { ContactForm } from "@/components/ContactForm";


/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="items-center justify-center " >
        <h1 className="text-slate-300 text-4xl py-8 md:text-7xl text-center">
          {slice.primary.heading}
        </h1>
        <ContactForm />
      </div>
    </Bounded>
  );
};

export default Contact;

//We need to make a component for Contact Form and make it server side, cause this shit is not working


