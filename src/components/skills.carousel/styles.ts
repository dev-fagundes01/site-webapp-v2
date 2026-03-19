import styled from 'styled-components';

export const ArrowButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px;
  width: 130px;
  height: 20px;

  svg {
    width: 50px;
    height: 50px;
    stroke: ${(props) => (props.disabled ? '#9CA3AF' : '#001633')};
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 0 0 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
`;

export const ItemWrapper = styled.div`
  flex: 0 0 191px;
  scroll-snap-align: start;
`;
