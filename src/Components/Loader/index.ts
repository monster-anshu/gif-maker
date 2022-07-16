import styled, { css } from 'styled-components';

interface Proptyes {
  width?: number;
  border?: number;
}
export const Loader = styled.div<Proptyes>`
  border: ${(props) => props.border}px solid #f3f3f3; /* Light grey */
  border-top: ${(props) => props.border}px solid #3498db; /* Blue */
  border-radius: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
