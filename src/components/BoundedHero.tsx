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
        className={clsx("relative min-h-[110vh]", className)}
        {...restProps}
      >
        <div className="mx-auto my-auto h-full max-h-7xl w-full max-w-7xl">
          <Image
          src="/bg-hero3.png"
          alt="Picture of a Forest"
          fill={true}
          quality={100}
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