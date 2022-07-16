import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;
  width: 100%;
  margin: 0 20px;
  height: 100vh;
  max-width: 900px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  img {
    border-radius: 5px;
    max-height: 500px;
    max-width: 100%;
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  a,
  button {
    text-decoration: none;
    cursor: pointer;
    padding: 10px 20px;
    color: #ffffff;
    border: 3px solid white;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    background-color: transparent;
  }
`;
export const GettingReady = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  p {
    font-weight: 500;
    font-size: 1.5rem;
  }
  button {
    cursor: pointer;
    padding: 10px 20px;
    color: #ffffff;
    border: 3px solid white;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    background-color: transparent;
  }
`;
