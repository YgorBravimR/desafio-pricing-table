import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { PlanCard } from "./components/PlanCard";
import { GlobalStyle, CardsContainer } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/themes/themes";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <CardsContainer>
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </CardsContainer>
    </ThemeProvider>
  )
}