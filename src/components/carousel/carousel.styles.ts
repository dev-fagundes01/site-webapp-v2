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

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const ArrowButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px;
  padding: 8px;
  width: auto;
  height: auto;

  svg {
    width: 50px;
    height: 50px;
    stroke: ${(props) => (props.disabled ? '#9CA3AF' : '#001633')};
  }
`;
