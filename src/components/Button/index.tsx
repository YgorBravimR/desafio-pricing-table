import { ButtonContainer } from './styles'

interface ButtonProps {
  variant: "fill" | "outline"
}

export function Button({ variant }: any) {
  return (
    <ButtonContainer variant={variant}>
      Assinar
    </ButtonContainer>
  )
}