import styled from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListadeTarefas from './containers/ListadeTarefa'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </Provider>
  )
}

export default App
