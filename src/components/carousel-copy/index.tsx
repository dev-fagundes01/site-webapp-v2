import React, { useRef, useState, useEffect } from 'react';
import {
  CarouselContainer,
  CardsWrapper,
  ArrowButton,
  Controls,
} from '../carousel/styles';
import Card from '../card';

interface CarouselProps {
  id: number;
  img: string;
  title: string;
  description?: string;
  list?: string[];
}

const Carousel: React.FC<{ items: CarouselProps[] }> = ({ items }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const multiple = items.length > 1;
      setCanPrev(multiple);
      setCanNext(multiple);
    };

    update();
    window.addEventListener('resize', update);
    el.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('resize', update);
      el.removeEventListener('scroll', update as EventListener);
    };
  }, [items]);

  const scrollByCard = (direction: 'next' | 'prev') => {
    const el = wrapperRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;

    const cardWidth = first.getBoundingClientRect().width;
    let gap = 16;
    if (el.children.length > 1) {
      const second = el.children[1] as HTMLElement;
      gap = Math.max(0, second.offsetLeft - first.offsetLeft - cardWidth);
    }

    const step = cardWidth + gap;
    const visibleIndex = Math.round(el.scrollLeft / step);
    const len = el.children.length;
    const delta = direction === 'next' ? 1 : -1;
    const targetIndex = (((visibleIndex + delta) % len) + len) % len;

    const target = el.children[targetIndex] as HTMLElement | undefined;
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCard('next');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCard('prev');
    }
  };

  return (
    <CarouselContainer
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <CardsWrapper ref={wrapperRef} role="list">
        {items.map((item) => (
          <Card
            justifyContent="flex-start"
            gap="0"
            padding="2rem 1rem"
            marginInline="1.5rem"
            imageSrc={item.img}
            key={item.id}
            title={item.title}
            titleAs="h3"
            titleSize={24}
            titleMarginTop={45}
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
        ))}
      </CardsWrapper>

      <Controls>
        <ArrowButton
          aria-label="Mostrar anterior"
          onClick={() => scrollByCard('prev')}
          disabled={!canPrev}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#003986"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowButton>

        <ArrowButton
          aria-label="Mostrar próximo"
          onClick={() => scrollByCard('next')}
          disabled={!canNext}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#003986"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowButton>
      </Controls>
    </CarouselContainer>
  );
};

export default Carousel;
