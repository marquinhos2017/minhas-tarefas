import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

const Cadastro = () => (
  <>
    {/*Barra Lateral */}
    <BarraLateral mostrarfiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
