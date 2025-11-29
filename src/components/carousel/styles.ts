import styled from 'styled-components';
import { pxToRem } from '../../utils/pxToRem';

export const CarouselContainer = styled.div`
  padding: 20px;
  position: relative;
`;

export const CarouselTitle = styled.h1`
  color: var(--brand-primary-brand-color-primary-pure, #003986);
  text-align: center;
  font-family: 'Radio Canada';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  height: 75px;
  margin-top: 60px;
`;

export const CarouselSubtitle = styled.p`
  color: var(--black-color-pure, #323232);
  text-align: center;
  margin: 50px;
  font-family: 'Radio Canada';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 28rem;
  margin: 0 auto;
  padding: 10px 0;
  padding-right: 29rem;
  width: ${pxToRem(1042)};
  border: 1px solid #0056b3;
  border-radius: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* hide default scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 260px;
  min-width: 260px;
  height: 300px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--brand-primary-brand-color-primary-medium, #002c66);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;

export const CardIcon = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const CardDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  color: #8bb8ff;
  width: 100%;
  height: 100%;
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88%;
  display: flex;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.06);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
