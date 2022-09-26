import { useContext, useState } from 'react'
import { MyThemeContext } from '../../App'
import { SwitchComponent } from '../SwitchComponent'
import { HeaderContainer } from './styles'

export function Header() {

  const { setIsThemeDarkTrue } = useContext(MyThemeContext)

  return (
    <HeaderContainer>
      <SwitchComponent />
      <strong>Conheça nossos planos</strong>
      <p>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto.</p>
    </HeaderContainer>
  )
}