import styled from "styled-components";

export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-height: 89%;
  max-height: 89%;
  border: 1px solid RGB(229, 103, 155);
  background-color: #ffbeef;
  opacity: 0.9;
  gap: 8px;
  border-radius: 10px;

  img {
    width: 80px;
  }

  .top-img {
    align-self: flex-end;
    position: absolute;
    top: 5px;
  }

  .bottom-img {
    align-self: flex-start;
    position: absolute;
    bottom: 10px;
  }

  input {
    border-style: none;
    outline: none;
  }

  .inputs {
    padding: 15px;
    border: 1px solid RGB(229, 103, 155);
    width: 80%;
  }

  .password-input {
    width: 100%;
  }

  .password-div {
    padding: 13px;
    border: 1px solid RGB(229, 103, 155);
    width: 80%;
    display: flex;
    justify-content: space-between;
    background-color: white;
  }

  .error-span {
    font-size: 11px;
    color: red;
    text-align: center;
  }

  .eye-span {
    cursor: pointer;
    color: #ec91d8;
  }

  button {
    padding: 12px;
    font-size: 18px;
    border-style: none;
    border: 1px solid RGB(229, 103, 155);
    border-radius: 4px;
    background-color: #ec91d8;
    color: white;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 40%;
  }
`;
