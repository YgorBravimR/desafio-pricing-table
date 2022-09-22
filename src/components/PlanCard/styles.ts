import styled from "styled-components";

export const PlanCardContainer = styled.section`
  height: 60vh;
  width: 19rem;
  margin-top: -7.5rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  background: ${({ theme }) => theme.colors["neutral-secondary"]};
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(142, 150, 185, 0.25);
`;

export const PlanCardContent = styled.div`
  padding: 1.25rem;
`;

export const CardHeader = styled.div`
  background: ${({ theme }) => theme.colors["base-secondary"]};
  padding: 1.5rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  box-shadow: 0px 1px 4px rgba(142, 150, 185, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors["base-primary"]};
    font-weight: 600;
    font-size: 1.25rem;
  }

  span {
    color: ${({ theme }) => theme.colors["neutral-secondary"]};
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme.colors["base-primary"]};
    padding: 0.5rem 1.5rem;
    border-radius: 40px;
  }
`;

export const CardDescription = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["detail-grey"]};
`;

export const CardPriceContainer = styled.div`
  strong {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors["neutral-primary"]};
  }

  strong + span {
    color: ${({ theme }) => theme.colors["neutral-primary"]};
    font-weight: bold;
  }

  span + span {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

export const PlanBenefitContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.325rem;
`;

export const PlanBenefitContent = styled.div`
  font-weight: 600;
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    font-size: 0.875rem;
  }

  svg {
    color: #59ce9f;
  }
`;
