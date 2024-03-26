'use client';

import Image from 'next/image';
import './heroSlider.css';
import { heroData } from '@utils/data';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="slider-container" ref={emblaRef}>
      <div className="embla__container">
        {heroData.map((slide, index) => (
          <div
            className="embla__slide"
            key={index}
            style={{
              backgroundColor: slide.backgroundColor,
              color: slide.textColor,
            }}
          >
            <div className="slider-img-container">
              <Image src={slide.url} alt="" width={500} height={500} />
            </div>
            <div className="slide-text-container">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-desc">{slide.desc}</p>
              <Link
                className="slide-link"
                href="/"
                style={{
                  backgroundColor: slide.textColor,
                  color: slide.backgroundColor,
                }}
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
