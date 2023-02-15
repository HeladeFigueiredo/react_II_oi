import { NavBar } from './components/navbar/NavBar';
import { Header } from './components/Header';
import { Grid, GridItem } from './ui/grid';

function App() {

  return (
    <Grid>

      <GridItem>
        <NavBar/>
      </GridItem>

      <GridItem>
        <Header />
      </GridItem>

    </Grid>
  )
}

export default App
