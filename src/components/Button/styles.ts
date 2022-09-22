import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors["base-primary"]};
  color: ${({ theme }) => theme.colors["neutral-secondary"]};
  border: none;
  width: 100%;
  padding: 0.75rem 1.5rem;
  align-self: flex-end;
  margin-top: 2rem;
  border-radius: 10px;
  text-transform: uppercase;
`;
