import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  max-height: 650px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;
  flex-direction: column;
  video {
    width: 100%;
    max-height: 500px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 10px;
  button {
    cursor: pointer;
    padding: 5px 10px;
    color: #ffffff;
    border: 3px solid white;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    background-color: transparent;
  }
`;
