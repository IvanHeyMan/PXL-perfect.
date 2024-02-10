"use client";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CubeImage from "@/components/CubeImage";
import { useEffect } from "react";

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

/**
 * Props for `Seo`.
 */
export type SeoProps = SliceComponentProps<Content.SeoSlice>;

/**
 * Component for "Seo" Slices.
 */
const Seo = ({ slice }: SeoProps): JSX.Element => {
  // useEffect for GSAP timeline
  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Add a ScrollTrigger for the text animation
    ScrollTrigger.create({
      trigger: '#text3', // Specify the ID of the element you want to trigger the animation
      start: 'top 90%', // Adjust the start point based on your needs
      markers: true,
      onEnter: () => {
        // Animation to be executed when the trigger element enters the viewport
        tl.to("#text3", {
          duration: 3,
          text: "Boosting your online mojo with PXL Perfect SEO! We sprinkle some digital fairy dust to make your website shine on search engines. Let's get you noticed because being the coolest site in the digital jungle is the name of our game!",
          delay: 0.1,
          ease: "none",
        });
      },
    });
  }, []); // Empty dependency array ensures the effect runs once after the component mounts

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          {slice.primary.heading}
        </Heading>
        <div id="text3" className="prose prose-xl prose-slate prose-invert col-start-1">
          {/* PrismicRichText component can be added here if needed */}
        </div>
        {/* button */}
        {/* <Button linkField={slice.primary.button_link} label={slice.primary.button_text} /> */}
        {/* Cube office image styled */}
        <CubeImage
          image={slice.primary.image}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Seo;
