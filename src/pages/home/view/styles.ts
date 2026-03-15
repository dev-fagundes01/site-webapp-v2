import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 583px;
  padding: 94px 70px;
  background-color: #001633;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const HomeContent = styled.main`
  display: flex;
  align-items: center;
  gap: 150px;
  width: 1144px;
  max-width: 100%;
`;

export const HomeTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 551px;
  flex-shrink: 0;
`;

export const HomeButton = styled.a`
  width: 127px;
  height: 40px;
  border-radius: 10px;
  color: white;
  background-color: #003986;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const AreasContainer = styled.div`
  padding: 60px 0 40px 0;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  user-select: none;
  margin-top: 20px;
`;

export const AreasContent = styled.div`
  width: 1144px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const AreasTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 920px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 935px;
`;
