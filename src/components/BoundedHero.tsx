import React from "react";
import clsx from "clsx";
import Image from "next/image";


type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;

};


const BoundedHero = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        // style={{backgroundImage: "url(/bg-hero3.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "100vw", height: "100vh",}}
        className={clsx("relative px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">
          <Image
          src="/bg-hero3.png"
          alt="Picture of a Forest"
          fill = {true}
          style={{objectFit: "cover",}}
          quality={75}
          />
          {children}
        </div>
      </Comp>
    );
  },
);

// Set a display name for the component
BoundedHero.displayName = "BoundedHero";

export default BoundedHero;