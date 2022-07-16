import styled from 'styled-components';

export const Container = styled.label`
  color: #ffffff;
  border: 5px dashed #ffffff;
  width: 100%;
  padding: 0 20px;
  border-radius: 10px;
  height: 100vh;
  max-width: 900px;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  margin: 0 20px;
  img {
    width: 100px;
  }

  p {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 500;
    margin: 10px 0;
  }
  button {
    color: #ffffff;
    border: 3px solid #ffffff;
    border-radius: 20px;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: transparent;
  }
`;
