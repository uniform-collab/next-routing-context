import {
  ComponentParameter,
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/canvas-next-rsc-v2/component";

export const HeroComponent = ({
  title,
  description,
  component,
}: ComponentProps<HeroProps>) => {
  return (
    <>
      <UniformText component={component} parameter={title} className="title" />
      <UniformRichText component={component} parameter={description} />
    </>
  );
};

export type HeroProps = {
  title: ComponentParameter<string>;
  description: ComponentParameter<string>;
};
