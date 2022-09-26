import styled, { css } from "styled-components";

interface ButtonProps {
  variant: "fill" | "outline";
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors["base-primary"]};
  width: 100%;
  padding: 0.75rem 1.5rem;
  align-self: flex-end;
  margin-top: 2rem;
  border-radius: 10px;
  text-transform: uppercase;

  ${({ variant, theme }) =>
    variant === "fill"
      ? css`
          background: ${({ theme }) => theme.colors["base-primary"]};
          color: ${({ theme }) => theme.colors["neutral-secondary"]};
        `
      : css`
          background: transparent;
          color: ${({ theme }) => theme.colors["base-primary"]};
        `}
`;
