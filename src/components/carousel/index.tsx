import React, { useRef, useState, useEffect } from 'react';
import {
  CarouselContainer,
  CardsWrapper,
  ArrowsContainer,
  ArrowButton,
} from './carousel.styles';
import Card from '../card';

export interface CarouselItem {
  id?: string | number;
  img?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  list?: string[];
  quote?: string;
  name?: string;
  role?: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  renderItem?: (item: CarouselItem, index: number) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ items, renderItem }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleScroll = () => {
    const el = wrapperRef.current;
    if (!el) return;

    const isAtStart = el.scrollLeft <= 5;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

    setCanScrollPrev(!isAtStart);
    setCanScrollNext(!isAtEnd);
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    handleScroll(); // Initial check

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // After mount, verify dimensions because DOM sizing can be delayed
    setTimeout(handleScroll, 100);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items]);

  const scrollByPage = (direction: 'next' | 'prev') => {
    const el = wrapperRef.current;
    if (!el) return;

    const cardWidth = 354 + 24; // Card width + gap (1.5rem = 24px)
    // Scroll intentionally by exactly 3 cards for an entire new session
    const scrollAmount =
      direction === 'next' ? cardWidth * 3 : -(cardWidth * 3);

    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && canScrollNext) {
      e.preventDefault();
      scrollByPage('next');
    } else if (e.key === 'ArrowLeft' && canScrollPrev) {
      e.preventDefault();
      scrollByPage('prev');
    }
  };

  return (
    <CarouselContainer
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <CardsWrapper ref={wrapperRef} role="list">
        {items.map((item, index) =>
          renderItem ? (
            renderItem(item, index)
          ) : (
            <Card
              justifyContent="flex-start"
              gap="0"
              padding="2rem 1rem"
              marginInline="1.5rem"
              imageSrc={item.img}
              key={index}
              title={item.title}
              titleAs="h3"
              titleSize={24}
              titleMarginTop={45}
              subtitle={item.subtitle}
              description={item.description}
              descriptionLineHeight={1.6}
              descriptionSize={16}
              descriptionColor="#000000"
              descriptionWeight={400}
              descriptionWidth={468}
              list={item.list}
              listSize={16}
              listColor="#000000"
              listWeight={400}
              listMarginLeft={24}
            />
          ),
        )}
      </CardsWrapper>

      <ArrowsContainer>
        <ArrowButton
          onClick={() => canScrollPrev && scrollByPage('prev')}
          disabled={!canScrollPrev}
          aria-label="Ver item anterior"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>

        <ArrowButton
          onClick={() => scrollByPage('next')}
          disabled={!canScrollNext}
          aria-label="Ver próximo item"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>
      </ArrowsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
