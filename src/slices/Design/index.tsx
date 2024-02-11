"use client";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CubeImage from "@/components/CubeImage";
import { useLayoutEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


/**
 * Props for `Design`.
 */
export type DesignProps = SliceComponentProps<Content.DesignSlice>;

/**
 * Component for "Design" Slices.
 */
const Design = ({ slice }: DesignProps): JSX.Element => {
  // useRef for GSAP timeline
  const component = useRef(null);

  // useEffect for GSAP timeline
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,// pin the trigger element while active
          trigger: ".cube-image",
          scrub: 1,
          markers: true,
        },
      });

      tl.to(".cube-image", {
        x: -1900,
        y: 1400,
        duration: 4,
        ease: "power1.inOut",
        markers: true,
      });


    },);
    // cleanup function to avoid memory leaks
    return () => ctx.revert(); // cleanup!
  }, []); // Empty dependency array ensures the effect runs once after the component mounts

  return (
    
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
    >
      <div className="h-[20vh]"></div>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] overflow-hidden cube-image">
        <Heading as="h1" size="xl" className="col-start-1">
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

export default Design;
