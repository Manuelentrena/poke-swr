import React from "react";
import { Suspense } from "react";
const Pokedex = React.lazy(() => import("./Pokedex"));

export default function PokeContainer() {
  return (
    <Suspense fallback={<h2>Loading Pokedex...</h2>}>
      <Pokedex />
    </Suspense>
  );
}
