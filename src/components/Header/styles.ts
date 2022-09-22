import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors["base-primary"]};
  color: ${({ theme }) => theme.colors["page-bg"]};
  text-align: center;
  padding-top: 3.5rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 2.75rem;
    margin-bottom: 0.75rem;
  }

  p {
    width: 35vw;
    font-size: 1.15rem;
  }
`;
