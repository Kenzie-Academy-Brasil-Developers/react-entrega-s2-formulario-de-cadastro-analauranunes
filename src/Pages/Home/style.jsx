import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    background-color: #ec91d8;
    border: 1px solid RGB(229, 103, 155);
    border-radius: 4px;
    width: 90%;
    text-align: center;
  }

  img {
    width: 90%;
    max-width: 500px;
    border: 2px solid RGB(229, 103, 155);
    border-radius: 4px;
  }

  button {
    margin-top: 15px;
    border-style: none;
    border: 1px solid RGB(229, 103, 155);
    background-color: #ec91d8;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    padding: 12px;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    h1 {
      width: 50%;
    }
  }
`;
