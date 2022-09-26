import {
  PlanCardContainer,
  CardHeaderRegular,
  CardHeaderHighlighted,
  CardDescription,
  PlanCardContent,
  CardPriceContainer,
  PlanBenefitContainer,
  PlanBenefitContent,
} from "./styles";
import { Check } from 'phosphor-react'
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid"
interface PlanCardProps {
  reais: number | string;
  cents: number | string;
  description: string;
  planBenefits: string[] | undefined;
  title: string;
  tag?: string;
  emphasis?: string
}

export function PlanCard({ reais, cents, description, planBenefits, title, tag, emphasis }: PlanCardProps) {

  return (
    <PlanCardContainer>
      {emphasis === "highlight" ?
        <CardHeaderHighlighted>
          <p>{title}</p>
          <span>{tag}</span>
        </CardHeaderHighlighted>
        :
        <CardHeaderRegular>
          <p>{title}</p>
        </CardHeaderRegular>
      }

      <PlanCardContent>
        <CardDescription>
          <CardPriceContainer>
            <strong>R$ {reais}</strong>
            <span>,{cents}</span>
            <span>/mês</span>
            <p>{description}</p>
          </CardPriceContainer>
        </CardDescription>
        <PlanBenefitContainer>
          {planBenefits === undefined ? "" : planBenefits.map((benefit) => (
            <PlanBenefitContent key={uuidv4()}>
              <Check size={16} weight="bold" />
              <span>{benefit}</span>
            </PlanBenefitContent>
          ))}
        </PlanBenefitContainer>
      </PlanCardContent>
      <Button variant={emphasis === "highlight" && "fill"} />
    </PlanCardContainer>
  )
}