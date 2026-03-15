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
