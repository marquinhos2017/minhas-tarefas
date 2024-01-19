import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh; // Define a altura do container que contem a lista de tarefas e com a ajuda do overflow sera possivel que haja um scroll nessa altura
  overflow-y: scroll; // Traansboardar: todo conteudo qeu utrapassar esse 80%vgh ele sera ocultado e ira para o scroll
`

export const Resultado = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
