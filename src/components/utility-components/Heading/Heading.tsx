import { PropsWithChildren } from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export interface HeadingProps extends PropsWithChildren {
  tag?: HeadingTag;
  className?: string;
}

const Heading = ({ tag = 'h2', className, children }: HeadingProps) => {
  const HeadingTag = tag;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;
