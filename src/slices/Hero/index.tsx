"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BoundedHero from "@/components/BoundedHero";
import gsap from "gsap";
import { Shapes } from "./Shapes";


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          margin: 14,
          ease: "elastic.out(6,0.7)",
          duration: 1.5,
          transformOrigin: "left top",
          stagger: { each: 0.1, from: "random" },
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split(" ").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  return (
    <BoundedHero
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-5 justify-center -mt-16">
        <Shapes />
      </div>
      <div className="col-start-1 md:row-start-1 -mt-8" data-speed=".2">
        <h1
          className="mb-2 -mt-8 text-[clamp(3rem,10vmin,20rem)] text-center font-extrabold leading-none tracking-normal"
        >
          <span className="block text-slate-300 text-4xl md:text-6xl">
            {renderLetters(slice.primary.slogan, "title")}
          </span>
        </h1>
      </div>
    </BoundedHero>
  );
};

export default Hero;

 