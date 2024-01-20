import styled from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListadeTarefas from './containers/ListadeTarefa'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova Tarefa</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
