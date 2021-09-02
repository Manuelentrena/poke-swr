// Dependencies
import { SWRConfig } from "swr";

//Components
import PokeContainer from "./components/PokeContainer";
import fetcher from "./components/fetcher";

//Styles
import { StyledPokedex, StyledTitle } from "./components/Pokemon.styled";

function App() {
  return (
    <>
      <StyledTitle>Pokedex</StyledTitle>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>
    </>
  );
}

export default App;
