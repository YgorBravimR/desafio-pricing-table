import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: ${({ theme }) => theme.colors["page-bg"]};
    color: ${({ theme }) => theme.colors["neutral-primary"]};
    -webkit-font-smoothing: antialiased;    
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

   input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-scrollbar {
      width: 0.4rem;
    }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-secondary"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["base-primary"]}
  }  
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
