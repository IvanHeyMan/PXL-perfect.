import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Development`.
 */
export type DevelopmentProps = SliceComponentProps<Content.DevelopmentSlice>;

/**
 * Component for "Development" Slices.
 */
const Development = ({ slice }: DevelopmentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for development (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Development;
