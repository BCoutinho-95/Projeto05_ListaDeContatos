import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaContatos from '../../containers/ListaContatos'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaContatos />
    <BotaoAdicionar />
  </>
)

export default Home
