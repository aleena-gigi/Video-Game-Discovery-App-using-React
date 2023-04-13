import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <Grid templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* to make sure aside is only shown on large devices we must wrap it inside show */}
      {/* it has prop above which means the content inside it will only be shown on the screen size above the mentioned  */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
