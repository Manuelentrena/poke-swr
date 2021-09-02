//Dependencies
import React, { Suspense } from "react";
import useSWR from "swr";

//Components
import LoadingSkeleton from "./LoadingSkeleton";

//Styles
import { StyledGrid } from "./Pokemon.styled";

//Suspende
const Pokemon = React.lazy(() => import("./Pokemon"));

export default function Pokedex() {
  const {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=150");
  return (
    <>
      {results.map((pokemon: { name: string }) => (
        <Suspense
          fallback={
            <StyledGrid>
              <LoadingSkeleton />
            </StyledGrid>
          }
        >
          <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </>
  );
}
