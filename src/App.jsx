import { NavBar } from './components/navbar/NavBar';
import { Header } from './components/Header';
import { Grid, GridItem } from './ui/grid';
import { Highlights } from './components/highlights/highlights';
import  React, { useEffect } from 'react';
import { fetcher } from './services';


function App() {

  useEffect (() => {
    const makeRequest = async () => {
      const response = await fetcher ('photos');
      console.log(response);
    };

    makeRequest();
  }, []);

  return (
    <Grid>

      <GridItem>
        <NavBar/>
      </GridItem>

      <GridItem>
        <Header />
        <Highlights />
      </GridItem>

    </Grid>
  )
}

export default App
