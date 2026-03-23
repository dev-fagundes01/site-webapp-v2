import styled from 'styled-components';

export const CarouselContainer = styled.div`
  padding: 10px 0;
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > * {
    scroll-snap-align: start;
    flex: 0 0 auto;
    width: 354px;
    min-width: 354px;
    max-width: 354px;
    box-sizing: border-box;
  }

  /* hide default scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;
