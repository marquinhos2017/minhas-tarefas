import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={2} />
          <FiltroCard legenda="concluidas" contador={4} />
          <FiltroCard legenda="urgentes" contador={5} />
          <FiltroCard legenda="importantes" contador={2} />
          <FiltroCard legenda="normal" contador={1} />
          <FiltroCard ativo legenda="todas" contador={10} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
