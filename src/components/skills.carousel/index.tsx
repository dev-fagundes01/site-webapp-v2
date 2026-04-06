import { useRef, useState } from 'react';
import Card from '../card';
import {
  ArrowButton,
  ArrowsContainer,
  CarouselWrapper,
  ItemWrapper,
  ScrollContainer,
} from './styles';
import { Link } from 'react-router-dom';

export interface SkillItem {
  id: number;
  img: string;
  title: string;
  area: string;
}

interface SkillsCarouselProps {
  items: SkillItem[];
}

const CARD_WIDTH = 191;
const GAP = 16;
const VISIBLE_CARDS = 4;

export default function SkillsCarousel({ items }: SkillsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: 'next' | 'prev') => {
    if (!containerRef.current) return;

    const scrollAmount = (CARD_WIDTH + GAP) * VISIBLE_CARDS;

    containerRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(checkScroll, 400);
  };

  return (
    <CarouselWrapper>
      <ScrollContainer ref={containerRef} onScroll={checkScroll}>
        {items.map((item) => (
          <ItemWrapper key={item.id}>
            <Link to={`/area/${item.area}`} style={{ textDecoration: 'none' }}>
              <Card
                edgeSection
                flexDirection="column"
                justifyContent="center"
                padding="24px"
                height={147}
                width={191}
                backgroundColor="#001633"
                imageSrc={item.img}
                imageWidth={61}
                imageHeight={61}
                title={item.title}
                titleSize={16}
                titleColor="#FFF"
                titleTextAlign="center"
                titleMarginTop="0.5rem"
                titleMarginBottom="0rem"
              />
            </Link>
          </ItemWrapper>
        ))}
      </ScrollContainer>

      <ArrowsContainer>
        <ArrowButton
          onClick={() => scroll('prev')}
          disabled={!canScrollLeft}
          aria-label="Ver item anterior"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>

        <ArrowButton
          onClick={() => scroll('next')}
          disabled={!canScrollRight}
          aria-label="Ver próximo item"
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" fill="none" strokeWidth="2" />
          </svg>
        </ArrowButton>
      </ArrowsContainer>
    </CarouselWrapper>
  );
}
