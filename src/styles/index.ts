import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Tarefa/styles'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh; // Define a altura do container que contem a lista de tarefas e com a ajuda do overflow sera possivel que haja um scroll nessa altura
  overflow-y: scroll; // Traansboardar: todo conteudo qeu utrapassar esse 80%vgh ele sera ocultado e ira para o scroll
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: black;
  width: 100%;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
