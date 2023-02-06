import { NavBar } from './components/NavBar'
import { Title } from './components/Title'
import { NavItem } from './components/NavItem'

import { Header } from './components/Header'
import { Avatar } from './components/Avatar'
import { Text } from './components/Text/Text'
import { Button } from './components/Button'

const items = ['Página Inicial', 'Pesquisa', 'Explorar', 'Reels', 'Mensagens', 'Notificações', 'Criar', 'Perfil', 'Mais']

function App() {

  return (
    <> 
      <NavBar>

        <Title />
          {items.map((item) => (
            <NavItem key={item} title={item} />
          ))}

      </NavBar>

      <Header>
          <Avatar />
          <Text bold> @adatechbr </Text>
          <Button> Seguindo </Button>
          <Button> Enviar Mensagem </Button>

          <Text> 211 publicações</Text>
          <Text> 44,2 mil seguidores </Text>
          <Text> 2 seguindo</Text>
      </Header>
    </>
  )
}

export default App
