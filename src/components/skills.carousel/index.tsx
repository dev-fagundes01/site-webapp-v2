import { useRef, useState } from 'react';
import Card from '../card';
import { ArrowButton } from './styles';
import { Link } from 'react-router-dom';

interface SkillItem {
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
    <div style={{ width: '100%', textAlign: 'center', gap: '40px' }}>
      <div
        ref={containerRef}
        onScroll={checkScroll}
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          padding: '10px 0 0 0',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              flex: `0 0 ${CARD_WIDTH}px`,
              scrollSnapAlign: 'start',
            }}
          >
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
                titleSize={12}
                titleColor="#FFF"
                titleTextAlign="center"
              />
            </Link>
          </div>
        ))}
      </div>

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
    </div>
  );
}
