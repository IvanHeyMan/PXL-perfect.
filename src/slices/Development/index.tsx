"use client";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CubeImage from "@/components/CubeImage";
import { useLayoutEffect, useRef, } from "react";
import { PrismicRichText } from "@prismicio/react";

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

/**
 * Props for `Development`.
 */
export type DevelopmentProps = SliceComponentProps<Content.DevelopmentSlice>;

/**
 * Component for "Development" Slices.
 */
const Development = ({ slice }: DevelopmentProps): JSX.Element => {
  // useRef for GSAP timeline
  const component = useRef(null);

  // useEffect for GSAP timeline
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          start:"30%",
          pin: true,// pin the trigger element while active
          trigger: ".galaxy-image",
          scrub: 1,

        },
      });

      tl.to(".galaxy-image", {
        x: 1900,
        y: 1400,
        duration: 4,
        ease: "power1.inOut",

      });


    },);
    // cleanup function to avoid memory leaks
    return () => ctx.revert(); // cleanup!
  }, []); // Empty dependency array ensures the effect runs once after the component mounts

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className= "overflow-hidden"
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] galaxy-image">
        <Heading as="h1"className="col-start-1 md:text-9xl -m-2">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.description} />
        </div>
        {/* button */}
        {/* <Button linkField={slice.primary.button_link} label={slice.primary.button_text} /> */}
        {/* Cube office image styled */}
        <CubeImage
          image={slice.primary.image}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
      <div className="h-[50vh]"></div>
    </Bounded>
  );
};

export default Development;
