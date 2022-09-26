import { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { PlanCard } from "./components/PlanCard";
import { GlobalStyle, CardsContainer } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/themes/themes";


export const MyThemeContext = createContext({} as any)

export function App() {
  const [isThemeDarkTrue, setIsThemeDarkTrue] = useState(false)
  console.log(isThemeDarkTrue)

  return (
    <ThemeProvider theme={!isThemeDarkTrue ? lightTheme : darkTheme}>
      <MyThemeContext.Provider value={{ setIsThemeDarkTrue }}>
        <GlobalStyle />
        <Header />
        <CardsContainer>
          <PlanCard
            description="O melhor preço"
            reais="00"
            cents="00"
            planBenefits={['Primeiro beneficio', 'Segundo beneficio']}
            title='Free'
          />
          <PlanCard
            description="O melhor custo benefício"
            reais={49}
            cents={90}
            planBenefits={['Primeiro beneficio', 'Segundo beneficio', 'Terceiro beneficio']}
            title='Basic'
            tag='Popular'
            emphasis="highlight"
          />
          <PlanCard
            description="lorem ipsun metus et  dolor"
            reais={119}
            cents={90}
            planBenefits={['Primeiro beneficio', 'Segundo beneficio', 'Terceiro beneficio', 'Quarto benefício']}
            title='Professional'

          />
        </CardsContainer>
      </MyThemeContext.Provider>
    </ThemeProvider>
  )
}