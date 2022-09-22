import {
  PlanCardContainer,
  CardHeader,
  CardDescription,
  PlanCardContent,
  CardPriceContainer,
  PlanBenefitContainer,
  PlanBenefitContent,
} from "./styles";
import { Check } from 'phosphor-react'
import { Button } from "../Button";

export function PlanCard() {
  return (
    <PlanCardContainer>
      <CardHeader>
        <p>Básico</p>
        <span>Popular</span>
      </CardHeader>
      <PlanCardContent>
        <CardDescription>
          <CardPriceContainer>
            <strong>R$ 29</strong>
            <span>,00</span>
            <span>/mês</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </CardPriceContainer>
        </CardDescription>
        <PlanBenefitContainer>
          <PlanBenefitContent>
            <Check size={16} weight="bold" />
            <span>Lorem ipsum dolor sit amet.</span>
          </PlanBenefitContent>
          <PlanBenefitContent>
            <Check size={16} weight="bold" />
            <span>Lorem ipsum dolor sit amet.</span>
          </PlanBenefitContent>
          <PlanBenefitContent>
            <Check size={16} weight="bold" />
            <span>Lorem ipsum dolor sit amet.</span>
          </PlanBenefitContent>
          <PlanBenefitContent>
            <Check size={16} weight="bold" />
            <span>Lorem ipsum dolor sit amet.</span>
          </PlanBenefitContent>
        </PlanBenefitContainer>
        <Button />
      </PlanCardContent>
    </PlanCardContainer>
  )
}