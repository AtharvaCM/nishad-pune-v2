'use client';

import { PortableText } from '@portabletext/react';
import { stegaClean } from '@sanity/client/stega';
import { useEffect, useState } from 'react';
import { TypedObject } from 'sanity';

import { cn } from '@/lib/utils';
import { client } from '@/sanity/lib/client';

import CTAList from '../common/cta-list';
import Img, { Source } from '../common/img';
import Pretitle from '../common/pretitle';
import styles from './Hero.module.scss';

interface SanityVideo {
  asset: {
    _ref: string;
  };
  alt: string;
  overlay: boolean;
}

interface HeroProps {
  pretitle?: string;
  content?: TypedObject[];
  ctas?: Sanity.CTA[];
  bgType?: 'image' | 'video';
  bgImage?: Sanity.Image;
  bgVideo?: SanityVideo;
  bgVideoThumbnail?: Sanity.Image;
  bgImageMobile?: Sanity.Image;
  textAlign?: React.CSSProperties['textAlign'];
  alignItems?: React.CSSProperties['alignItems'];
}

export default function Hero({
  pretitle,
  content,
  ctas,
  bgType = 'image',
  bgImage,
  bgVideo,
  bgVideoThumbnail,
  bgImageMobile,
  textAlign = 'center',
  alignItems,
}: Readonly<Partial<HeroProps>>) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (bgType === 'video' && bgVideo?.asset?._ref) {
      const fetchVideoUrl = async () => {
        const videoAsset = await client.getDocument(bgVideo.asset._ref);
        if (videoAsset?.url) {
          setVideoUrl(videoAsset.url);
        }
      };

      fetchVideoUrl();
    }
  }, [bgType, bgVideo]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const hasImage = !!bgImage?.asset;
  const hasVideo = !!videoUrl;

  return (
    <section className={cn((hasImage || hasVideo) && 'grid overflow-hidden bg-background text-background *:col-span-full *:row-span-full')}>
      {bgType === 'image' && bgImage?.asset && (
        <picture className={cn(bgImage.overlay && styles['d-section__picture'])}>
          <Source image={bgImageMobile} imageWidth={1200} />
          <Img className="size-full max-h-fold object-cover" image={bgImage} imageWidth={1800} draggable={false} />
        </picture>
      )}

      {bgType === 'video' && (
        <>
          {!videoLoaded && bgVideoThumbnail?.asset && (
            <picture className={cn(bgVideoThumbnail.overlay && styles['d-section__picture'])}>
              <Img className="size-full max-h-fold object-cover" image={bgVideoThumbnail} imageWidth={1800} draggable={false} />
            </picture>
          )}
          {hasVideo && (
            <div className={cn(bgVideo?.overlay && styles['d-section__video-wrapper'], 'w-full h-[100svh] max-h-fold relative')}>
              <video
                className={cn('absolute size-full max-h-fold object-cover')}
                autoPlay
                muted
                playsInline
                onLoadedData={handleVideoLoaded}
                style={{ display: videoLoaded ? 'block' : 'none' }}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          )}
        </>
      )}

      {content && (
        <div className="section flex w-full flex-col">
          <div
            className={cn(
              'richtext relative isolate max-w-xl [&_:is(h1,h2)]:text-balance',
              (bgImage?.asset || hasVideo) && 'text-shadow',
              {
                'mb-8': stegaClean(alignItems) === 'start',
                'my-auto': stegaClean(alignItems) === 'center',
                'mt-auto': stegaClean(alignItems) === 'end',
              },
              {
                'mr-auto': stegaClean(textAlign) === 'left',
                'mx-auto': stegaClean(textAlign) === 'center',
                'ml-auto': stegaClean(textAlign) === 'right',
              },
            )}
            style={{ textAlign: stegaClean(textAlign) }}
          >
            <Pretitle className={cn((hasImage || hasVideo) && 'text-background/70')}>{pretitle}</Pretitle>
            <PortableText value={content} />
            <CTAList
              ctas={ctas}
              className={cn('!mt-4', {
                'justify-start': stegaClean(textAlign) === 'left',
                'justify-center': stegaClean(textAlign) === 'center',
                'justify-end': stegaClean(textAlign) === 'right',
              })}
            />
          </div>
        </div>
      )}
    </section>
  );
}
