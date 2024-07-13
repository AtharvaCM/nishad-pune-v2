/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';

import { cn } from '@/lib/utils';

import CTAList from '../common/cta-list';
import Img from '../common/img';
import Pretitle from '../common/pretitle';

export default function HeroSaaS({
  pretitle,
  content,
  ctas,
  image,
}: Readonly<
  Partial<{
    pretitle: string;
    content: any;
    ctas: Sanity.CTA[];
    image: Sanity.Image & {
      faded?: boolean;
    };
  }>
>) {
  return (
    <section className="section space-y-8 text-center">
      <div className="richtext mx-auto max-w-2xl text-balance">
        <Pretitle>{pretitle}</Pretitle>
        <PortableText value={content} />
        <CTAList ctas={ctas} className="!mt-8 justify-center" />
      </div>

      <Img
        image={image}
        className={cn(
          'anim-fade-to-t [animation-duration:1s]',
          image?.faded && '[mask-image:linear-gradient(to_bottom,#000_50%,transparent)]',
        )}
        draggable={false}
      />
    </section>
  );
}
